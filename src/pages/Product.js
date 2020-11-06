import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import logo from '../Images/Logo.png';
import Items_Car from '../Images/Item_Cars.png'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../components/Footer'
import Header from '../components/Header'


class Product extends Component {

    getProducts() {
        var auth = btoa('admin1234');
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

                        <img src={Items_Car} width="100" align="right" />

                    </div>
                    <div>
                        <Paper component="form" style={{
                            padding: '2px 4px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            width: 500,
                        }}>

                            <InputBase
                                style={{
                                    flex: 1,
                                }}
                                placeholder="Buscar Producto"
                                inputProps={{ 'aria-label': 'Buscar Producto' }}
                            />
                            <IconButton type="submit" style={{ padding: 10 }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>

                    </div>
                    <Header />
                </div>
                <div>
                    <Product />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Product;