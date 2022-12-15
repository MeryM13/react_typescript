import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../elements/header";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Layout;
