import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MyLibrary from "./MyLibrary";
import Searched from "./Searched";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylibrary/:type" element={<MyLibrary />} />
            <Route path="/searched/:search" element={<Searched />} />
        </Routes>
    )
}
export default Pages;