import * as React from 'react';

import { Route, Routes } from "react-router-dom";
import LandingPage from '../Views/LandingPage/LandingPage';
import Login from '../Views/Login/Login';
import Register from '../Views/Register/Register';
import Home from '../Views/Home/Home';
import ItemDescription from '../Views/ItemDescription/ItemDescripion';
import Cart from '../Views/Cart/Cart';
export interface IAppProps {
}

export default function Navigation (props: IAppProps) {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Register" element={<Register />}></Route>
    <Route path="/Home" element={<Home />}></Route>
    <Route path="/Home/Description" element={<ItemDescription />}></Route>
    <Route path="/Home/Cart" element={<Cart />}></Route>
    
   
    
  </Routes>
  );
}
