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

export const setClassId = (id) => {
    return {
        type: 'SET_CLASS_ID',
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

export const setStudy_Id = (id) => {
    return {
        type: 'SET_STUDY__ID',
        payload: {
            id: id
        }
    }
}

export const setPatient_Id = (id) => {
    return {
        type: 'SET_PATIENT__ID',
        payload: {
            id: id
        }
    }
}

export const setQuestions = (questionObject) => {
    return {
        type: 'SET_QUESTIONS',
        payload: {
            questionObject: questionObject
        }
    }
}

export const addObservation = (dateOfObservation, heartRate, bloodPressure, respiratoryRate, levelOfConsciousness, pulseOximetry, observationNotes) => {
    return {
        type: 'ADD_OBSERVATION',
        payload: {
            dateOfObservation: dateOfObservation,
            heartRate: heartRate,
            bloodPressure : bloodPressure,
            respiratoryRate: respiratoryRate,
            levelOfConsciousness: levelOfConsciousness,
            pulseOximetry: pulseOximetry,
            observationNotes: observationNotes
        }
    }
}

export const setCurrentPatient = (patient) => {
    return {
        type: 'SET_CURRENT_PATIENT',
        payload: {
            patient: patient
        }
    }
}

export const updateCurrentPatient = (patient) => {
    return {
        type: 'UPDATE_CURRENT_PATIENT',
        payload: {
            patient: patient
        }
    }
}
