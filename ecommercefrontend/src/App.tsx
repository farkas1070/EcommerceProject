import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { DataProvider } from "./Context/GlobalContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DataProvider>
      
        <Navigation />
      
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
