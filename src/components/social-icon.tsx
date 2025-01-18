import { ReactNode } from "react";
import clsx from "clsx";

type Sizes = "md" | "sm" | "lg";

type SocialIconProps = Readonly<{
  children: ReactNode;
  className?: ClassName;
  size?: Sizes;
}>;

const md: ClassName = "p-2";
const sm: ClassName = "";
const lg: ClassName = "";

const sizes: { [key in Sizes]: ClassName } = {
  md,
  sm,
  lg,
};

export function SocialIcon({
  children,
  className,
  size = "md",
}: SocialIconProps) {
  return (
    <div
      className={clsx(
        "border-2 border-solid border-emphasis rounded-full text-emphasis",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
