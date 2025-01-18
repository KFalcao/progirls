import clsx from "clsx";

type TextProps = {
  children: React.ReactNode;
  className?: ClassName;
};

export const Text = ({ children, className }: TextProps) => {
  return <p className={clsx("text-base", className)}>{children}</p>;
};
