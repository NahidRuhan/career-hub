import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
      
    </div>
  );
};

export default Root;
