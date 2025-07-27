
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';      // imrs
import Navbar from './Components/Navbar';
import Textform1 from './Components/Textform1';
import Textform2 from './Components/Textform2';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ React Router v6



function App(props) {
  const [mode, setmode] = useState('light')

  const toggleMode=()=>{
   if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor = '#042743';
    // document.title="TextUtils-Dark Mode";
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white';
    // document.title="TextUtils";
   }
  }

  return (
 <>
 <Navbar title="TextUtils" aboutText="About Textutils"  mode={mode} toggleMode={toggleMode} />
<div className=" my-5 rounded px-2 py-2 container" style={{ border: "2px solid black" }} >
<Textform1 mode={mode} toggleMode={toggleMode} />
</div>

<div className=" my-5 rounded px-2 py-2 container" style={{ border: "2px solid black" }}>
<Textform2 heading="Insert Your Text" mode={mode} toggleMode={toggleMode} />
</div>

<div className="">
  <About mode={mode} toggleMode={toggleMode}/>
</div>
<Alert/>
</>
 


 );
}

export default App;
// */
 
// for actual but for deployment we have to use one page as one page work on github but on server all pages work
// Here actual code

/*
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';      // imrs
import Navbar from './Components/Navbar';
import Textform1 from './Components/Textform1';
import Textform2 from './Components/Textform2';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App(props) {
  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      // document.title="TextUtils-Dark Mode";
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      // document.title="TextUtils";
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert />
        <Routes>
        <Route
          path="/login"
          element={
            <div className=" my-5 rounded px-2 py-2 container" style={{ border: "2px solid black" }} >
              <Textform1 mode={mode} toggleMode={toggleMode} />
            </div>
            }
        />
        <Route
          path="/"
          element={
        <div className=" my-5 rounded px-2 py-2 container" style={{ border: "2px solid black" }}>
          <Textform2 heading="Insert Your Text" mode={mode} toggleMode={toggleMode} />
        </div>
            }
        />
        <Route
          path="/About"
          element={
            <div className="">
          <About mode={mode} toggleMode={toggleMode} />
        </div>
            }
        />

          </Routes>
      </Router>
      //  Using this now change a-> link and href-> to in navbar 
    </>


  );
}

export default App;


*/