import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLibrary from "./MyLibrary";

function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mylibrary" element={<MyLibrary />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Pages;