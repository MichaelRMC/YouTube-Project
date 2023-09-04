import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <div className="navBar">
            <header>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            </header>
        </div>
    )
};
