import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'
import { setPatientId } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';

function AllPatientsListPage() {
    const currentItem = useSelector(state => state.currentItem);
    const currentStudy = useSelector(state => state.data[currentItem.conditionId][currentItem.studyId]?.data);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const setPatientID = (id) => {
        dispatch(setPatientId(id));
    }
    return (
        <div className='PatientsPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'>
                    <div className='top-right'>
                        <p>ENROLLED : {currentStudy?.length}</p>
                        <p>PATIENTS</p>
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
                            currentStudy?.map((item, index) => {
                                return (
                                    <div className='patient-item' key={'patient-item' + index}
                                        onClick={() => { setPatientID(index); navigate('/patient-detail') }}>
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