import { Fragment } from "react/jsx-runtime";
import Footer from "./Footer";
import Header from "./Header";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <div className="min-h-[90vh] px-24 bg-[#F5F5F5] w-screen pt-16">
        <Suspense fallback="...loading">{children}</Suspense>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
