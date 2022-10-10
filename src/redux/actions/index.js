export const login = (userData) => {
    return {
        type: 'LOGIN',
        payload: {
            email: userData.email,
            password: userData.password,
            firstName: userData.firstName,
            lastName: userData.lastName,
            userType: userData.userType
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
