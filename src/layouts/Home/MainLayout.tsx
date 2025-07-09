import Header from "@/components/home/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({}) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
