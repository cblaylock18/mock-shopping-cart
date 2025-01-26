import App from "./App/App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Home } from "./Components/Home/Home";
import { Shopping } from "./Components/Shopping/Shopping";
import { Policies } from "./Components/Policies/Policies";
import { Cart } from "./Components/Cart/Cart";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "shopping",
                element: <Shopping />, //add children here dynamically with useparams
            },
            {
                path: "policies",
                element: <Policies />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
];

export default routes;
