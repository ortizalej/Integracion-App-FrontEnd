import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { v4 as uuidv4 } from 'uuid';

const classes = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});
class CartModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartProducts: this.props.cartProducts,
            cartProductsList: Array.from(this.props.cartProducts.keys()),
            user: this.props.user,
            cartId: null

        };
    }
    redirectCheckout() {
        this.props.redirectCheckout(this.state.cartProducts)

    }
    makeProductDetail() {
        let index = 1
        let productDetail = {}
        this.state.cartProducts.forEach((values, keys) => {
            productDetail['additionalProp' + index] = values.selectedAmount
            index++;
        })
        return productDetail
    }
    createClient() {
        let body = {
            "id": uuidv4(),
            "userDni": this.state.user.id,
            "productDetails": {
                "additionalProp1": {
                    "product": {
                        "id": "string",
                        "productName": "string",
                        "description": "string",
                        "brand": "string",
                        "category": "string",
                        "weight": "string",
                        "price": 0,
                        "pictureUrl": "string",
                        "discountRate": 0,
                        "stock": 0,
                        "technicalSpecifications": {
                            "additionalProp1": "string",
                            "additionalProp2": "string",
                            "additionalProp3": "string"
                        }
                    },
                    "selectedAmount": 0
                }
            }
        }
        axios.post('https://market-api-uade.herokuapp.com/api/v1/ShoppingCar/create', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => console.log(response.data))
    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Productos
            </Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Cantidad</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.cartProductsList.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.productName}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{this.state.cartProducts.get(row).selectedAmount}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => {
                            this.props.history.push({
                                pathname: '/checkout',
                                state: { cartProducts: this.state.cartProducts }
                            })
                        }}
                    >
                        Confirmar
              </Button>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        );
    }
}
export default withStyles(classes, { withTheme: true })(CartModal);