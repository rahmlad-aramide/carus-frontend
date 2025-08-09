import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/assets/loader.gif"}
        alt="Loading..."
        width={1080}
        height={1080}
        className="flex w-auto aspect-square h-full max-h-svh object-center"
      />
    </div>
  );
}
