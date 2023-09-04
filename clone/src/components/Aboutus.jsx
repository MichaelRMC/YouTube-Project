import React from "react";
import Navbar from "./Navbar";


export default function Aboutus() {
    return (
        <>
        <Navbar />
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="name">Anthony Huarneck</h5>
                    <h6 className="dateOfBirth">March 20, 1994</h6>
                    <p className="hobbies"></p>
                    <a href="#" className="card-link">https://github.com/anthuarneck</a>
                    {/* Codetrack links? */}
                    <a href="#" className="card-link">Another link</a>

                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="name">Davon Bridgett</h5>
                    <h6 className="dateOfBirth">March 13, 1993</h6>
                    <p className="hobbies"></p>
                    <a href="#" className="card-link">https://github.com/DaviiJones/YouTube-Project</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="name">Michael Caldwell</h5>
                    <h6 className="dateOfBirth">May 3rd 1984</h6>
                    <p className="hobbies"></p>
                    <a href="#" className="card-link">https://github.com/MichaelRMC</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
        </>
    );
}
