import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus"
import Show from "./components/Show"
import "./App.css";
import { getVideo } from "./api/fetch";

function App() {


  const [videoList, setVideoList] = useState([])
  const [video, setVideo] = useState({})
  const [searchInput, setSearchInput] = useState("");


  return (
    <div className="wrapper">
      <Router>
  
        <Routes>

          <Route path="/" element={<Home videoList={videoList} video={video} setVideoList={setVideoList} searchInput={searchInput} setSearchInput={setSearchInput}/>} />
          <Route path="/show/:id" element={<Show video={video} />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
