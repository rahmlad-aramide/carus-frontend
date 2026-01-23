import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageUploadProps {
  onFileSelect: (file: File | null) => void;
  defaultValue?: string | null;
  className?: string;
}

export const ImageUpload = ({
  onFileSelect,
  defaultValue,
  className,
}: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    defaultValue || null,
  );

  // Cleanup URL when component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Revoke the old blob URL before creating a new one
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }

      const newUrl = URL.createObjectURL(file);
      setPreviewUrl(newUrl);
      onFileSelect(file);
    }
  };

  return (
    <div
      style={
        previewUrl
          ? { backgroundImage: `url(${previewUrl})`, minHeight: 250 }
          : { backgroundColor: "#F3F3F3" }
      }
      className="bg-cover bg-center flex items-center justify-center w-full h-[96px] rounded-[10px] mt-2 cursor-pointer relative"
    >
      {/* Hidden Input */}
      <input
        id="photos"
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleChange}
      />

      {/* Icon */}
      <div className="relative w-4 h-4 pointer-events-none">
        <Image
          src="/gallery-import.png"
          alt="upload image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
