import { FC, ComponentPropsWithoutRef } from "react";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
  return <header {...props}>Header</header>;
};

export { Header };
