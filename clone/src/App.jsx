import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Aboutus from './components/Aboutus'
import Navbar from './components/Navbar'

import './App.css'
import {  getVideo } from './api/fetch'

function App() {

  // console.log(getVideo())



  return (

    <div className='wrapper'>


      <Router>

      </Router>
    </div>

  )
}

export default App
