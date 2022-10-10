let initState = {
    baseUrl: '',
    loginFlag: false,
    // users: [
    //     {
    //         email: 'admin@gmail.com',
    //         password: 'password',
    //         firstName: 'admin',
    //         lastName: 'admin',
    //         userType: 'admin'
    //     },
    //     {
    //         email: 'nurse@gmail.com',
    //         password: 'password',
    //         firstName: 'Nurse',
    //         lastName: 'Nurse',
    //         userType: 'Nurse'
    //     },
    //     {
    //         email: 'stuff@gmail.com',
    //         password: 'password',
    //         firstName: 'stuff',
    //         lastName: 'stuff',
    //         userType: 'stuff'
    //     }
    // ],
    nowUser: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userType: ''
    },
    currentItem: {
        userType: 0,
        conditionId: 0,
        studyId: 0,
        patientId: 0
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
        ],
        [
            {
                title: 'Trial Organisation #1',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #2',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #3',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #4',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #5',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #6',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #7',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #8',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Trial Organisation #9',
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
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
                        dateOfFirstTreatment: 'DD/MM/YYYY',
                        observation: [
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObsevation: 'Date of obsevation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                        ]
                    }
                ]
            },
        ],
    ]
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                loginFlag: true,
                nowUser: action.payload
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                loginFlag: false,
                nowUser: {}
            }
        }
        case 'SET_CONDITION_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    conditionId: action.payload.id
                }
            }
        }
        case 'SET_STUDY_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    studyId: action.payload.id
                }
            }
        }
        case 'SET_PATIENT_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    patientId: action.payload.id
                }
            }
        }
        case 'ADD_OBSERVATION': {
            console.log("temp", state.data)
            return {
                ...state,
                data: [
                    ...state.data,
                    (state.currentItem.conditionId), [
                        ...state.data[state.currentItem.conditionId],
                        (state.currentItem.studyId), {
                            ...state.data[state.currentItem.conditionId][state.currentItem.studyId],
                            data: [
                                ...state.data[state.currentItem.conditionId][state.currentItem.studyId].data,
                                (state.currentItem.patientId), {
                                    ...state.data[state.currentItem.conditionId][state.currentItem.studyId].data[state.currentItem.patientId],
                                    observation: [
                                        ...state.data[state.currentItem.conditionId][state.currentItem.studyId].data[state.currentItem.patientId].observation,
                                        {
                                            dateOfObsevation: action.payload.dateOfObsevation,
                                            heartRate: action.payload.heartRate,
                                            bloodPressure: action.payload.bloodPressure,
                                            respiratoryRate: action.payload.respiratoryRate,
                                            levelOfConsciousness: action.payload.levelOfConsciousness,
                                            pulseOximetry: action.payload.pulseOximetry,
                                            observationNotes: action.payload.observationNotes
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ]
            }
        }
        default: return state
    }
}

export default reducer;