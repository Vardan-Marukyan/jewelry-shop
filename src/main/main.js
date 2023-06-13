import { Link, Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Foooter } from "../footer/footer";

export const Main = () => {
    return(
        <>
            <Header/>
                <Outlet/>
            <Foooter/>
        </>
    )
}