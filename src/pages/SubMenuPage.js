import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton';

function SubMenuPage(props) {
    const dataToShow = props.dataToShow
    const data = useSelector(state => state.data);
    const navigate = useNavigate();
    return (
        <div className='SubMenuPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <p className='title'>{dataToShow === 'clinical-studies' ? 'All Clinical Studies' : 'All Trial Organisations'}</p>
                <div className='button-grid'>
                    {
                        (dataToShow === 'clinical-studies') ?
                            data.clinicalStudies.map((item, index) => {
                                return <div className='button' key={"clinical-studies-item-" + index}
                                    onClick={() => { navigate('/patients') }}>{item.title}</div>
                            }) :
                            data.trialOrganisations.map((item, index) => {
                                return <div className='button' key={"trial-organisations-item-" + index}
                                    onClick={() => { navigate('/patients') }}>{item.title}</div>
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default SubMenuPage