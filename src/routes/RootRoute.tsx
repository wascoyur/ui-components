import {createBrowserRouter} from "react-router-dom";
import Menu from "../components/menu-02/Menu02.tsx";

const router = createBrowserRouter([{
    path:'/',
    element:<Menu/>
}])

export default router
