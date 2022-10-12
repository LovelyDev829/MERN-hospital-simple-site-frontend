import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import GoBackButton from '../components/GoBackButton'

function OnePatientPage() {
    const currentPatient = useSelector(state => state.currentPatient);
    const navigate = useNavigate();
    return (
        <div className='OnePatientPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='patient-details'>
                    <p className='title'>Patient Details</p>
                    <div className='patient-detail-item'>
                        <p>PATIENT ID : </p>
                        <p>{currentPatient?.patientId}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>SURNAME : </p>
                        <p>{currentPatient?.surName}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>MIDDLE NAME : </p>
                        <p>{currentPatient?.middleName}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>GIVEN NAME : </p>
                        <p>{currentPatient?.givenName}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>DATE OF BIRTH : </p>
                        <p>{currentPatient?.dateOfBirth}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>GENDER : </p>
                        <p>{currentPatient?.gender}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>BLOOD GROUP : </p>
                        <p>{currentPatient?.bloodGroup}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>DIAGNOSIS : </p>
                        <p>{currentPatient?.diagnosis}</p>
                    </div>
                    <div className='patient-detail-item'>
                        <p>DATE OF FIRST TREATMENT : </p>
                        <p>{currentPatient?.dateOfFirstTreatment}</p>
                    </div>
                </div>
                <div className='buttons'>
                    <div className='button' onClick={() => { navigate('/one-patient-edit') }}>EDIT PATIENT DETAILS</div>
                </div>
            </div>
        </div>
    )
}

export default OnePatientPage