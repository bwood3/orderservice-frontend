import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import AddOrder from './pages/AddOrder';
import About from './pages/About';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/add-order" element={<AddOrder />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
