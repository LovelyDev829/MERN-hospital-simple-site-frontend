import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton';
import { setStudyId, setStudy_Id } from '../redux/actions/index';
import axios from 'axios';

function SubMenuPage(props) {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentClassId = useSelector(state => state.currentItem.classId);
    const userType = useSelector(state => state.nowUser.userType);
    const [studyArray, setStudyArray] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const setStudyID = (id) => {
        dispatch(setStudyId(id));
    }
    const setStudy_ID = (id) => {
        dispatch(setStudy_Id(id));
    }
    useEffect(()=>{
        const classObject = {
            classTitle: (currentClassId===0)? 'Clinical Study' : 'Trial Organisation'
        }
        axios.post(baseUrl + '/class/class-all-studies', classObject)
        .then(res => {
            setStudyArray(res.data)
        })
        .catch((error) => { });
    },[currentClassId, baseUrl])
    return (
        <div className='SubMenuPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <p className='title'>{currentClassId === 0 ? 'All Clinical Studies' : 'All Trial Organisations'}</p>
                <div className='button-grid'>
                    {
                        (userType === 'stuff') ?
                            <div className='button opacity' onClick={() => {navigate('/new-study')}}>CREATE A NEW {currentClassId === 0 ? 'CLINICAL STUDY' : 'TRIAL ORGANISATION'}</div>
                            : <></>
                    }
                    {
                        studyArray?.map((item, index) => {
                            return <div className='button' key={"clinical-studies-item-" + index}
                                onClick={() => {
                                    setStudyID(index)
                                    setStudy_ID(item._id)
                                    navigate('/patients')
                                }}>{item.studyTitle}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SubMenuPage