import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Checkbox from '@material-ui/core/Checkbox';

// Generate Order Data
function createData(id, salesNumber, totalPrice, methodPayment) {
    return { id, salesNumber, totalPrice, methodPayment };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tarjeta'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'Tarjeta'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Tarjeta'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Tarjeta'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Tarjeta'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function SalesABM() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Facturas </Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Numero de Orden</TableCell>
                        <TableCell>Precio Total</TableCell>
                        <TableCell>Medio de Pago</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.salesNumber}</TableCell>
                            <TableCell>{row.totalPrice}</TableCell>
                            <TableCell>{row.methodPayment}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}