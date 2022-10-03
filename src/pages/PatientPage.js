import React from 'react'
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'

function PatientPage() {
    return (
        <div className='PatientPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'></div>
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
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        <div className='patient-item'>
                            <div className='patient-item-left'>
                                <div className='patient-item-data'>
                                    <p>PATIENT ID :</p>
                                    <p>123-456-789</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>SURNAME :</p>
                                    <p>Surname</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>MIDDLE NAME :</p>
                                    <p>Middle Name</p>
                                </div>
                            </div>
                            <div className='vertial-line'></div>
                            <div className='patient-item-right'>
                                <div className='patient-item-data'>
                                    <p>GENDER :</p>
                                    <p>Gender</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>GIVEN NAME :</p>
                                    <p>Given Name</p>
                                </div>
                                <div className='patient-item-data'>
                                    <p>DATE OF BIRTH :</p>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientPage