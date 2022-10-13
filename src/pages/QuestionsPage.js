import React from 'react'
import { useSelector } from 'react-redux';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'

function QuestionsPage() {
  const currentPatient = useSelector(state => state.currentPatient);
  return (
    <div className='QuestionsPage'>
      <Header />
      <div className='main'>
        <GoBackButton />
        <div className='top'>
          <div className='top-left'>
            <p>PATIENT DETAIL</p>
          </div>
          <div className='top-right'>
            <p>QUESTIONNAIRE</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='left'>
            <div className='left-top'>
              <div className='input-item'>
                <p>PATIENT ID : </p>
                <p>{currentPatient.patientId}</p>
              </div>
              <div className='input-item'>
                <p>SURNAME : </p>
                <p>{currentPatient.surName}</p>
              </div>
              <div className='input-item'>
                <p>MIDDLE NAME : </p>
                <p>{currentPatient.middleName}</p>
              </div>
              <div className='input-item'>
                <p>GIVEN NAME : </p>
                <p>{currentPatient.givenName}</p>
              </div>
              <div className='input-item'>
                <p>DATE OF BIRTH : </p>
                <p>{currentPatient.dateOfBirth}</p>
              </div>
              <div className='input-item'>
                <p>GENDER : </p>
                <p>{currentPatient.gender}</p>
              </div>
              <div className='input-item'>
                <p>DIAGNOSIS : </p>
                <p>{currentPatient.diagnosis}</p>
              </div>
              <div className='input-item'>
                <p>BLOOD GROUP : </p>
                <p>{currentPatient.bloodGroup}</p>
              </div>
              <div className='input-item'>
                <p>DATE OF FIRST TREATMENT : </p>
                <p>{currentPatient.dateOfFirstTreatment}</p>
              </div>
            </div>
            <div className='left-bottom'>
              <div className='button'>RECORD NEW ANSWERS</div>
            </div>
          </div>
          <div className='right'>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>21/02/2022 10:58 am</p>
                <p>How are you feeling after the Treatment ?</p>
              </div>
              <div className='patient-item-right'>
                4/5
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>21/02/2022 10:58 am</p>
                <p>How are you feeling after the Treatment ?</p>
              </div>
              <div className='patient-item-right'>
                4/5
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>21/02/2022 10:58 am</p>
                <p>How are you feeling after the Treatment ?</p>
              </div>
              <div className='patient-item-right'>
                4/5
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>21/02/2022 10:58 am</p>
                <p>How are you feeling after the Treatment ?</p>
              </div>
              <div className='patient-item-right'>
                4/5
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>21/02/2022 10:58 am</p>
                <p>How are you feeling after the Treatment ?</p>
              </div>
              <div className='patient-item-right'>
                4/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsPage