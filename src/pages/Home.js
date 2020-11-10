import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import logo from '../Images/Logo.png';
import Footer from '../components/General/Footer'
import Header from '../components/General/Header'
import CarouselSlide from '../components/General/CarrouselImageHome';
import moment from 'moment'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            login: false

        };
    }
    getProducts() {
        var auth = btoa('admin:123');
        axios.get('https://market-api-uade.herokuapp.com/api/v1/Products/get-all', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Basic ' + auth
            }
        }
        ).then(response => console.log(response.data))
    }

    render() {
        if (this.props.location.state != null && !this.state.login) {
            console.log(this.props.location.state.user)
            this.setState({
                user : this.props.location.state.user,
                login: true
            })
        }
        
        return (
            <div>

                <div style={{ marginTop: 60 }} >
                    <div>
                        <img src={logo} width="100" align="left" />
                    </div>
                    <Header user={this.state.user} />
                </div>
                <CarouselSlide />
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;