import Image from "next/image";

interface ImageContainerProps {
  image?: string;
  size?: number;
}

export default function ImageContainer({
  image,
  size = 56,
}: ImageContainerProps) {
  return (
    <div
      className="rounded-full overflow-hidden border-2 border-gray-300"
      style={{ width: size, height: size }}
    >
      <Image
        src={image || "/avatar.png"}
        alt="Profile"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
