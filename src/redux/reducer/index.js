let initState = {
    loginFlag: false,
    users: [
        {
            email: 'user@gmail.com',
            password: 'password'
        }
    ],
    nowUser: {
        email: 'user@gmail.com',
        password: 'password'
    },
    currentItem: {
        userType : 0,
        conditionId : 0,
        studyId: 0,
        patientId : 0
    },
    data: [
        [
            {
                title: 'CLINICAL STUDY #1',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #2',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #3',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #4',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #5',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #6',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #7',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #8',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #9',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            }
        ],
        [
            {
                title: 'TRIAL ORGANISATION #1',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'TRIAL ORGANISATION #1',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            }
        ],
    ]
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_CHECK': {
            var tempFlag = false;
            state.users.forEach((item) => {
                if (item.email === action.payload.email && item.password === action.payload.password) tempFlag = true;
            })
            return {
                ...state,
                loginFlag: tempFlag
            }
        }
        case 'SET_CONDITION_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    conditionId : action.payload.id
                }
            }
        }
        case 'SET_STUDY_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    studyId : action.payload.id
                }
            }
        }
        case 'SET_PATIENT_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    patientId : action.payload.id
                }
            }
        }
        default: return state
    }
}

export default reducer;