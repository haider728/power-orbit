import Image from "next/image";
import { isExternalImageSrc } from "@/lib/publicImage";
import styles from "@/components/sections/home1/blog-carousel.module.css";

type BlogCoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export default function BlogCoverImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: BlogCoverImageProps) {
  const unoptimized = isExternalImageSrc(src);

  return (
    <div className={styles.imageWrap}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes={sizes}
        className={styles.image}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        unoptimized={unoptimized}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
