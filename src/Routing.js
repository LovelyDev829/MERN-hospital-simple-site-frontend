import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import SubMenuPage from './pages/SubMenuPage';
import PatientsPage from './pages/PatientsPage';
import PatientDetailPage from './pages/PatientDetailPage';
import NewObservationPage from './pages/NewObservationPage';
import QuestionsPage from './pages/QuestionsPage';
import AllPatientsListPage from './pages/AllPatientsListPage';
import NewPatientPage from './pages/NewPatientPage';
import OnePatientPage from './pages/OnePatientPage';
import OnePatientEditPage from './pages/OnePatientEditPage';
import NewStudyPage from './pages/NewStudyPage';
import QuestionsChangePage from './pages/QuestionsChangePage';
import ObservationsPage from './pages/ObservationsPage';

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
                {loginFlag && <Route exact path="/clinical-studies" element={<SubMenuPage dataToShow={0}/> } />}
                {loginFlag && <Route exact path="/trial-organisations" element={<SubMenuPage dataToShow={1}/> } />}
                {loginFlag && <Route exact path="/patients" element={ <PatientsPage/> } />}
                {loginFlag && <Route exact path="/patient-detail" element={ <PatientDetailPage/> } />}
                {loginFlag && <Route exact path="/questions" element={ <QuestionsPage/> } />}
                {loginFlag && <Route exact path="/questions-change" element={ <QuestionsChangePage/> } />}
                {loginFlag && <Route exact path="/all-patients-list" element={ <AllPatientsListPage/> } />}
                {loginFlag && <Route exact path="/new-patient" element={ <NewPatientPage/> } />}
                {loginFlag && <Route exact path="/one-patient" element={ <OnePatientPage/> } />}
                {loginFlag && <Route exact path="/one-patient-edit" element={ <OnePatientEditPage/> } />}
                {loginFlag && <Route exact path="/new-study" element={ <NewStudyPage/> } />}
                {loginFlag && <Route exact path="/observations" element={ <ObservationsPage/> } />}
                {loginFlag && <Route exact path="/new-observation" element={ <NewObservationPage/> } />}
            </Routes>
        </Router>
    )
}

export default Routing