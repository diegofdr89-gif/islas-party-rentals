"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function LightboxImage({
  src,
  alt,
  className = "",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block h-full w-full cursor-zoom-in"
        aria-label={`Ampliar imagen: ${alt}`}
      >
        <div className="relative h-full w-full">
  <Image
  src={src}
  alt={alt}
  width={1200}
  height={900}
  sizes="(max-width: 768px) 50vw, 33vw"
  className={className}
/>
</div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Cerrar imagen"
          >
            <X size={28} />
          </button>

          <div
  className="relative max-h-[90vh] max-w-[94vw]"
  onClick={(event) => event.stopPropagation()}
>
  <Image
    src={src}
    alt={alt}
    width={1600}
    height={1200}
    sizes="94vw"
    className="max-h-[90vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl"
  />
</div>
        </div>
      )}
    </>
  );
}