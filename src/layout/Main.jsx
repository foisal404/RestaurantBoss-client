import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen lg:px-2">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Main;
