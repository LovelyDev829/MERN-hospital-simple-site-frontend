import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPatient } from '../redux/actions/index';
import Header from '../components/Header'
import axios from 'axios';
import GoBackButton from '../components/GoBackButton';

function OnePatientEditPage() {
    const currentPatient = useSelector(state => state.currentPatient);
    const baseUrl = useSelector(state => state.baseUrl);
    const dispatch = useDispatch()
    const [patientId, setPatientId] = useState(currentPatient?.patientId)
    const [givenName, setGivenName] = useState(currentPatient?.givenName)
    const [middleName, setMiddleName] = useState(currentPatient?.middleName)
    const [surName, setSurName] = useState(currentPatient?.surName)
    const [gender, setGender] = useState(currentPatient?.gender)
    const [dateOfBirth, setDataOfBirth] = useState(currentPatient?.dateOfBirth)
    const [bloodGroup, setBloodGroup] = useState(currentPatient?.bloodGroup)
    const [diagnosis, setDiagnosis] = useState(currentPatient?.diagnosis)
    const [dateOfFirstTreatment, setDataOfFirstTreatment] = useState(currentPatient?.dateOfFirstTreatment)
    return (
        <div className='OnePatientEditPage'>
            <Header />
            <GoBackButton/>
            <div className='main'>
                <p className='title'>Edit patient information</p>
                <div className='input-item'>
                    <p>Patient ID</p>
                    <div className='input-box'>
                        <input type={"text"} value={patientId} onChange={(e) => { setPatientId(e.target.value) }} />
                    </div>
                </div>
                <div className='input-item'>
                    <p>Given Name</p>
                    <div className='input-box'>
                        <input type={"text"} value={givenName} onChange={(e) => { setGivenName(e.target.value) }} />
                    </div>
                </div>
                <div className='input-item'>
                    <p>Middle Name</p>
                    <div className='input-box'>
                        <input type={"text"} value={middleName} onChange={(e) => { setMiddleName(e.target.value) }} />
                    </div>
                </div>
                <div className='input-item'>
                    <p>Surname</p>
                    <div className='input-box'>
                        <input type={"text"} value={surName} onChange={(e) => { setSurName(e.target.value) }} />
                    </div>
                </div>
                <div className='input-item'>
                    <p>Gender</p>
                    <div className='input-box'>
                        <select value={gender} onChange={(e) => { setGender(e.target.value) }} >
                            <option>male</option>
                            <option>female</option>
                        </select>
                    </div>
                </div>
                <div className='input-item'>
                    <p>Date of Birth</p>
                    <div className='input-box'>
                        <input type={"date"} value={dateOfBirth} onChange={(e) => { setDataOfBirth(e.target.value) }} />
                    </div>
                </div>
                <div className='input-item'>
                    <p>Blood Group</p>
                    <div className='input-box'>
                        <select value={bloodGroup} onChange={(e) => { setBloodGroup(e.target.value) }} >
                            <option>A</option>
                            <option>B</option>
                            <option>AB</option>
                            <option>O</option>
                        </select>
                    </div>
                </div>
                <div className='input-item'>
                    <p>Diagnosis</p>
                    <div className='input-box'>
                        <input type={"text"} value={diagnosis} onChange={(e) => { setDiagnosis(e.target.value) }} />
                    </div>
                </div>
                <div className='input-item'>
                    <p>Date of First Treatment</p>
                    <div className='input-box'>
                        <input type={"date"} value={dateOfFirstTreatment} onChange={(e) => { setDataOfFirstTreatment(e.target.value) }} />
                    </div>
                </div>
                <div className='button' onClick={() => {
                    if (patientId && givenName && middleName && surName && gender && dateOfBirth && bloodGroup && diagnosis && dateOfFirstTreatment) {
                        const patientObject = {
                            patientId: patientId,
                            givenName: givenName,
                            middleName: middleName,
                            surName: surName,
                            gender: gender,
                            dateOfBirth: dateOfBirth,
                            bloodGroup: bloodGroup,
                            diagnosis: diagnosis,
                            dateOfFirstTreatment: dateOfFirstTreatment
                        };
                        axios.put(baseUrl + '/patient/update-patient/' + currentPatient._id, patientObject)
                            .then(res => {
                                if (res.data?.success) {
                                    alert('Patient Successfully Updated..')
                                    dispatch(updateCurrentPatient(patientObject))
                                }
                            })
                            .catch((error) => {
                                alert(error)
                            });
                    }
                }}>EDIT PATIENT INFORMATION</div>
            </div>
        </div>
    )
}

export default OnePatientEditPage