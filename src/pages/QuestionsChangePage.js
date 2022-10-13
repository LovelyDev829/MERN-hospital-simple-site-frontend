import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton'
import Header from '../components/Header'
import axios from 'axios';

function QuestionsChangePage() {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentPatient = useSelector(state => state.currentPatient);
    const currentQuestions = currentPatient?.questions
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [answer1, setAnswer1] = useState(currentQuestions[0]?.answer)
    const [answer2, setAnswer2] = useState(currentQuestions[1]?.answer)
    const [answer3, setAnswer3] = useState(currentQuestions[2]?.answer)
    const [answer4, setAnswer4] = useState(currentQuestions[3]?.answer)
    const [answer5, setAnswer5] = useState(currentQuestions[4]?.answer)
    return (
        <div className='QuestionsChangePage'>
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
                            <div className='button' onClick={() => {
                                const nowTime = Date().toLocaleString()
                                const questionObject = {
                                    patientId: currentPatient._id,
                                    questions: [
                                        { question: 'How are you feeling after the Treatment?', answer: answer1, modifiedTime: nowTime },
                                        { question: 'How are you feeling after the Treatment?', answer: answer2, modifiedTime: nowTime },
                                        { question: 'How are you feeling after the Treatment?', answer: answer3, modifiedTime: nowTime },
                                        { question: 'How are you feeling after the Treatment?', answer: answer4, modifiedTime: nowTime },
                                        { question: 'How are you feeling after the Treatment?', answer: answer5, modifiedTime: nowTime },
                                    ]
                                }
                                axios.post(baseUrl + '/patient/question-update', questionObject)
                                    .then(res => {
                                        if (res.data.success) {
                                            dispatch(setQuestions(questionObject))
                                            navigate(-1)
                                        }
                                    })
                                    .catch((error) => { });
                            }}>SAVE ANSWERS</div>
                        </div>
                    </div>
                    <div className='right'>

                        <div className='patient-item'
                            onClick={() => {
                            }}>
                            <p>How are you feeling after the Treatment?</p>
                            <div className='choose-answer'>
                                <div className={answer1 === 1 ? 'section selected' : 'section'} onClick={() => { setAnswer1(1) }}><p>1</p></div>
                                <div className={answer1 === 2 ? 'section selected' : 'section'} onClick={() => { setAnswer1(2) }}><p>2</p></div>
                                <div className={answer1 === 3 ? 'section selected' : 'section'} onClick={() => { setAnswer1(3) }}><p>3</p></div>
                                <div className={answer1 === 4 ? 'section selected' : 'section'} onClick={() => { setAnswer1(4) }}><p>4</p></div>
                                <div className={answer1 === 5 ? 'section selected' : 'section'} onClick={() => { setAnswer1(5) }}><p>5</p></div>
                            </div>
                        </div>
                        <div className='patient-item'
                            onClick={() => {
                            }}>
                            <p>How are you feeling after the Treatment ?</p>
                            <div className='choose-answer'>
                                <div className={answer2 === 1 ? 'section selected' : 'section'} onClick={() => { setAnswer2(1) }}><p>1</p></div>
                                <div className={answer2 === 2 ? 'section selected' : 'section'} onClick={() => { setAnswer2(2) }}><p>2</p></div>
                                <div className={answer2 === 3 ? 'section selected' : 'section'} onClick={() => { setAnswer2(3) }}><p>3</p></div>
                                <div className={answer2 === 4 ? 'section selected' : 'section'} onClick={() => { setAnswer2(4) }}><p>4</p></div>
                                <div className={answer2 === 5 ? 'section selected' : 'section'} onClick={() => { setAnswer2(5) }}><p>5</p></div>
                            </div>
                        </div>
                        <div className='patient-item'
                            onClick={() => {
                            }}>
                            <p>How are you feeling after the Treatment ?</p>
                            <div className='choose-answer'>
                                <div className={answer3 === 1 ? 'section selected' : 'section'} onClick={() => { setAnswer3(1) }}><p>1</p></div>
                                <div className={answer3 === 2 ? 'section selected' : 'section'} onClick={() => { setAnswer3(2) }}><p>2</p></div>
                                <div className={answer3 === 3 ? 'section selected' : 'section'} onClick={() => { setAnswer3(3) }}><p>3</p></div>
                                <div className={answer3 === 4 ? 'section selected' : 'section'} onClick={() => { setAnswer3(4) }}><p>4</p></div>
                                <div className={answer3 === 5 ? 'section selected' : 'section'} onClick={() => { setAnswer3(5) }}><p>5</p></div>
                            </div>
                        </div>
                        <div className='patient-item'
                            onClick={() => {
                            }}>
                            <p>How are you feeling after the Treatment ?</p>
                            <div className='choose-answer'>
                                <div className={answer4 === 1 ? 'section selected' : 'section'} onClick={() => { setAnswer4(1) }}><p>1</p></div>
                                <div className={answer4 === 2 ? 'section selected' : 'section'} onClick={() => { setAnswer4(2) }}><p>2</p></div>
                                <div className={answer4 === 3 ? 'section selected' : 'section'} onClick={() => { setAnswer4(3) }}><p>3</p></div>
                                <div className={answer4 === 4 ? 'section selected' : 'section'} onClick={() => { setAnswer4(4) }}><p>4</p></div>
                                <div className={answer4 === 5 ? 'section selected' : 'section'} onClick={() => { setAnswer4(5) }}><p>5</p></div>
                            </div>
                        </div>
                        <div className='patient-item'
                            onClick={() => {
                            }}>
                            <p>How are you feeling after the Treatment ?</p>
                            <div className='choose-answer'>
                                <div className={answer5 === 1 ? 'section selected' : 'section'} onClick={() => { setAnswer5(1) }}><p>1</p></div>
                                <div className={answer5 === 2 ? 'section selected' : 'section'} onClick={() => { setAnswer5(2) }}><p>2</p></div>
                                <div className={answer5 === 3 ? 'section selected' : 'section'} onClick={() => { setAnswer5(3) }}><p>3</p></div>
                                <div className={answer5 === 4 ? 'section selected' : 'section'} onClick={() => { setAnswer5(4) }}><p>4</p></div>
                                <div className={answer5 === 5 ? 'section selected' : 'section'} onClick={() => { setAnswer5(5) }}><p>5</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsChangePage