import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import logo from '../Images/Logo.png';
import Items_Car from '../Images/Item_Cars.png'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../components/General/Footer'
import Header from '../components/General/Header'
import ProductTable from '../components/Products/Product'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterProducts: [],
            productsToShow: [],
            searchValue: null
        };
    }

    filterProduct(filterTerm) {
        let term = filterTerm;
        let filterProducts = this.state.masterProducts.filter(item => item.productName.toLowerCase().indexOf(term) > -1);
        this.setState({
            productsToShow: filterProducts,
            search: true
        })
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
        ).then(response => {
            console.log('RESPONSE', response)
            this.setState({
                masterProducts: response.data,
                productsToShow: response.data
            })
        })
    }


    render() {
        if (this.state.masterProducts.length == 0) {
            this.getProducts();
        }
        const onChange = (event) => {
            this.state.searchValue = event.target.value
        };
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
                                onChange={onChange}
                            />
                            <IconButton style={{ padding: 10 }} aria-label="search" onClick={() => { this.filterProduct(this.state.searchValue) }}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>

                    </div>
                    <Header />
                </div>
                <div style={{ marginTop: 5, marginLeft: 20 }}>
                    <ProductTable products={this.state.productsToShow} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Product;