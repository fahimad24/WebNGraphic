import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <div>
        <Image
          src="/icons/logoicon.png"
          alt="icon"
          className="h-7 w-7"
          width={50}
          height={50}
        />
      </div>
      <span className="font-semibold text-xl tracking-tight text-Ttext">
        WEBNGRAPHIC
      </span>
    </div>
  );
}
