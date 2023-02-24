import {FC} from 'react';
import {GenresLinksList, Header} from "../components";
import {Outlet} from "react-router-dom";


const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <GenresLinksList/>
            <Outlet/>
        </>
    );
};

export {MainLayout};