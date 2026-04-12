import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";
import { Check } from "lucide-react";

type PricingPlan = {
  title: string;
  description: string;
  discountPrice: string;
  regularPrice: string;
  popularTag?: boolean;
  points: string[];
};

type PricingProps = {
  pricing: PricingPlan[];
  service: string;
};

export default function Pricing({ pricing, service }: PricingProps) {
  return (
    <div className="bg-gray-100 px-5 py-16 md:px-12">
      <div className="max-w-7xl space-y-10 mx-auto">
        <h1 className="text-4xl text-center font-bold">Our Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className="p-6 shadow-lg w-full bg-white rounded-2xl relative"
            >
              {plan.popularTag && (
                <div className="absolute top-0 right-0 bg-Redish text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}

              <div>
                <div className="border-b-2 pb-1">
                  <h2 className="text-2xl text-center  uppercase font-bold">
                    {plan.title}
                  </h2>
                </div>

   {/*              <div className="py-8 flex justify-center border-b-2">
                  <p className="text-5xl font-bold text-Ttext">
                    {plan.discountPrice}
                    <span className="text-gray-400 text-2xl italic line-through">
                      {plan.regularPrice}
                    </span>
                  </p>
                </div> */}
              </div>
              <div>
                <ul className="py-6 pl-5 list-none space-y-2 text-gray-700">
                  <p className="text-center pb-2 text-gray-500">
                    {plan.description}
                  </p>
                  {plan.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-2.5 group hover:text-Ttext"
                    >
                      <span>
                        <Check
                          size={32}
                          className="!w-[18px] p-1 group-hover:bg-tttext-Ttext group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
                        />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <ResModTrigBtn plan={plan.title} service={service}>
                    <NormalButton>Get Started</NormalButton>
                  </ResModTrigBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
