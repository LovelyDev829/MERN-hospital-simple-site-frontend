import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import { useSelector } from 'react-redux';

function Routing() {
    const loginFlag = useSelector(state => state.loginFlag);
    // if (!loginFlag) return <LoginPage />
    // else
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                {loginFlag && <Route exact path="/menu" element={<MenuPage />} />}
            </Routes>
        </Router>
    )
}

export default Routing