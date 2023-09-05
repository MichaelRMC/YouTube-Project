import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./Navbar.css"


export default function Navbar() {

    return (
        <div className="navBar">
            <header>
            <img src="https://cdn-icons-png.flaticon.com/256/152/152810.png"></img>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About Us!</h2></Link>
            </header>
        </div>
    )
};
