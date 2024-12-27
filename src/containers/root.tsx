import { AuthLayout } from "@/layouts/auth";
import { LAYOUT_TYPE } from "@/layouts/declare";
import { MainLayout } from "@/layouts/main";

type RootProps = {
  children: React.ReactNode;
  layout?: LAYOUT_TYPE;
};

export const RootLayout = ({ children, layout }: RootProps) => {
  switch (layout) {
    case LAYOUT_TYPE.MAIN:
      return <MainLayout>{children}</MainLayout>;

    case LAYOUT_TYPE.AUTH:
      return <AuthLayout>{children}</AuthLayout>;

    default:
      return children;
  }
};
