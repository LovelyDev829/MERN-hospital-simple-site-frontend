import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ObservationsPage() {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentClassId = useSelector(state => state.currentItem.classId)
    const currentPatient = useSelector(state => state.currentPatient);
    const navigate = useNavigate();
    const [observationArray, setObservationArray] = useState([])
    useEffect(() => {
        const tempObject = { patientId: currentPatient._id }
        axios.post(baseUrl + '/patient/patient-all-observations', tempObject)
            .then(res => {
                setObservationArray(res.data)
            })
            .catch((error) => { });
    }, [baseUrl, currentPatient])
    return (
        <div className='ObservationsPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'>
                    <div className='top-left'>
                        <p>PATIENT DETAILS</p>
                    </div>
                    <div className='top-right'>
                        <p>ENROLLED : {observationArray?.length}</p>
                        <p>{(currentClassId === 0) ? 'CLINICAL STUDY' : 'TRIAL ORGANISATION'}</p>
                        <p>SORT BY NAME</p>
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
                            <div className='button' onClick={() => navigate('/new-observation')}>RECORD NEW OBSERVATION</div>
                        </div>
                    </div>
                    <div className='right'>
                        {
                            observationArray?.map((item, index) => {
                                return (
                                    <div className='patient-item' key={'patient-item'+index}
                                        onClick={() => {
                                            
                                        }}>
                                        <div className='patient-item-top'>
                                            <div className='patient-item-left'>
                                                <div className='patient-item-data'>
                                                    <p>Date of Observation :</p>
                                                    <p>{item?.dateOfObservation}</p>
                                                </div>
                                                <div className='patient-item-data'>
                                                    <p>Heart Rate :</p>
                                                    <p>{item?.heartRate}</p>
                                                </div>
                                                <div className='patient-item-data'>
                                                    <p>Respiratory Rate :</p>
                                                    <p>{item?.respiratoryRate}</p>
                                                </div>
                                            </div>
                                            <div className='vertial-line'></div>
                                            <div className='patient-item-right'>
                                                <div className='patient-item-data'>
                                                    <p>Blood Pressure :</p>
                                                    <p>{item?.bloodPressure}</p>
                                                </div>
                                                <div className='patient-item-data'>
                                                    <p>Level of Consciousness :</p>
                                                    <p>{item?.levelOfConsciousness}</p>
                                                </div>
                                                <div className='patient-item-data'>
                                                    <p>Pulse Oximetry :</p>
                                                    <p>{item?.pulseOximetry}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='patient-item-bottom'>
                                            <p>Observation Notes:</p>
                                            <p>{item?.observationNotes}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObservationsPage