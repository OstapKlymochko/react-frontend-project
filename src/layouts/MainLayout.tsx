import {FC} from 'react';
import {Outlet} from "react-router-dom";

import {GenresLinksList, Header} from "../components";

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