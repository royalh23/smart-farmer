import { FC, ComponentPropsWithoutRef, Fragment } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

interface MainLayoutProps extends ComponentPropsWithoutRef<"div"> {}

const MainLayout: FC<MainLayoutProps> = ({ ...props }) => {
  return (
    <Fragment {...props}>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export { MainLayout };
