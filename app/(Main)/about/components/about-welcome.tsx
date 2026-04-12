import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";
import Image from "next/image";
export default function AboutWelcome() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl w-full mx-auto px-5 md:px-12 py-20">
        <div className="flex flex-col-reverse items-center md:flex-row gap-10">
          <div className="basis-[50%] space-y-4 md:space-y-5">
            <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl">
              Welcome to WebnGraphic
            </h2>
            <blockquote className="text-Ttext text-lg md:text-xl px-3 border-l-4 border-Ttext">
              Bringing Your Digital Vision to Life
            </blockquote>
            <p className="text-base md:text-lg text-gray-700">
              At WebNGraphic, we craft stunning websites and eye-catching
              graphics that elevate your brand. Whether you need a sleek
              website, engaging social media visuals, or a complete brand
              identity, our expert team transforms ideas into impactful digital
              experiences. With a focus on creativity, functionality, and user
              experience, we deliver high-quality designs that captivate and
              convert—helping your business stand out in the digital world.
            </p>
            <ResModTrigBtn>
              <NormalButton className="py-2 px-5  text-white rounded-md text-lg bg-Ttext">
                Contact Us
              </NormalButton>
            </ResModTrigBtn>
          </div>

          <div className=" basis-[50%]">
            <div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/welcomeimg.png"
                  alt="welcome"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
