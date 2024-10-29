import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MovieShimmer } from "./Shimmer";
import StarredShimmer from "./StarredShimmer";
import BrowserShimmer from "./BrowserShimmer";
import Login from "./Login";

const Browse = lazy(() => import("./Browse"));
const Movie  = lazy(() => import("./Movie"));
const StarredMovies = lazy(() => import("./StarredMovies"));


const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Suspense fallback={<BrowserShimmer />}><Browse/></Suspense>,
    },{
      path: "/starred",
      element: <Suspense fallback={<StarredShimmer />}><StarredShimmer /></Suspense>,
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
