import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from "./components/pages/nav/Nav";
import Footer from "./components/pages/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Nav/>
        <App/>
        <Footer/>
    </React.StrictMode>
);
