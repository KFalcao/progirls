import getConfig from "next/config";
import NextImage, { ImageProps } from "next/image";

const config = getConfig();
const publicRuntimeConfig = config?.publicRuntimeConfig || {};
const { basePath } = publicRuntimeConfig;

/**
 * Modifies the source of an image by appending the base path.
 */
const handleSrc = (src: ImageProps["src"]) => {
  if (!basePath) return src;

  if (typeof src === "string") {
    return `${basePath}${src}`;
  }

  const hasDefault = "default" in src;
  if (hasDefault) {
    return { ...src, src: `${basePath}${src.default.src}` };
  }

  return { ...src, src: `${basePath}${src.src}` };
};

export const Image = ({ src, ...props }: ImageProps) => {
  return <NextImage src={handleSrc(src)} {...props} />;
};
