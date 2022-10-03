export const loginCheck = (email, password) => {
    return {
        type: 'LOGIN_CHECK',
        payload: {
            email: email,
            password: password
        }
    }
}

export const setConditionId = (id) => {
    return {
        type: 'SET_CONDITION_ID',
        payload: {
            id: id
        }
    }
}

export const setStudyId = (id) => {
    return {
        type: 'SET_STUDY_ID',
        payload: {
            id: id
        }
    }
}

export const setPatientId = (id) => {
    return {
        type: 'SET_PATIENT_ID',
        payload: {
            id: id
        }
    }
}