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
    render() {
        return (
        <React.Fragment>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.products.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.productName}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.stock}</TableCell>
                            <TableCell>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <AddCircleIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="span">
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
