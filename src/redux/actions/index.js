export const loginCheck = (email, password) => {
    return {
        type: 'LOGIN_CHECK',
        payload: {
            email: email,
            password: password
        }
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
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

export const addNewUser = (firstName, lastName, email, password, userType) => {
    return {
        type: 'ADD_NEW_USER',
        payload: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            userType: userType
        }
    }
}

export const addObservation = (dateOfObsevation, heartRate, bloodPressure, respiratoryRate, levelOfConsciousness, pulseOximetry, observationNotes) => {
    return {
        type: 'ADD_OBSERVATION',
        payload: {
            dateOfObsevation: dateOfObsevation,
            heartRate: heartRate,
            bloodPressure : bloodPressure,
            respiratoryRate: respiratoryRate,
            levelOfConsciousness: levelOfConsciousness,
            pulseOximetry: pulseOximetry,
            observationNotes: observationNotes
        }
    }
}
