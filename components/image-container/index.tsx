import Image from "next/image";

interface ImageContainerProps {
  image?: string;
  size?: number;
  isPending?: boolean;
}

function getSafeImage(image?: string) {
  if (!image) return "/avatar.png"; // fallback
  if (image.startsWith("/")) return image; // local path
  try {
    new URL(image); // absolute URL check
    return image;
  } catch {
    return "/avatar.png"; // fallback if invalid
  }
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
          src={getSafeImage(image)}
          alt="Profile"
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
