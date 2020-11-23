import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const classes = theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    title: {
        fontWeight: 'bold',
    },
    detail: {
        color:'blue',
    }
});
class SalesABM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterOrders: [],
            init: true
        };
    }
    deliverOrder(row) {
        let newMasterOrderList = this.state.masterOrders
        for (var i in newMasterOrderList) {
            if (newMasterOrderList[i].id == row.id) {
                newMasterOrderList[i] = row
            }
        }

        this.setState({
            masterOrders: newMasterOrderList,
        })

    }
    updateDeliver(row) {
        let body = {
            "id": row.id,
            "shoppingCarId": row.shoppingCarId,
            "date": row.date,
            "total": parseInt(row.total),
            "totalWithDiscount": parseInt(row.totalWithDiscount),
            "userDni": row.userDni,
            "paymentMethod": row.paymentMethod,
            "productDetails": row.productDetails,
            "delivered": true
        }
        const auth = btoa('admin:123');

        axios.put('https://market-api-uade.herokuapp.com/api/v1/Sales/update?id=' + body.id, body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Basic ' + auth

            }
        }
        ).then(response => { this.deliverOrder(body) })
    }
    getOrders() {
        var auth = btoa('admin:123');
        axios.get('https://market-api-uade.herokuapp.com/api/v1/Sales/get-all', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Basic ' + auth
            }
        }
        ).then(response => {
            console.log('RESPONSE', response.data)
            this.setState({
                masterOrders: response.data,
                init: false
            })
        })
    }
    render() {
        const { classes } = this.props;
        if (this.state.init) {
            this.getOrders();
        }
        return (
            <React.Fragment>
                <Title>Ordenes</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.title}>Numero de Orden</TableCell>
                            <TableCell className={classes.title}>Detalle</TableCell>
                            <TableCell className={classes.title}>Precio Total</TableCell>
                            <TableCell className={classes.title}>Transaccion</TableCell>
                            <TableCell className={classes.title}>Entregado</TableCell>
                            <TableCell className={classes.title}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.masterOrders.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell className={classes.detail}>Ver</TableCell>
                                <TableCell>{row.total}</TableCell>
                                <TableCell>
                                            <TextField
                                                required
                                                id="trans"
                                                name="Transaccion"
                                                label="Nro Transaccion"
                                                fullWidth
                                                autoComplete="given-name"
                                                //value=""{this.state.name}""
                                                //onChange={this.handleChange}
                                                noValidate
                                            /></TableCell>
                                <TableCell>
                                    <Checkbox
                                        checked={row.delivered}
                                    />
                                </TableCell>

                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        onClick={() => { this.updateDeliver(row) }}
                                        disabled={row.delivered}
                                    >
                                        Entregar
                                </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </React.Fragment>
        )
    }
}
export default withStyles(classes, { withTheme: true })(SalesABM);
