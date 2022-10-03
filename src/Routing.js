import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import SubMenuPage from './pages/SubMenuPage';
import PatientPage from './pages/PatientPage';

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
                {loginFlag && <Route exact path="/clinical-studies" element={<SubMenuPage dataToShow='clinical-studies'/> } />}
                {loginFlag && <Route exact path="/trial-organisations" element={<SubMenuPage dataToShow='trial-organisations'/> } />}
                {loginFlag && <Route exact path="/patients" element={ <PatientPage/> } />}
            </Routes>
        </Router>
    )
}

export default Routing