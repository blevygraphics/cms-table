import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import Welcome from '../components/Welcome';

import 'react-table/react-table.css'


export default class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            users: [],
            loading:true
        }
    }

    async componentDidMount(){
        // GET request using axios with async/await
        const article = {
            "household": {
              "income": 52000,
              "people": [
                {
                  "age": 27,
                  "aptc_eligible": true,
                  "gender": "Female",
                  "uses_tobacco": false
                }
              ]
            },
            "market": "Individual",
            "place": {
              "countyfips": "37057",
              "state": "NC",
              "zipcode": "27007"
            },
            "year": 2020
        }
        const response = await axios.post('https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=F2SG2jItVTXAjPPcWtQJblj9eE9nlXKY',article)
          console.log(response.data)
        this.setState({loading:false, users: response.data})
    }


    render() {
        const columns = [
            {  
                Header: 'Name',  
                accessor: 'name',
            },
            {  
              Header: 'Premium',  
              accessor: 'premium',
            },
            {  
              Header: 'Premium w/ credit',  
              accessor: 'premium_w_credit',
            },
            {  
              Header: 'EHB Premium',  
              accessor: 'ehb_premium',
            }
        ]

        return (
            <div>
                <Welcome name="Plan Search By State" content="Female, age 27, no tobacco, in NC 2020"/>
                <ReactTable  data={this.state.users.plans}  columns={columns}  />
            </div>
        )
    }
}