import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


import "./App.css";
import { getVideo } from "./api/fetch";

function App() {




  const [videoList, setVideoList] = useState([])
  const [video, setVideo] = useState({})

  useEffect(() => {
    getVideo()
      .then((data) => {
        setVideoList(data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(videoList)


  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home videoList={videoList} video={video}/>} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
