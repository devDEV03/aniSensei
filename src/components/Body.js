import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MovieShimmer } from "./Shimmer";
import DefaultShimmer from "./DefaultShimmer";

const Login  = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse"));
const Movie  = lazy(() => import("./Movie"));
const StarredMovies = lazy(() => import("./StarredMovies"));


const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<DefaultShimmer/>}><Login /></Suspense>,
    },
    {
      path: "/browse",
      element: <Suspense fallback={<DefaultShimmer />}><Browse /></Suspense>,
    },{
      path: "/starred",
      element: <Suspense fallback={<DefaultShimmer />}><StarredMovies /></Suspense>,
    }, 
    {
      path: "/movie/:id",
      element: <Suspense fallback={<DefaultShimmer />}><Movie /></Suspense>,
    }
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
