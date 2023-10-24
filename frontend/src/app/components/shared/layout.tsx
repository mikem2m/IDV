import "../../../styles/globals.css";
import Navbar from "../navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
