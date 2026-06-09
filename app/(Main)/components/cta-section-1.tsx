import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";

type CTAProops = {
  first: string;
  second: string;
};

export default function CTASection1({ first, second }: CTAProops) {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ctabg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h3 className="text-lg md:text-xl font-medium text-Ttext mb-4">
          {first}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6">
          {second}
        </h2>

        <ResModTrigBtn>
          <NormalButton className="px-8  bg-Ttext py-2 text-base">
            Get Started Today
          </NormalButton>
        </ResModTrigBtn>
      </div>
    </section>
  );
}
