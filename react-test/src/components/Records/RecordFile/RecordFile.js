import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const RecordStyled = styled.button`
    box-shadow: 0px 0px 10px 0px #333;
    width: 700px;
    height: 800px;
    text: center;
    background-color: white;
    margin: 5px
`;

const ListStyle = styled.div`
    display: center;
`;

class RecordFile extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: true
        }
    }
    render(){
        console.log(this.props.record.patient);
        if (this.props.record){
            return (
                <ul>
                    <ListStyle >                           
                        <RecordStyled disabled>
                        
                            <p>{this.props.record.patient.first_name} {this.props.record.patient.last_name}</p>
                            <p>Gender: {this.props.record.patient.gender}</p>
                            <p>Age: {this.props.record.patient.age}</p>
                            <p>Nationality: {this.props.record.patient.nationality}</p>
                            <p>Contact info: {this.props.record.patient.contact_info}</p>
                            <p>Phone number: {this.props.record.patient.phone_number}</p>
                            <p>Applicant unit: {this.props.record.patient.applicant_unit}</p>
    
                            <p>entry_date: {this.props.record.entry_date}</p>
                            <p>update_date: {this.props.record.update_date }</p>
                            <p>blood_type: {this.props.record.blood_type }</p>
                            <p>diabetes: {this.props.record.diabetes }</p>
                            <p>sample_type: {this.props.record.sample_type }</p>
                            <p>deceased: {this.props.record.deceased }</p>
                            <p>subtype: {this.props.record.subtype }</p>
                            <p>resistance: {this.props.record.resistance }</p>
                            <p>children: {this.props.record.children }</p>
                            <p>english: {this.props.record.english }</p>
                            <p>sexual_preference: {this.props.record.sexual_preference }</p>
                            <p>immigration_hist: {this.props.record.immigration_hist }</p>
                            <p>insurance: {this.props.record.insurance }</p>
                            <p>drug_use: {this.props.record.drug_use }</p>
                            <p>shared_needles: {this.props.record.shared_needles }</p>
                            <p>criminal_record: {this.props.record.criminal_record }</p>
                            <p>birth_place: {this.props.record.birth_place }</p>
                            <p>job: {this.props.record.job }</p>
                            
                        </RecordStyled>
                    </ListStyle>
                </ul>
            );
        } else {
            return(
                <p> Loading </p>
            )
        }
       
    }
}

export default RecordFile;

/*
{
    "record_id": 1,
    "patient": {
        "patient_id": 3,
        "first_name": "Joe",
        "last_name": "Doe",
        "gender": "M",
        "age": 30,
        "nationality": "MEX",
        "contact_info": "",
        "phone_number": "6641886594",
        "applicant_unit": "UC"
    },
    "entry_date": "2018-05-24T22:45:55.959000Z",
    "update_date": "2018-05-26T00:44:54.871046Z",
    "birth_date": "1996-05-17",
    "blood_type": "O",
    "diabetes": "N",
    "sample_type": "",
    "deceased": "",
    "subtype": "",
    "resistance": "",
    "children": "",
    "english": "",
    "sexual_preference": "",
    "immigration_hist": "",
    "insurance": "",
    "drug_use": "",
    "shared_needles": "",
    "criminal_record": "",
    "birth_place": null,
    "job": null
}


*/