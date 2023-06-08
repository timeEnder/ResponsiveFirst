import './App.css';
import {Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import AppDesign from "./pages/AppDesign/AppDesign";


function App() {

  return (
    <div className='cxntainer'>
        <Routes>
            <Route path = {'/'} element = {<Main/>}/>
            <Route path = {'/app_design'} element = {<AppDesign/>}/>
        </Routes>
    </div>
  )
}

export default App
