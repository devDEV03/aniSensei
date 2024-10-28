import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MovieShimmer } from "./Shimmer";
import LoginShimmer from "./LoginShimmer";
import StarredShimmer from "./StarredShimmer";
import BrowserShimmer from "./BrowserShimmer";

const Login  = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse"));
const Movie  = lazy(() => import("./Movie"));
const StarredMovies = lazy(() => import("./StarredMovies"));


const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<LoginShimmer/>}><Login /></Suspense>,
    },
    {
      path: "/browse",
      element: <Suspense fallback={<BrowserShimmer />}><Browse/></Suspense>,
    },{
      path: "/starred",
      element: <Suspense fallback={<StarredShimmer />}><StarredMovies /></Suspense>,
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
