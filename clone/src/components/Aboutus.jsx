import React from "react";
import Navbar from "./Navbar";

export default function Aboutus() {
    return (
        <>
            <Navbar />
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <img href="https://avatars.githubusercontent.com/u/131826343?v=4"></img>
                        <h5 className="name">Anthony Huarneck</h5>
                        <h6 className="dateOfBirth">March 20, 1994</h6>
                        <a href="#" className="card-link">
                            https://github.com/anthuarneck
                        </a>
                        <a href="#" className="https://pursuit.codetrack.dev/fellow/917">
                            CodeTrack
                        </a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <img href="https://avatars.githubusercontent.com/u/129802219?v=4"></img>
                        <h5 className="name">Davon Bridgett</h5>
                        <h6 className="dateOfBirth">March 13, 1993</h6>
                        <a href="#" className="card-link">
                            https://github.com/DaviiJones/YouTube-Project
                        </a>
                        <a href="#" className="https://pursuit.codetrack.dev/profile">
                            CodeTrack
                        </a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <img href="https://avatars.githubusercontent.com/u/127798396?v=4"></img>
                        <h5 className="name">Michael Caldwell</h5>
                        <h6 className="dateOfBirth">May 3rd 1984</h6>
                        <a href="#" className="card-link">
                            https://github.com/MichaelRMC
                        </a>
                        <a href="#" className="https://pursuit.codetrack.dev/fellow/926">
                            CodeTrack
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
