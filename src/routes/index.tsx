import SeriesFilm from "@/components/home/SeriesFilm";
import MainLayout from "@/layouts/Home/MainLayout";
import HomePage from "@/pages/home/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/danh-sach/phim-bo", element: <SeriesFilm /> },
    ],
  },
]);
