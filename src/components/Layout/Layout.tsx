import { Fragment } from "react/jsx-runtime";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <div className="min-h-[70vh] px-24 bg-[#F5F5F5] w-full pt-16 mb-3 flex-1">
        {children}
      </div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
