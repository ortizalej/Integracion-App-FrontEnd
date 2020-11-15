import React, { useState, Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Button from '@material-ui/core/Button';
import UserForm from '../Forms/UserForm'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';

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


class UsersABM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            employees: [],
            selectedEmployee: null,
            action: null,
            init: true
        };
    }
    handleOpen = (row, action) => {
        this.state.selectedEmployee = row;
        this.state.action = action;

        this.setState({
            open: true,
            selectedEmployee: row,
            action: action

        })
    };
    handleClose = (row) => {
        this.setState({
            open: false,
        })
    };

    updateEmployeesList(row, action) {
        let newEmployeesList = this.state.employees
        if (action == 'new') {
            newEmployeesList.push(row)
        } else if (action == 'edit') {
            for (var i in newEmployeesList) {
                if (newEmployeesList[i].id == row.id) {
                    newEmployeesList[i] = row
                }
            }
        }
        this.setState({
            employees: newEmployeesList,
            open: false
        })
    }

    handleDelete = (row) => {
        var array = [...this.state.employees];
        var index = array.indexOf(row)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ employees: array });
        }
        console.log(row.id)
        this.deleteEmployee(row.id)
    }
    getEmployees() {
        var auth = btoa('admin:123');
        axios.get('https://market-api-uade.herokuapp.com/api/v1/Employees/get-all', {
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
                employees: response.data,
                init: false
            })
        })
    }
    deleteEmployee(id) {
        const auth = btoa('admin:123');
        axios.delete('https://market-api-uade.herokuapp.com/api/v1/Employees/delete?id=' + id, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Basic ' + auth

            }
        }
        ).then(response => console.log(response.data))
    }
    render() {
        const { classes } = this.props;
        if (this.state.init) {
            this.getEmployees();
        }
        return (
            <React.Fragment>
                <Title>Empleados</Title>
                <Button variant="outlined" size="small" color="primary" onClick={() => { this.handleOpen({}, 'new') }}>
                    Nuevo Empleado
            </Button>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.employees.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.userName}</TableCell>
                                <TableCell>{row.lastName}</TableCell>
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
                    onClose={() => { this.handleClose() }}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className={classes.paper}>
                            <UserForm
                                action={this.state.action}
                                selectedRow={this.state.selectedEmployee}
                                updateEmployeesList={this.updateEmployeesList.bind(this)}
                            />
                        </div>
                    </Fade>
                </Modal>
            </React.Fragment >
        );
    }
}
export default withStyles(classes, { withTheme: true })(UsersABM);

