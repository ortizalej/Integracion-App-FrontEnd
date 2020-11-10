import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import logo from '../Images/Logo.png';
import Footer from '../components/General/Footer'
import Header from '../components/General/Header'
import CarouselSlide from '../components/General/CarrouselImageHome';
import { getSuggestedQuery } from '@testing-library/react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.user= this.getUser.bind(this);
      }
    
    async getUser() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var emailAddress = atob(url.searchParams.get("emailAddress")); 
        var password = atob(url.searchParams.get("password"));
        console.log(emailAddress,password);
        var response = await this.getUserFromDB(emailAddress,password);
        console.log("El usuairo es: ",response)
        return response;
    }

    async getUserFromDB(emailAddress, password) {
        let resp;
        var auth = btoa('admin:123');
        try {
          let url = 'https://market-api-uade.herokuapp.com/api/v1/Clients/get-by-email-and-password?emailAddress=' + emailAddress + '&password=' + password;
          await axios.get(url, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
              'Authorization': 'Basic ' + auth
            }
          }
          ).then(response => {
            resp = response.data;
          })
        }
        catch {
          if (resp === undefined) {
            let url2 = 'https://market-api-uade.herokuapp.com/api/v1/Employees/get-by-email-and-password?emailAddress=' + emailAddress + '&password=' + password;
            await axios.get(url2, {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Basic ' + auth
              }
            }
            ).then(response => {
              resp = response.data;
              if (resp === undefined) {
                console.log("El usuario no existe.")
              }
            })
          }
        }
    
        return resp;
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
        this.getProducts()
        return (
            <div>

                <div style={{ marginTop: 60 }} >
                    <div>
                        <img src={logo} width="100" align="left" />
                    </div>
                    <Header />
                </div>
                <CarouselSlide/>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;