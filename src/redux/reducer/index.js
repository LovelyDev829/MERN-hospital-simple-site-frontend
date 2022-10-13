let initState = {
    baseUrl: 'http://localhost:4000',
    loginFlag: false,
    nowUser: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userType: ''
    },
    currentItem: {
        userType: 0,
        classId: 0,
        studyId: 0,
        study_id: 0,
        patientId: 0,
        patient_id: 0
    },
    currentPatient: {},
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
                                heartRate: 'Heart Rate',
                                bloodPressure: 'Blood Pressure',
                                respiratoryRate: 'Respiratory Rate',
                                levelOfConsciousness: 'Level of Consciousness',
                                pulseOximetry: 'Pulse Oximetry',
                                observationNotes: 'Observation Notes'
                            },
                            {
                                dateOfObservation: 'Date of observation',
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
        case 'SET_CLASS_ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    classId: action.payload.id
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
        case 'SET_STUDY__ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    study_id: action.payload.id
                }
            }
        }
        case 'SET_PATIENT__ID': {
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    patient_id: action.payload.id
                }
            }
        }

        case 'SET_CURRENT_PATIENT': {
            return {
                ...state,
                currentPatient: action.payload.patient
            }
        }

        case 'SET_QUESTIONS': {
            return {
                ...state,
                currentPatient: {
                    ...state.currentPatient,
                    questions: action.payload.questionObject.questions
                }
            }
        }

        case 'UPDATE_CURRENT_PATIENT': {
            return {
                ...state,
                currentPatient: {
                    ...state.currentPatient,
                    patientId: action.payload.patient.patientId,
                    givenName: action.payload.patient.givenName,
                    middleName: action.payload.patient.middleName,
                    surName: action.payload.patient.surName,
                    gender: action.payload.patient.gender,
                    dateOfBirth: action.payload.patient.dateOfBirth,
                    bloodGroup: action.payload.patient.bloodGroup,
                    diagnosis: action.payload.patient.diagnosis,
                    dateOfFirstTreatment: action.payload.patient.dateOfFirstTreatment
                }
            }
        }
        case 'ADD_OBSERVATION': {
            return {
                ...state,
                data: [
                    ...state.data,
                    (state.currentItem.classId), [
                        ...state.data[state.currentItem.classId],
                        (state.currentItem.studyId), {
                            ...state.data[state.currentItem.classId][state.currentItem.studyId],
                            data: [
                                ...state.data[state.currentItem.classId][state.currentItem.studyId].data,
                                (state.currentItem.patientId), {
                                    ...state.data[state.currentItem.classId][state.currentItem.studyId].data[state.currentItem.patientId],
                                    observation: [
                                        ...state.data[state.currentItem.classId][state.currentItem.studyId].data[state.currentItem.patientId].observation,
                                        {
                                            dateOfObservation: action.payload.dateOfObservation,
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