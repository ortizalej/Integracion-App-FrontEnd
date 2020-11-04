import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

class Home extends Component {
    getProducts() {
        axios.get('https://market-api-uade.herokuapp.com/api/v1/Products/get-all', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
                'Content-Type':'application/json; charset=utf-8'
            }
        }
        ).then(response => console.log(response.json()))
    }
    render() {
        this.getProducts()
        return (
            <div>
                <div>
                </div>
                <div className="row centerContent marginTopBottom20">
                    <div className="col-md-8 filter">
                        <div className="row centerContent">
                            <div className="col-md-4 bottomMargin5">
                            </div>
                            <div className="col-md-4 bottomMargin5">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centerContent">
                </div>
            </div>
        );
    }
}

export default Home;