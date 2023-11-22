import * as React from 'react';

import { Route, Routes } from "react-router-dom";
import LandingPage from '../Views/LandingPage/LandingPage';
import Login from '../Views/Login/Login';
import Register from '../Views/Register/Register';
export interface IAppProps {
}

export default function Navigation (props: IAppProps) {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Register" element={<Register />}></Route>
   
    
  </Routes>
  );
}
