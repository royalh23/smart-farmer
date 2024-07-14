import { FC, ComponentPropsWithoutRef } from "react";

interface HomeProps extends ComponentPropsWithoutRef<"main"> {}

const Home: FC<HomeProps> = ({ ...props }) => {
  return <main {...props}>Home</main>;
};

export { Home };
