import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Login from '../views/login'
import SignUp from '../views/signUp'
import Ad from "../views/ad page";
import Header from "../components/header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div><Login /></div>,
    },
    {
        path: "/signup",
        element: <div><SignUp /></div>,
    },
    {
        path: "/adpage",
        element: <div><Ad /></div>,
    },
    {
        path: "/home",
        element: <div><Home /></div>,
    },
    {
        path: "/detail/:adId",
        element: <div><Detail /></div>,
    },
    {
        path: "/header",
        element: <div><Header /></div>,
    },
]);
function Router() {
    return <RouterProvider router={router} />

}
export default Router;