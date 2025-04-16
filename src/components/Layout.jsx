import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div>
      {/* <div className="app-layout-navbar"> */}
      <Navbar />
      {/* </div> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
