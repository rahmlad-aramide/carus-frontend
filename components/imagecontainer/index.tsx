import Image from "next/image";

interface ImageContainerProps {
  image?: string;
  size?: number;
  isPending?: boolean;
}

export default function ImageContainer({
  image,
  size = 56,
  isPending,
}: ImageContainerProps) {
  return (
    <div
      className="rounded-full overflow-hidden border-2 border-gray-300"
      style={{ width: size, height: size }}
    >
      {isPending ? (
        <div
          className={`w-full h-full bg-grey-10 animate-pulse rounded-full`}
        ></div>
      ) : (
        <Image
          src={image || "/avatar.png"}
          alt="Profile"
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
