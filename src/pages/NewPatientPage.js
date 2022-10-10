import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import GoBackButton from '../components/GoBackButton';

function NewPatientPage() {
    const [patientId, setPatientId] = useState('')    
    const [givenName, setGivenName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [surName, setSurName] = useState('')
    const [gender, setGender] = useState('male')
    const [dateOfBirth, setDataOfBirth] = useState('')
    const [bloodGroup, setBloodGroup] = useState('A')
    const [diagnosis, setDiagnosis] = useState('')
    const [dateOfFirstTreatment, setDataOfFirstTreatment] = useState('')
    return (
        <div className='NewPatientPage'>
            <Header />
            <GoBackButton/>
            <div className='main'>
                <p className='title'>Create a new patient</p>
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
                        axios.post('http://localhost:4000/patient/create-patient', patientObject)
                            .then(res => {
                                console.log(res.data)
                                if (res.data?.success) {
                                    setPatientId('')
                                    setGivenName('')
                                    setMiddleName('')
                                    setSurName('')
                                    setGender('male')
                                    setDataOfBirth('')
                                    setBloodGroup('A')
                                    setDiagnosis('')
                                    setDataOfFirstTreatment('')
                                }
                            })
                            .catch((error) => {
                                // console.log(error);
                            });
                    }
                }}>CREATE A NEW PATIENT</div>
            </div>
        </div>
    )
}

export default NewPatientPage