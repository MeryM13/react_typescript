import React from 'react';
import Header from "./elements/header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header userId={0}/>
            <Outlet/>
        </>
    );
};

export default Layout;
