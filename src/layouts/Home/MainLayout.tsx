import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({}) => {
  return (
    <div className="w-auto ">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
