import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>

      <BrowserRouter>
        <App />

        {/*Family Fonts for Navbar*/}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Georama:wght@500&display=swap" rel="stylesheet"/>
        
        {/*Family Fonts for Navbar*/}
        
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>
);







