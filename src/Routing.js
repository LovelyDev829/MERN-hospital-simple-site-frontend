import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import { useSelector } from 'react-redux';

function Routing() {
    const loginFlag = useSelector(state => state.loginFlag);
    if (loginFlag) return <MainPage />
    else
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    {!loginFlag && <Route exact path="/" element={<LoginPage />} />}
                    {!loginFlag && <Route exact path="/login" element={<LoginPage />} />}
                    {loginFlag && <Route exact path="/home" element={<MainPage />} />}
                </Routes>
            </Router>
        )
}

export default Routing