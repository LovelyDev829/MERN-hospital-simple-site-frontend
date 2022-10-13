import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'
import { setPatientId } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';
import { setCurrentPatient } from '../redux/actions/index';
import axios from 'axios';

function PatientsPage() {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentClassId = useSelector(state => state.currentItem.classId)
    const currentStudy_id = useSelector(state => state.currentItem.study_id)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const setPatientID = (id) => {
        dispatch(setPatientId(id));
    }
    const [patientArray, setPatientArray] = useState([])
    useEffect(() => {
        const tempObject = {studyId : currentStudy_id}
        axios.post(baseUrl + '/study/study-all-patients', tempObject)
            .then(res => {
                setPatientArray(res.data)
            })
            .catch((error) => { });
    }, [baseUrl, currentStudy_id])
    return (
        <div className='PatientsPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'>
                    <div className='top-right'>
                        <p>ENROLLED : {patientArray?.length}</p>
                        <p>{(currentClassId===0) ? 'CLINICAL STUDY' : 'TRIAL ORGANISATION'}</p>
                        <p>SORT BY NAME</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <div className='left-top'>
                            <div className='input-item'>
                                <p>PATIENT ID</p>
                                <div className='input-box'>
                                    <input placeholder='PATIENT ID' />
                                </div>
                            </div>
                            <div className='input-item'>
                                <p>SURNAME</p>
                                <div className='input-box'>
                                    <input placeholder='SURNAME' />
                                </div>
                            </div>
                            <div className='input-item'>
                                <p>MIDDLE NAME</p>
                                <div className='input-box'>
                                    <input placeholder='MIDDLE NAME' />
                                </div>
                            </div>
                            <div className='input-item'>
                                <p>GIVEN NAME</p>
                                <div className='input-box'>
                                    <input placeholder='GIVEN NAME' />
                                </div>
                            </div>
                            <div className='input-item'>
                                <p>DATE OF BIRTH</p>
                                <div className='input-box'>
                                    <input placeholder='DATE OF BIRTH' />
                                </div>
                            </div>
                            <div className='input-item'>
                                <p>GENDER</p>
                                <div className='input-box'>
                                    <input placeholder='GENDER' />
                                </div>
                            </div>
                            <div className='input-item'>
                                <p>BLOOD GROUP</p>
                                <div className='input-box'>
                                    <input placeholder='BLOOD GROUP' />
                                </div>
                            </div>
                        </div>
                        <div className='left-bottom'>
                            <div className='button'>SEARCH FOR PATIENT</div>
                            <div className='button' onClick={()=>{navigate('/all-patients-list')}}>ADD A NEW PATIENT</div>
                        </div>
                    </div>
                    <div className='right'>
                        {
                            patientArray?.map((item, index) => {
                                return (
                                    <div className='patient-item' key={'patient-item'+index}
                                    onClick={()=>{
                                        setPatientID(index);
                                        dispatch(setCurrentPatient(item));
                                        navigate('/one-patient')
                                    }}>
                                        <div className='patient-item-left'>
                                            <div className='patient-item-data'>
                                                <p>PATIENT ID :</p>
                                                <p>{item.patientId}</p>
                                            </div>
                                            <div className='patient-item-data'>
                                                <p>SURNAME :</p>
                                                <p>{item.surName}</p>
                                            </div>
                                            <div className='patient-item-data'>
                                                <p>MIDDLE NAME :</p>
                                                <p>{item.middleName}</p>
                                            </div>
                                        </div>
                                        <div className='vertial-line'></div>
                                        <div className='patient-item-right'>
                                            <div className='patient-item-data'>
                                                <p>GENDER :</p>
                                                <p>{item.gender}</p>
                                            </div>
                                            <div className='patient-item-data'>
                                                <p>GIVEN NAME :</p>
                                                <p>{item.givenName}</p>
                                            </div>
                                            <div className='patient-item-data'>
                                                <p>DATE OF BIRTH :</p>
                                                <p>{item.dateOfBirth}</p>
                                            </div>
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

export default PatientsPage