import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MovieShimmer } from "./Shimmer";

const Login  = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse"));
const Movie  = lazy(() => import("./Movie"));
const StarredMovies = lazy(() => import("./StarredMovies"));


const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<MovieShimmer/>}><Login /></Suspense>,
    },
    {
      path: "/browse",
      element: <Suspense fallback={<MovieShimmer />}><Browse /></Suspense>,
    },{
      path: "/starred",
      element: <Suspense fallback={<MovieShimmer />}><StarredMovies /></Suspense>,
    }, 
    {
      path: "/movie/:id",
      element: <Suspense fallback={<MovieShimmer />}><Movie /></Suspense>,
    }
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
