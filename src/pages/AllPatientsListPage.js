import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPatient } from '../redux/actions/index';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'
import axios from 'axios';

function AllPatientsListPage() {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentUserType = useSelector(state => state.nowUser.userType)
    const currentClassId = useSelector(state => state.currentItem.classId);
    const currentStudy_id = useSelector(state => state.currentItem.study_id);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [allPatient, setAllPatient] = useState([])
    useEffect(() => {
        const tempObject = { studyId: (currentClassId === 0 || currentClassId === 1) ? currentStudy_id : 0 }
        axios.post(baseUrl + '/patient/all-patients-available', tempObject)
            .then(res => {
                setAllPatient(res.data)
            })
            .catch((error) => {
            });
    }, [baseUrl, currentStudy_id, currentClassId])
    return (
        <div className='PatientsPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'>
                    <div className='top-right'>
                        <p>ENROLLED : {allPatient.length}</p>
                        <p>ALL PATIENTS</p>
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
                        </div>
                    </div>
                    <div className='right'>
                        {
                            allPatient?.map((item, index) => {
                                return (
                                    <div className='patient-item' key={'patient-item' + index}
                                        onClick={() => {
                                            const classUpdateObject = {
                                                studyId: currentStudy_id,
                                                patientId: item._id
                                            }
                                            switch (currentClassId) {

                                                case 0:
                                                    axios.put(baseUrl + '/study/add-a-patient', classUpdateObject)
                                                        .then(res => {
                                                            if (res.data.success) {
                                                                // alert("Added a patient to a Clinical Study")
                                                                navigate(-1)
                                                            }
                                                        })
                                                        .catch((error) => { });
                                                    break
                                                case 1:
                                                    axios.put(baseUrl + '/study/add-a-patient', classUpdateObject)
                                                        .then(res => {
                                                            if (res.data.success) {
                                                                // alert("Added a patient to a Trial Organisation")
                                                                navigate(-1)
                                                            }
                                                        })
                                                        .catch((error) => { });
                                                    break
                                                case 2:
                                                    if (currentUserType === 'nurse') {
                                                        dispatch(setCurrentPatient(item))
                                                        navigate('/questions')
                                                    }
                                                    break
                                                default:
                                                    if (currentUserType === 'stuff') {
                                                        dispatch(setCurrentPatient(item));
                                                        navigate('/one-patient')
                                                    }
                                                    // else{
                                                    //     alert("This function only available for stuffs.")
                                                    // }
                                            }
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

export default AllPatientsListPage