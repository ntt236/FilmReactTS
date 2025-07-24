import { Link } from "react-router-dom";
import logo from "@/assets/react.svg";
import { SearchIcon } from "lucide-react";
import GenreDropDown from "./GenreDropdown";
import NationalDropDown from "./NationalDropdown";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Header = () => {
  //   const [listMovie, setListMovie] = useState("");
  //   console.log("🚀 ~ Header ~ listMovie:", listMovie);

  //   useEffect(() => {
  //     const fetchMovies = async () => {
  //       try {
  //         const res = await axios.get(
  //           "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v2?page=1"
  //         );
  //         if (res.status === 200) {
  //           setListMovie(res.data);
  //         }
  //       } catch (error) {
  //         console.log("🚀 ~ fetchMovies ~ error:", error);
  //       }
  //     };
  //     fetchMovies();
  //   }, []);

  return (
    <div className="flex justify-between items-center gap-4  h[300px] px-4 py-6 shadow-md ">
      {/* Logo */}
      <div className="flex items-center justify-between relative gap-8">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-10 w-10" />
          </Link>
        </div>
        <div className="relative w-72">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Tìm kiếm phim"
            className="w-full pl-10 pr-3 py-1.5 rounded-2xl text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      {/* Seach*/}

      {/* Menu */}
      <nav>
        <ul className="flex items-center gap-5 justify-between font-medium">
          <li>
            <Link to="/duyet-tim" className="hover:text-blue-500">
              Bộ lọc
            </Link>
          </li>
          <li>
            <Link to="/danh-sach/phim-bo" className="hover:text-blue-500">
              Phim bộ
            </Link>
          </li>
          <li>
            <Link to="/danh-sach/phim-le" className="hover:text-blue-500">
              Phim lẻ
            </Link>
          </li>
          <li>
            <Link to="/danh-sach/tv-shows" className="hover:text-blue-500">
              TV show
            </Link>
          </li>
          <li>
            <Link to="/danh-sach/hoat-hinh" className="hover:text-blue-500">
              Hoạt hình
            </Link>
          </li>
          <li>
            <GenreDropDown />
          </li>
          <li>
            <NationalDropDown />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
