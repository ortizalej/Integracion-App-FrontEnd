import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
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
function createData(id, name, price, stock, quantity) {
    return { id, name, price, stock, quantity };
}

const rows = [
    createData(0, 'Falopa', '1000', '3', '0'),
    createData(1, 'Coca', '500', '3', '0'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Product(data) {
    console.log('DATA LLEGADA',data.products)

    const classes = useStyles();
    return (
        <React.Fragment>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.products.map((row) => (
                        <TableRow key={row.id}>
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
    );
}