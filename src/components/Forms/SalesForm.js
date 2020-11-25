import React, { useEffect, useState, Component } from 'react';

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

class SalesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRow: props.row
        };
    }

    render() {
        console.log(this.props.row)
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
                            {JSON.parse(this.props.row.shoppingCarDetail).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.productName}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        );
    }
}
export default withStyles(classes, { withTheme: true })(SalesForm);
