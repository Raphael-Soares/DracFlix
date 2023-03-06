import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const scrollY = window.scrollY;

function Default() {
    return (
        <>
            <Navbar scrollY={scrollY} />
            <Outlet />
            <Footer />
        </>
    );
}

export default Default;
