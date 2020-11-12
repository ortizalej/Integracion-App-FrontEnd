import React, { useState, Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
// Generate Order Data

const classes = theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
});
class ProductEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterProducts: [],
        };
    }
    updateCartProduct(row, action) {
        this.props.updateCartProduct(row, action);
    }

    render() {
        return (
            <React.Fragment >
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Producto</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Descripcion</TableCell>
                            <TableCell style={{fontWeight: 'bold'}}>Precio</TableCell>
                            <TableCell ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {this.props.products.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell><img src ={row.pictureUrl}  style={{width:60}} /></TableCell>
                                <TableCell>{row.productName}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        onClick={() => { this.updateCartProduct(row,'add')}}
                                    >
                                        <AddCircleIcon />
                                    </IconButton>
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        onClick={() => { this.updateCartProduct(row,'minus') }}
                                    >
                                        <IndeterminateCheckBoxIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        )
    }
}
export default withStyles(classes, { withTheme: true })(ProductEditor);
