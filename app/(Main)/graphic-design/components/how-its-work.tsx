import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";

export default function HowItsWork() {
  return (
    <div className="bg-white">
      <section className=" text-[#282b30] lg:px-16 md:px-10 px-5 py-16">
        <div className="md:flex lg:gap-20 md:gap-10 lg:max-w-[1440px] m-0 md:m-auto">
          <div className="md:w-[50%] mb-8">
            <h3 className="text-[#00b1dc] uppercase md:text-base">
              How it works
            </h3>
            <h2 className="md:text-[32px] text-3xl leading-[44px] font-bold">
              Simplify Your Graphic Design Needs, Effortlessly
            </h2>
            <p className="text-[18px] md:mt-6 mt-4">
              Streamline all your graphic design needs with flexible
              subscription plans and a team of designers dedicated to bringing
              your creative vision to life—without the hassle.
            </p>
            <ResModTrigBtn>
              <NormalButton className="mt-8">Get Started</NormalButton>
            </ResModTrigBtn>
          </div>
          <div className="lg:space-y-16 md:space-y-10 space-y-8 md:w-[50%]">
            <div className="md:flex space-y-4 md:gap-8">
              <div className="lg:w-[100px] md:w-16">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 213.98 163.19"
                    width="82px"
                    className="lg:w-[82px] md:w-16"
                  >
                    <path
                      d="M164.24 25.18H38.86a12.13 12.13 0 0 0-12.13 12.13v94.39a12.13 12.13 0 0 0 12.13 12.12h21.58l7.68 19.37 23.38-19.37h72.74a12.13 12.13 0 0 0 12.13-12.12V37.31a12.13 12.13 0 0 0-12.13-12.13z"
                      fill="#00b1dc"
                    ></path>
                    <path
                      d="M169.44 89.09A44.55 44.55 0 1 1 214 44.54a44.59 44.59 0 0 1-44.56 44.55zm0-86a41.49 41.49 0 1 0 41.48 41.48 41.53 41.53 0 0 0-41.48-41.51z"
                      fill="#24282b"
                    ></path>
                    <path
                      d="M169.44 3.06a41.49 41.49 0 1 0 41.48 41.48 41.53 41.53 0 0 0-41.48-41.48z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M190 40l-17.95-20-.05-.1-.12-.12-.07-.07-.05-.05-.13-.1-.09-.08h-.06l-.13-.09-.1-.07h-.06l-.14-.07-.1-.06h-.07l-.14-.06H168.31l-.11.05-.14.06H168l-.12.06-.13.07h-.06l-.1.07-.13.09h-.06l-.09.08-.13.1v.05l-.07.07-.12.12-.07.07L148.88 40a3.52 3.52 0 1 0 5.23 4.7l11.81-13.2v35.26a3.52 3.52 0 1 0 7 0V31.5l11.81 13.15A3.52 3.52 0 1 0 190 40z"
                      fill="#00b1dc"
                    ></path>
                    <path
                      d="M78.2 114.17l-7.38-20a1.43 1.43 0 0 0-.52-.69L20.91 56.22A13 13 0 0 0 .13 68.45a12.94 12.94 0 0 0 5.06 8.6l49.4 37.26a1.46 1.46 0 0 0 .81.3l21.25 1.61h.12a1.53 1.53 0 0 0 1.43-2.06z"
                      fill="#fff"
                    ></path>
                    <g fill="#24282b">
                      <path d="M78.2 114.17l-7.38-20a1.43 1.43 0 0 0-.52-.69L20.91 56.22A13 13 0 0 0 .13 68.45a12.94 12.94 0 0 0 5.06 8.6l49.4 37.26a1.46 1.46 0 0 0 .81.3l21.25 1.61h.12a1.53 1.53 0 0 0 1.43-2.06zm-7.11-10.44a18.29 18.29 0 0 0-6.56 8.51l-7.53-.57c.05-3.15 1.19-11.34 11.48-15.06zM54 110.06L12.73 78.91 24.76 63 66.2 94.21a19.1 19.1 0 0 0-11 10.88 19.71 19.71 0 0 0-1.2 4.97zM3.16 68a10 10 0 0 1 15.9-9.36l3.26 2.46-12 15.95L7 74.61A9.93 9.93 0 0 1 3.16 68zm64.56 44.46a15.1 15.1 0 0 1 4.47-5.76l2.32 6.3zm16.5.71h68.29v3.06H84.22zm0-15.52h68.29v3.06H84.22z"></path>
                    </g>
                    <path
                      d="M110.11 66.87H47.93a1.54 1.54 0 0 1-1.53-1.53v-22a1.54 1.54 0 0 1 1.53-1.53h62.18a1.53 1.53 0 0 1 1.53 1.53v22a1.53 1.53 0 0 1-1.53 1.53zm-60.65-3.06h59.12v-19H49.46z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="space-y-4 lg:w-[360px]">
                <h3 className="lg:text-[26px] text-[22px]">
                  1. Submit Your Request
                </h3>
                <p className="text-md">
                  Start by submitting your request and scheduling a
                  consultation. We’ll discuss your vision, goals, and
                  requirements to ensure we’re aligned before getting started.
                </p>
              </div>
            </div>

            <div className="md:flex space-y-4 md:gap-8">
              <div className="lg:w-[100px] md:w-16">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 194.53 161.76"
                    width="82px"
                    className="lg:w-[82px] md:w-16"
                  >
                    <path
                      d="M108.08 47.86c4.47-19-26.1-19.27-21.52 0L66.38 95.15s15.47-.51 15.47 24h30.94c0-24.47 15.48-24 15.48-24z"
                      fill="#00b1dc"
                    ></path>
                    <path
                      d="M150.19 39.85a67 67 0 0 0-105.74-.15L42 37.82a70.08 70.08 0 0 1 86.53-19.59 70.66 70.66 0 0 1 24 19.74z"
                      fill="#24282b"
                    ></path>
                    <path
                      d="M19.67 92.81a1.51 1.51 0 0 1-1.15-.53L.38 71.49A1.53 1.53 0 0 1 1.53 69h15.73a80.89 80.89 0 0 1 151.85-25.29l-2.71 1.4A77.85 77.85 0 0 0 20.1 70.68 1.51 1.51 0 0 1 18.59 72H4.89l14.78 17 14.78-17h-7.21v-3h10.58A1.53 1.53 0 0 1 39 71.49L20.82 92.28a1.51 1.51 0 0 1-1.15.53zm77.6 68.95a80.86 80.86 0 0 1-71.85-43.71l2.71-1.4a77.85 77.85 0 0 0 146.3-25.57 1.52 1.52 0 0 1 1.51-1.33h13.7l-14.78-16.94-14.78 16.94h7.21v3.06h-10.58a1.53 1.53 0 0 1-1.15-2.54l18.15-20.79a1.51 1.51 0 0 1 2.3 0l18.14 20.79a1.53 1.53 0 0 1-1.15 2.54h-15.73a80.9 80.9 0 0 1-80 68.95z"
                      fill="#24282b"
                    ></path>
                    <g fill="#00b1dc">
                      <path d="M90.89 8.41h12.74v12.74H90.89zM36.87 37.56h12.74V50.3H36.87z"></path>
                      <path d="M157.65 50.3h-12.74V37.56h12.74z"></path>
                    </g>
                    <path
                      d="M119.89 129.81H74.64a1.53 1.53 0 0 1-1.53-1.53v-9.17a1.52 1.52 0 0 1 1.53-1.53h45.25a1.52 1.52 0 0 1 1.53 1.53v9.17a1.53 1.53 0 0 1-1.53 1.53zm-43.72-3.06h42.19v-6.11H76.17zm19.62-93.23h3.06v45.49h-3.06z"
                      fill="#24282b"
                    ></path>
                    <circle
                      cx="97.32"
                      cy="79.01"
                      fill="#231f20"
                      r="6.63"
                    ></circle>
                    <path
                      d="M78.3 148.25a1.52 1.52 0 0 1-.42-.06 70.4 70.4 0 0 1-42.95-35.37l2.72-1.4a67.32 67.32 0 0 0 39.13 33.24v-16.38a1.53 1.53 0 0 1 1.53-1.53h37.91a1.53 1.53 0 0 1 1.53 1.53v16.38a66.73 66.73 0 0 0 37.52-30.3l2.65 1.53a70.19 70.19 0 0 1-41.27 32.3 1.53 1.53 0 0 1-1.9-1.05 2 2 0 0 1 0-.42v-16.91H79.83v16.91a1.54 1.54 0 0 1-1.53 1.53z"
                      fill="#24282b"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="space-y-4 md:w-[360px]">
                <h3 className="lg:text-[26px] text-[22px]">
                  2. Your Designer Gets to Work
                </h3>
                <p className="text-md">
                  Once your request is submitted, we assign it to the
                  best-suited designer for the job. With certain plans, you can
                  even enjoy a same-day turnaround on select projects.
                </p>
              </div>
            </div>

            <div className="md:flex space-y-4 md:gap-8">
              <div className="lg:w-[100px] md:w-16">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 178.61 161.76"
                    width="82px"
                    className="lg:w-[82px] md:w-16"
                  >
                    <path
                      d="M2.72 102.94L.6 100.39l33.5-27.7a1.67 1.67 0 0 1 2.11 0L62.8 94.34l-2.2 2.47-25.43-20.7z"
                      fill="#24282b"
                    ></path>
                    <path
                      d="M22.89 135.66l65.67-67.99 51.75 48.09v19.9z"
                      fill="#00b1dc"
                    ></path>
                    <path
                      d="M140.31 137.32H1.66A1.66 1.66 0 0 1 0 135.66V16.25a1.66 1.66 0 0 1 1.66-1.66h138.65a1.67 1.67 0 0 1 1.69 1.66v119.41a1.66 1.66 0 0 1-1.69 1.66zM3.32 134h135.33V17.91H3.32z"
                      fill="#24282b"
                    ></path>
                    <path
                      d="M155.56 74h-3.31V3.32H16.92V10H13.6V1.66A1.66 1.66 0 0 1 15.26 0h138.65a1.65 1.65 0 0 1 1.65 1.66z"
                      fill="#00b1dc"
                    ></path>
                    <path
                      d="M54.9 58.05A10.12 10.12 0 1 1 65 47.93a10.13 10.13 0 0 1-10.1 10.12zm0-16.92a6.8 6.8 0 1 0 6.8 6.8 6.81 6.81 0 0 0-6.8-6.8zm80.18 120.63a43.53 43.53 0 1 1 43.53-43.53 43.58 43.58 0 0 1-43.53 43.53zm0-83.75a40.22 40.22 0 1 0 40.22 40.22A40.27 40.27 0 0 0 135.08 78z"
                      fill="#24282b"
                    ></path>
                    <path
                      d="M135.08 78a40.22 40.22 0 1 0 40.22 40.22A40.27 40.27 0 0 0 135.08 78z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M128.24 140.86a5.8 5.8 0 0 1-4.52-2.16l-15.18-18.84 9-7.28 10.66 13.23 24.34-30.22 9 7.29-28.78 35.82a5.79 5.79 0 0 1-4.52 2.16z"
                      fill="#00b1dc"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="space-y-4 md:w-[360px]">
                <h3 className="lg:text-[26px] text-[22px]">
                  3. You&apos;ve Got a Design
                </h3>
                <p className="text-md">
                  If it’s not exactly what you envisioned, don’t worry! Our
                  platform makes providing feedback and requesting revisions
                  quick and easy. Plus, every plan includes unlimited revisions
                  and full access to all source files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
