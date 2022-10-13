import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import GoBackButton from '../components/GoBackButton'
import axios from 'axios';

function NewObservationPage() {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentPatient = useSelector(state => state.currentPatient);
    const navigate = useNavigate();
    const [dateOfObservation, SetDateOfObservation] = useState('')
    const [heartRate, SetHeartRate] = useState('')
    const [bloodPressure, SetBloodPressure] = useState('')
    const [respiratoryRate, SetRespiratoryRate] = useState('')
    const [levelOfConsciousness, SetLevelOfConsciousness] = useState('')
    const [pulseOximetry, SetPulseOximetry] = useState('')
    const [observationNotes, SetObservationNotes] = useState('')
    return (
        <div className='NewObservationPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'>
                    <div className='top-left'>
                        <p>PATIENT DETAILS</p>
                    </div>
                    <div className='top-right'>
                        <p>NEW OBERVATION</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <div className='left-top'>
                            <div className='patient-detail-item'>
                                <p>PATIENT ID :</p>
                                <p>{currentPatient?.patientId}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>SURNAME :</p>
                                <p>{currentPatient?.surName}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>MIDDLE NAME :</p>
                                <p>{currentPatient?.middleName}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>GIVEN NAME :</p>
                                <p>{currentPatient?.givenName}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>DATE OF BIRTH :</p>
                                <p>{currentPatient?.dateOfBirth}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>GENDER :</p>
                                <p>{currentPatient?.gender}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>BLOOD GROUP :</p>
                                <p>{currentPatient?.bloodGroup}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>DIAGNOSIS :</p>
                                <p>{currentPatient?.diagnosis}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>DATE OF FIRST TREATMENT :</p>
                                <p>{currentPatient?.dateOfFirstTreatment}</p>
                            </div>
                        </div>
                        <div className='left-bottom'>
                            <div className='button' onClick={() => {
                                if (dateOfObservation && heartRate && bloodPressure && respiratoryRate
                                    && levelOfConsciousness && pulseOximetry && observationNotes) {
                                    const tempObject = {
                                        currentPatientId: currentPatient._id,
                                        dateOfObservation: dateOfObservation,
                                        heartRate: heartRate,
                                        bloodPressure: bloodPressure,
                                        respiratoryRate: respiratoryRate,
                                        levelOfConsciousness: levelOfConsciousness,
                                        pulseOximetry: pulseOximetry,
                                        observationNotes: observationNotes
                                    }
                                    axios.post(baseUrl + '/observation/create-observation', tempObject)
                                        .then(res => {
                                            if (res.data?.success) {
                                                // alert("success")
                                                navigate(-1)
                                            }
                                        })
                                        .catch((error) => { });
                                }
                            }}>SAVE</div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='observation-item'>
                            <p>DATE OF THE OBSERVATION :</p>
                            <div className='input-box'>
                                <input placeholder='Date of the Observation' type={"date"}
                                    value={dateOfObservation} onChange={(e) => { SetDateOfObservation(e.target.value) }} />
                            </div>
                        </div>
                        <div className='observation-item'>
                            <p>HEART RATE :</p>
                            <div className='input-box'>
                                <input placeholder='Heart Rate'
                                    value={heartRate} onChange={(e) => { SetHeartRate(e.target.value) }} />
                            </div>
                        </div>
                        <div className='observation-item'>
                            <p>BLOOD PRESSURE :</p>
                            <div className='input-box'>
                                <input placeholder='Blood Pressure'
                                    value={bloodPressure} onChange={(e) => { SetBloodPressure(e.target.value) }} />
                            </div>
                        </div>
                        <div className='observation-item'>
                            <p>RESPIRATORY RATE :</p>
                            <div className='input-box'>
                                <input placeholder='Respiratory Rate'
                                    value={respiratoryRate} onChange={(e) => { SetRespiratoryRate(e.target.value) }} />
                            </div>
                        </div>
                        <div className='observation-item'>
                            <p>LEVEL OF CONSCIOUSNESS :</p>
                            <div className='input-box'>
                                <input placeholder='Level of Consciousness'
                                    value={levelOfConsciousness} onChange={(e) => { SetLevelOfConsciousness(e.target.value) }} />
                            </div>
                        </div>
                        <div className='observation-item'>
                            <p>PULSE OXIMETRY :</p>
                            <div className='input-box'>
                                <input placeholder='Pluse Oximetry'
                                    value={pulseOximetry} onChange={(e) => { SetPulseOximetry(e.target.value) }} />
                            </div>
                        </div>
                        <div className='observation-item'>
                            <p>OBSERVATION NOTES :</p>
                            <div className='input-box'>
                                <input placeholder='Observation Notes'
                                    value={observationNotes} onChange={(e) => { SetObservationNotes(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewObservationPage