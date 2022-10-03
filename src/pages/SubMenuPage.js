import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton';
import { setStudyId } from '../redux/actions/index';

function SubMenuPage(props) {
    const dataToShow = props.dataToShow
    const data = useSelector(state => state.data);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const setStudyID = (id) => {
        dispatch(setStudyId(id));
    }
    return (
        <div className='SubMenuPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <p className='title'>{dataToShow === 0 ? 'All Clinical Studies' : 'All Trial Organisations'}</p>
                <div className='button-grid'>
                    {
                        data[dataToShow]?.map((item, index) => {
                            return <div className='button' key={"clinical-studies-item-" + index}
                                onClick={() => { setStudyID(index); navigate('/patients') }}>{item.title}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SubMenuPage