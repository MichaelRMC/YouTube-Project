import React from "react";
import { useState, useEffect } from "react";
import { useNavBar } from "react-router-dom";


export default function Navbar() {
    const [navBar, setNavBar] = useNavBar()



    return (
        <div className="navBar">
            <div className="navBarContainer">
               
            </div>
        </div>
    )
};
