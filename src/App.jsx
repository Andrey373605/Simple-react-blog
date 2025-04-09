import React, { useEffect, useState } from "react";

import "./styles/App.css"

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";

import Navbar from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";

function App() {
    const pages = [
        {link: '/about', name: 'About'},
        {link: '/posts', name: 'Posts'},
    ]

    return(
        <BrowserRouter>
            <Navbar pages={pages}/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
