"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ImageIcon, Upload, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Cropper, CropperRef } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  onImageUploaded: (images: { url: string; publicId: string }[]) => void;
  initialImages?: { url: string; publicId: string }[];
  uploadPreset: string;
  aspectRatio: number;
}

export function MultipleImageUploader({
  onImageUploaded,
  initialImages = [],
  uploadPreset,
  aspectRatio,
}: ImageUploaderProps) {
  const [images, setImages] =
    useState<{ url: string; publicId: string }[]>(initialImages);
  const [cropperImage, setCropperImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCropper, setShowCropper] = useState(false);
  const cropperRef = useRef<CropperRef>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        setCropperImage(reader.result as string);
        setShowCropper(true);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    multiple: false,
  });

  const handleCropComplete = useCallback(
    async (cropper: any) => {
      const canvas = cropper.getCanvas();
      if (canvas) {
        const croppedImage = canvas.toDataURL();
        setUploading(true);

        try {
          // Simulate progress
          const progressInterval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 90) {
                clearInterval(progressInterval);
                return prev;
              }
              return prev + 10;
            });
          }, 300);

          // Convert data URL to Blob
          const blob = await (await fetch(croppedImage)).blob();
          const file = new File([blob], "cropped-image.jpg", {
            type: "image/jpeg",
          });

          // Create form data for upload
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", uploadPreset);
          const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

          // Upload directly to Cloudinary
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          const result = await response.json();

          clearInterval(progressInterval);
          setProgress(100);

          if (result.secure_url && result.public_id) {
            const newImage = {
              url: result.secure_url,
              publicId: result.public_id,
            };
            setImages((prev) => [...prev, newImage]);
            onImageUploaded([...images, newImage]);
          }
        } catch (error) {
          console.error("Upload failed:", error);
        } finally {
          setTimeout(() => {
            setUploading(false);
            setProgress(0);
            setShowCropper(false);
          }, 500);
        }
      }
    },
    [onImageUploaded, uploadPreset, images]
  );

  const handleRemoveImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.publicId !== id));
    onImageUploaded(images.filter((img) => img.publicId !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Dropzone always visible */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-gray-300 hover:border-primary"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2">
          <ImageIcon className="h-10 w-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {isDragActive
              ? "Drop the image here"
              : "Drag & drop an image here, or click to select"}
          </p>
        </div>
      </div>

      {/* Cropper modal */}
      {showCropper && cropperImage && !uploading && (
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Crop Image</h3>
          <Cropper
            src={cropperImage}
            className="h-[300px] rounded border"
            stencilProps={{ aspectRatio: aspectRatio }}
            ref={cropperRef}
          />
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => setShowCropper(false)}
              variant="outline"
              className="mr-2"
            >
              Cancel
            </Button>
            <Button
              onClick={(e) => {
                if (cropperRef.current) {
                  handleCropComplete(cropperRef.current);
                }
              }}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </div>
        </div>
      )}

      {/* Uploading progress */}
      {uploading && (
        <div className="border rounded-lg p-4 mt-4">
          <p className="text-sm mb-2">Uploading image...</p>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {/* Image grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mt-4">
          {images.map((img, index) => (
            <div key={img.publicId} className="relative border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 bg-background/80"
                onClick={() => handleRemoveImage(img.publicId)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Image
                width={1280}
                height={720}
                src={img.url}
                alt={`Uploaded image ${index + 1}`}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
