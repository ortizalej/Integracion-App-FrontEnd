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
import ProductTable from '../components/Products/ProductEditor'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterProducts: [],
            productsToShow: [],
            searchValue: null,
            cartProducts: new Map(),
            init: true,
            user: null
        };
    }

    filterProduct(filterTerm) {
        let term = filterTerm;
        let filterProducts = this.state.masterProducts.filter(item => item.productName.toLowerCase().indexOf(term) > -1);
        this.setState({
            productsToShow: filterProducts,
            search: true,
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
                productsToShow: response.data,
                init: false,

            })
        })
    }
    updateCartProduct(row, action) {
        let cartProducts = this.state.cartProducts;
        if (cartProducts.has(row)  ) {
            if (action == 'add' && cartProducts.get(row).selectedAmount < row.stock) {
                cartProducts.get(row).selectedAmount = cartProducts.get(row).selectedAmount + 1;
            } else if (action == 'minus') {
                if (cartProducts.get(row).selectedAmount > 1) {
                    cartProducts.get(row).selectedAmount = cartProducts.get(row).selectedAmount - 1;
                } else if (cartProducts.get(row).selectedAmount == 1) {
                    cartProducts.delete(row)
                }
            }
        } else {
            if (action == 'add') {
                cartProducts.set(row, { selectedAmount: 1 });
            }
        }
        this.setState({
            cartProducts: cartProducts
        })
    }

    render() {
        if (this.state.init) {
            this.getProducts();
        }
        const onChange = (event) => {
            this.state.searchValue = event.target.value
        };
    
        if (this.props.location.state != null && !this.state.login) {
            this.state.user = this.props.location.state.user 
            this.setState({
                user : this.props.location.state.user,
                login: true
            })
        }
        if(this.state.user == null) {
            return (window.location="./sign-in")
        }
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
                    <Header cartProducts={this.state.cartProducts}  {...this.props} user={this.state.user} />
                </div>
                <div style={{ marginTop: 5, marginLeft: 20 }}>
                    <ProductTable
                        products={this.state.productsToShow}
                        updateCartProduct={this.updateCartProduct.bind(this)}
                    />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Product;