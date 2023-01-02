import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MyLibrary from "./MyLibrary";
import Searched from "./Searched";
import Book from "./Book";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylibrary/:type" element={<MyLibrary />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/book/:id" element={<Book />} />
        </Routes>
    )
}
export default Pages;