import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';



function App() {

  const [datas, setDatas] = useState([])

  return (
    <>
    <Navigation setDatas={setDatas} />
    <Home datas={datas} setDatas={setDatas} />


    </>
  );
}

export default App;
