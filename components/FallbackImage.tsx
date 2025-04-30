"use client"

import Image, { ImageProps } from "next/image"
import { useState } from "react"

interface FallbackImageProps extends ImageProps {
  fallbackSrc?: string
}

export default function FallbackImage({ fallbackSrc, onError, ...props }: FallbackImageProps) {
  const [src, setSrc] = useState(props.src)

  return (
    <Image
      {...props}
      src={src}
      onError={e => {
        if (fallbackSrc) setSrc(fallbackSrc)
        if (onError) onError(e)
      }}
    />
  )
} 