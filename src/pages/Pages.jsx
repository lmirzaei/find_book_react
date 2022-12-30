import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLibrary from "./MyLibrary";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylibrary/:type" element={<MyLibrary />} />
        </Routes>
    )
}
export default Pages;