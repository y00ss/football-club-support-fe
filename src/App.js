import React from 'react';

import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Registration from "./pages/Registration";
import Tifoso from "./pages/Tifoso";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/tifoso" element={<Tifoso/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
