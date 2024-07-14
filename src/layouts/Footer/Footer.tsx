import { FC, ComponentPropsWithoutRef } from "react";

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

const Footer: FC<FooterProps> = ({ ...props }) => {
  return <footer {...props}>Footer</footer>;
};

export { Footer };
