import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ToLeftArrowIcon } from "../assets/toLeftArrow.svg";

function GoBackButton() {
    const navigate = useNavigate();
    return (
        <div className='button back' onClick={() => navigate(-1)}>
            <ToLeftArrowIcon />
        </div>
    )
}

export default GoBackButton