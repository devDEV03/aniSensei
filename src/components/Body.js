import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login  = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse"));
const Movie  = lazy(() => import("./Movie"));
const StarredMovies = lazy(() => import("./StarredMovies"));
const Shimmer = lazy(() => import("./Shimmer"));


const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<Shimmer />}><Login /></Suspense>,
    },
    {
      path: "/browse",
      element: <Suspense fallback={<Shimmer />}><Browse /></Suspense>,
    },{
      path: "/starred",
      element: <Suspense fallback={<Shimmer />}><StarredMovies /></Suspense>,
    }, 
    {
      path: "/movie/:id",
      element: <Suspense fallback={<Shimmer />}><Movie /></Suspense>,
    }
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
