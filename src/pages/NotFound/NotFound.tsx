import { FC, ComponentPropsWithoutRef } from "react";

interface NotFoundProps extends ComponentPropsWithoutRef<"main"> {}

const NotFound: FC<NotFoundProps> = ({ ...props }) => {
  return <main {...props}>NotFound</main>;
};

export { NotFound };
