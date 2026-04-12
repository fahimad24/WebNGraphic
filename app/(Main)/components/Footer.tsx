import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const phoneNumber2 = process.env.NEXT_PUBLIC_PHONE_NUMBER2;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  const address2 = process.env.NEXT_PUBLIC_ADDRESS2;
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_PAGE;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <footer className="bg-Mbg">
      <div className="max-w-7xl py-8 w-full px-5 md:px-12 mx-auto">
        <div className="flex gap-8  justify-between flex-col md:flex-row">
          <div className="space-y-4">
            <div className="flex items-center text-white space-x-2">
              <div>
                <Image
                  src="/icons/logoicon.png"
                  alt="icon"
                  className="h-5 w-5"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-lg font-bold">WEBNGRAPHIC</span>
            </div>
            <p className="text-sm text-gray-300">
              Creating exceptional web experiences that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href={facebookUrl}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 text-Ttext hover:scale-105 transition duration-200 cursor-pointer w-5" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <IoLogoWhatsapp className="h-5 text-Ttext hover:scale-105 transition duration-200 cursor-pointer w-5" />
              </a>
              <span className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 text-Ttext hover:scale-105 transition duration-200 cursor-pointer w-5" />
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-gray-400 mr-2" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-gray-400 mr-2" />
              <a
                href={`tel:${phoneNumber2}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {phoneNumber2}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-gray-400 mr-2" />
              <a
                href={`mailto:${emailAddress}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {emailAddress}
              </a>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
              <span className="text-sm text-gray-300">{address}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
              <span className="text-sm text-gray-300">{address2}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 py-6 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} WEBNGRAPHIC. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="privacy-policy"
              className="text-xs text-gray-300 hover:text-gray-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="terms-of-service"
              className="text-xs text-gray-300 hover:text-gray-100 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="cookie-policy"
              className="text-xs text-gray-300 hover:text-gray-100 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
