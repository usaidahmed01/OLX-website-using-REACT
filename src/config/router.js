import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Login from '../views/login'
import SignUp from '../views/signUp'
import Ad from "../views/ad page";
import Header from "../components/header";
import Footer from "../components/footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase'
import { useEffect, useState } from "react";
import ProfilePictures from "../views/uploadPFPs";
import CartPage from "../components/cartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div><Layout /></div>,
        children: [
            // {
            //     path: "/",
            //     element: <div><Login /></div>,
            // },
            // {
            //     path: "/signup",
            //     element: <div><SignUp /></div>,
            // },

            {
                path: "/",
                element: <div><Home /></div>,
            },
            {
                path: "/adpage",
                element: <div><Ad /></div>,
            },
            {
                path: "/detail/:adId",
                element: <div><Detail /></div>,
            },
            {
                path: "/editProfile",
                element: <div><ProfilePictures /></div>,
            },
            {
                path: "/addtocart",
                element: <div><CartPage /></div>,
            },
        ],

    }, {
        path: "/signup",
        element: <div><SignUp /></div>,
    }, {
        path: "/login",
        element: <div><Login /></div>,
    }


]);

function Layout() {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const { pathname } = window.location
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            console.log(user, 'user hai bhai ye');
            setUser(user)

        });

    }, [])
    useEffect(() => {
        if (user) {
            if (pathname === '/login' || pathname === '/signup') {
                navigate('/');

            }

        } else {
            if (pathname === '/adpage') {
                navigate('/login');

            }
        }

    }, [pathname, user])

    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>


}

function Router() {
    return <RouterProvider router={router} />

}
export default Router;