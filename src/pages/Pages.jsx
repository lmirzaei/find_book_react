import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/myLibrary" element={<MyLibrary/>}/>
        </Routes>
    )
}
export default Pages;