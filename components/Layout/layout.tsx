import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "./footer/footer";
import Navbar from "./Navbar/navBar";

type Props = {
  children: JSX.Element;
};


export default function Layout({ children }: Props) {

  return (
    <div>

      <Navbar />
        <Fragment>{children}</Fragment>
      <Footer />
    </div>
  );
}
