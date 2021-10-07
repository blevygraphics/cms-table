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
        const response = await axios.get('https://marketplace.api.healthcare.gov/api/v1/states?apikey=F2SG2jItVTXAjPPcWtQJblj9eE9nlXKY')
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
                Header: 'Abbrev',  
                accessor: 'abbrev' ,
            },
            {  
                Header: 'fips',  
                accessor: 'fips' ,
            },
            // {  
            //     Header: 'marketplace_model',  
            //     accessor: 'marketplace_model',
            // },
            // {  
            //     Header: 'shop_marketplace_model',  
            //     accessor: 'shop_marketplace_model',
            // },
            {  
                Header: 'hix_name',  
                accessor: 'hix_name',
            },
            {  
                Header: 'hix_url',  
                accessor: 'hix_url',
            },
            {  
                Header: 'shop_hix_name',  
                accessor: 'shop_hix_name',
            },
            {  
                Header: 'shop_hix_url',  
                accessor: 'shop_hix_url',
            },
            // {  
            //     Header: '8962_link',  
            //     accessor: '8962_link',
            // },
            // {  
            //     Header: '8965_link',  
            //     accessor: '8965_link',
            // },
            {  
                Header: 'assister_program_url',  
                accessor: 'assister_program_url',
            }   
        ]

        return (
            <div>
                <Welcome name="Providers By State" content="List of Medicare Providers By State"/>
                <ReactTable  data={this.state.users.states}  columns={columns}  />
            </div>
        )
    }
}