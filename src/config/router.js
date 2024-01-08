import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
const router = createBrowserRouter([
    {
        path: "/",
        element: <div><Home /></div>,
    },
    {
        path: "/detail/:adId",
        element: <div><Detail /></div>,
    },
]);
function Router() {
    return <RouterProvider router={router} />

}
export default Router;