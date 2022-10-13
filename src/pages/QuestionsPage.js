import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'

function QuestionsPage() {
  const currentPatient = useSelector(state => state.currentPatient);
  const currentQuestions = currentPatient?.questions
  const navigate = useNavigate();
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
              <div className='button' onClick={() => navigate('/questions-change')}>RECORD NEW ANSWERS</div>
            </div>
          </div>
          <div className='right'>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>{currentQuestions[0]?.modifiedTime ? currentQuestions[0]?.modifiedTime : '21/02/2022 10:58 am'}</p>
                <p>{currentQuestions[0]?.question ? currentQuestions[0]?.question : 'How are you feeling after the Treatment?'}</p>
              </div>
              <div className='patient-item-right'>
                {currentQuestions[0]?.answer ? currentQuestions[0]?.answer + '/5' : 'Null'}
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>{currentQuestions[1]?.modifiedTime ? currentQuestions[1]?.modifiedTime : '21/02/2022 10:58 am'}</p>
                <p>{currentQuestions[1]?.question ? currentQuestions[1]?.question : 'How are you feeling after the Treatment?'}</p>
              </div>
              <div className='patient-item-right'>
                {currentQuestions[1]?.answer ? currentQuestions[1]?.answer + '/5' : 'Null'}
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>{currentQuestions[2]?.modifiedTime ? currentQuestions[2]?.modifiedTime : '21/02/2022 10:58 am'}</p>
                <p>{currentQuestions[2]?.question ? currentQuestions[2]?.question : 'How are you feeling after the Treatment?'}</p>
              </div>
              <div className='patient-item-right'>
                {currentQuestions[2]?.answer ? currentQuestions[2]?.answer + '/5' : 'Null'}
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>{currentQuestions[3]?.modifiedTime ? currentQuestions[3]?.modifiedTime : '21/02/2022 10:58 am'}</p>
                <p>{currentQuestions[3]?.question ? currentQuestions[3]?.question : 'How are you feeling after the Treatment?'}</p>
              </div>
              <div className='patient-item-right'>
                {currentQuestions[3]?.answer ? currentQuestions[3]?.answer + '/5' : 'Null'}
              </div>
            </div>
            <div className='patient-item'
              onClick={() => {
              }}>
              <div className='patient-item-left'>
                <p>{currentQuestions[4]?.modifiedTime ? currentQuestions[4]?.modifiedTime : '21/02/2022 10:58 am'}</p>
                <p>{currentQuestions[4]?.question ? currentQuestions[4]?.question : 'How are you feeling after the Treatment?'}</p>
              </div>
              <div className='patient-item-right'>
                {currentQuestions[4]?.answer ? currentQuestions[4]?.answer + '/5' : 'Null'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsPage