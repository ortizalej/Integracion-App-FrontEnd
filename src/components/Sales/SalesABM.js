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
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import SalesFrom from '../Forms/SalesForm'
const classes = theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    title: {
        fontWeight: 'bold',
    },
    detail: {
        color: 'blue',
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '10%',
        left: '10%',
        overflow: 'scroll',
        height: '100%',
        display: 'grid'
    },
});
class SalesABM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterOrders: [],
            init: true,
            open: false,
            selectedRow: null
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
    handleOpen = (row, action) => {
        this.state.selectedEmployee = row;

        this.setState({
            open: true,
            selectedRow: row,

        })
    };
    handleClose = (row) => {
        this.setState({
            open: false,
        })
    };
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
                                <TableCell
                                    className={classes.detail}
                                    onClick={() => { this.handleOpen(row) }}
                                >
                                    Ver
                                 </TableCell>
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
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.state.open}
                    onClose={() => { this.handleClose() }}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className={classes.paper}>
                        <SalesFrom row={this.state.selectedRow}/>
                        </div>
                    </Fade>
                </Modal>
            </React.Fragment>
        )
    }
}
export default withStyles(classes, { withTheme: true })(SalesABM);
