import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    path: '',
                    Component: Home
                },
                {
                    path: '/category/:id',
                    Component: CategoryNews
                }
            ]
        },
        {
            path: '/auth',
            Component: <h1>authentication page</h1>
        },
        {
            path: '/news',
            Component: <h1>News page</h1>
        },
        {
            path: '/*',
            Component: <h1>Error 404 page</h1>
        }
    ]
)

export default router;