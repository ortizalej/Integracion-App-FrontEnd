import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import AddProducts from '../Forms/ProductForm'
import axios from 'axios';

// Generate Order Data

const classes = theme => ({
    root: {
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
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
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
});
class ProductABM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            product: [],
            selectedProduct: {},
            action: null,
            init: true
        };
    }
    handleOpen = (row, action) => {
        this.state.selectedProduct = row;
        this.state.action = action;

        this.setState({
            open: true,
            selectedProduct: row,
            action: action

        })
    };
    handleDelete = (row) => {
        var array = [...this.state.product];
        var index = array.indexOf(row)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ product: array });
        }
        this.deleteProduct(row.id)
    }
    deleteProduct(id) {
        const auth = btoa('admin:123');
        axios.delete('https://market-api-uade.herokuapp.com/api/v1/Products/delete?id=' + id, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Basic ' + auth

            }
        }
        ).then(response => console.log(response.data))
    }
    updateProductList(row, action) {
        console.log(action)
        let newProductList = this.state.product
        if (action == 'new') {
            newProductList.push(row)
        } else if (action == 'edit') {
            for (var i in newProductList) {
                if (newProductList[i].id == row.id) {
                    newProductList[i] = row
                }
            }
        }
        this.setState({
            product: newProductList,
            open: false
        })
    }

    handleClose = (row) => {
        this.setState({
            open: false,
        })
    };
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
                product: response.data,
                init: false
            })
        })
    }
    render() {
        const { classes } = this.props;
        if (this.state.init) {
            this.getProducts();
        }
        return (
            <React.Fragment>
                <Title>Products</Title>
                <Button variant="outlined" size="small" color="primary" onClick={() => { this.handleOpen({}, 'new') }} >
                    Nuevo Producto
            </Button>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.product.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.productName}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.stock}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="small" color="primary" onClick={() => { this.handleOpen(row, 'edit') }}>
                                        Editar
                                </Button>
                                    <Button variant="outlined" size="small" color="primary" onClick={() => { this.handleDelete(row) }}>
                                        Eliminar
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
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className={classes.paper}>
                            <AddProducts
                                action={this.state.action}
                                updateProductList={this.updateProductList.bind(this)}
                                selectedRow={this.state.selectedProduct}
                            />
                        </div>
                    </Fade>
                </Modal>
            </React.Fragment>
        )
    }

}
export default withStyles(classes, { withTheme: true })(ProductABM);
