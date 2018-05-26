import React, { Component } from 'react';

class PatientList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>
                {this.props.patients.map(function(patient, index){
                    return (
                        <div key={index}>
                            <h1>{patient.first_name} {patient.last_name}</h1>
                            <p>Gender: {patient.gender}</p>
                            <p>Age: {patient.age}</p>
                            <p>Nationality: {patient.nationality}</p>
                            <p>Contact info: {patient.contact_info}</p>
                            <p>Phone number: {patient.phone_number}</p>
                            <p>Applicant unit: {patient.applicant_unit}</p>
                        </div>
                    )
                })}
            </ul>
        );
    }
}

export default PatientList;