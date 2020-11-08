import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// Generate Order Data
function createData(id, salesNumber, totalPrice, delivered) {
    return { id, salesNumber, totalPrice, delivered };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', false),
    createData(1, '16 Mar, 2019', 'Paul McCartney', false),
    createData(2, '16 Mar, 2019', 'Tom Scholz', false),
    createData(3, '16 Mar, 2019', 'Michael Jackson', false),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', false),
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
            <Title>Ordenes</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Numero de Orden</TableCell>
                        <TableCell>Precio Total</TableCell>
                        <TableCell>Entregado</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.salesNumber}</TableCell>
                            <TableCell>{row.totalPrice}</TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={row.delivered}
                                />
                            </TableCell>

                            <TableCell>
                            <Button variant="outlined" size="small" color="primary" >
                                    Guardar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
        </Link>
            </div>
        </React.Fragment>
    );
}