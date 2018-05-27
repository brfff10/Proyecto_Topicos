import React, { Component } from 'react';
import styled from 'styled-components';
import RecordFile from './RecordFile/RecordFile';
import GraphRecordInfo from './GraphRecordInfo/GraphRecordInfo';

const RecordContainerStyle = styled.div`
    text-align: center;
    margin: 0 auto;
`;

class Records extends Component{
    constructor(){
        super()
        this.state = {
            record: '',
            data: ''
        }
    }
    componentDidMount(){
        //this.getItems(this.props.params.id);
        //this.getData(this.props.params.id);
        var testRecord = {
            record_id: 1,
            patient: {
                patient_id: 3,
                first_name: "Joe",
                last_name: "Doe",
                gender: "M",
                age: 30,
                nationality: "MEX",
                contact_info: "",
                phone_number: "6641886594",
                applicant_unit: "UC"
            },
            entry_date: "2018-05-24T22:45:55.959000Z",
            update_date: "2018-05-26T00:44:54.871046Z",
            birth_date: "1996-05-17",
            blood_type: "O",
            diabetes: "N",
            sample_type: "",
            deceased: "",
            subtype: "",
            resistance: "",
            children: "",
            english: "",
            sexual_preference: "",
            immigration_hist: "",
            insurance: "",
            drug_use: "",
            shared_needles: "",
            criminal_record: "",
            birth_place: null,
            job: null
        }
        this.setState({record: testRecord});

        var data = [
            {name: '1-feb-14', uv: 4000, pv: 2400, amt: 2400},
            {name: '2-feb-14', uv: 3000, pv: 1398, amt: 2210},
            {name: '3-feb-14', uv: 2000, pv: 9800, amt: 2290},
            {name: '4-feb-14', uv: 2780, pv: 3908, amt: 2000},
            {name: '5-feb-14', uv: 1890, pv: 4800, amt: 2181},
            {name: '6-feb-14', uv: 2390, pv: 3800, amt: 2500},
            {name: '7-feb-14', uv: 3490, pv: 4300, amt: 2100},
        ]
        this.setState({data: data});
        
    }
    getItems(recordId){
        fetch('http://localhost:8000/api/record/'+recordId)
            .then(results => results.json())
            .then(results => this.setState({record: results}));   
    }
    getData(recordId){
        fetch('http://localhost:8000/api/data/'+recordId)
            .then(results => results.json())
            .then(results => this.setState({data: results}));   
    }
    render(){
        return(
            <RecordContainerStyle>
                <RecordFile record={this.state.record}/>
                <GraphRecordInfo data={this.state.data}/>
            </RecordContainerStyle>
        )
    }
}

export default Records;