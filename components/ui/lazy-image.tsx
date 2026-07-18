"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImageProps {
  wrapperClassName?: string;
}

export function LazyImage({ className, alt, wrapperClassName, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "relative w-full h-full overflow-hidden bg-gray-100 dark:bg-gray-800",
        !loaded && "animate-pulse",
        wrapperClassName
      )}
    >
      <Image
        alt={alt}
        className={cn(
          "transition-all duration-700 ease-out",
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-[2px]",
          className
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
