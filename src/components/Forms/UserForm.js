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


const classes = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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



class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: this.props.selectedRow.role,
            sex: this.props.selectedRow.sex,
            DNI: this.props.selectedRow.id,
            phone: this.props.selectedRow.phone,
            password: this.props.selectedRow.password,
            userName: this.props.selectedRow.userName,
            lastName: this.props.selectedRow.lastName,
            email: this.props.selectedRow.emailAddress,
            address: this.props.selectedRow.address,
            zipCode: this.props.selectedRow.zipCode,
            position: this.props.selectedRow.possition,
            positionDescription: this.props.selectedRow.possitionDescription,
            workShift: this.props.selectedRow.workShift,
            salary: this.props.selectedRow.salary,
            bonus: this.props.selectedRow.bonus,
            bank: this.props.selectedRow.bank,
            cuil: this.props.selectedRow.cuil,
            maritalStatus: this.props.selectedRow.maritalStatus,
            childrens: this.props.selectedRow.numberOfChildrens,
            healthInsurance: this.props.selectedRow.healthInsurance,
            workHours: this.props.selectedRow.laboralHours,
            action: this.props.action

        };
    }
    handleChangeRole = (event) => {
        this.setState({
            role: event.target.value
        })
    };
    handleChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    };
    handleChangeSex = (event) => {
        this.setState({
            sex: event.target.value
        })
    };
    handleChangeDni = (event) => {
        this.setState({
            DNI: event.target.value
        })
    };
    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    };
    handleChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    };
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    };
    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    };
    handleChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    };
    handleChangeZipCode = (event) => {
        this.setState({
            zipCode: event.target.value
        })
    };
    handleChangePosition = (event) => {
        this.setState({
            position: event.target.value
        })
    };
    handleChangePositionDescription = (event) => {
        this.setState({
            positionDescription: event.target.value
        })
    };
    handleChangeWorkShift = (event) => {
        this.setState({
            workShift: event.target.value
        })
    };
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    };
    handleChangeBonus = (event) => {
        this.setState({
            bonus: event.target.value
        })
    };
    handleChangeBank = (event) => {
        this.setState({
            bank: event.target.value
        })
    };
    handleChangeCUIL = (event) => {
        this.setState({
            cuil: event.target.value
        })
    };
    handleChangeMaritalStatus = (event) => {
        this.setState({
            maritalStatus: event.target.value
        })
    };
    handleChangeChildrens = (event) => {
        this.setState({
            childrens: event.target.value
        })
    };
    handleChangeHealthInsurance = (event) => {
        this.setState({
            healthInsurance: event.target.value
        })
    };
    handleChangeWorkHours = (event) => {
        this.setState({
            workHours: event.target.value
        })
    };
    actionClient(action) {
        let body = {
            "id": this.state.DNI,
            "userName": this.state.userName,
            "lastName": this.state.lastName,
            "sex": this.state.sex,
            "birthDate": "1990-08-05T00:00:00.000Z",
            "emailAddress": this.state.email,
            "password": this.state.password,
            "address": this.state.address,
            "zipCode": this.state.zipCode,
            "phone": this.state.phone,
            "role": parseInt(this.state.role),
            "possition": this.state.position,
            "possitionDescription": this.state.positionDescription,
            "laboralHours": parseInt(this.state.workHours),
            "workShift": this.state.workShift,
            "salary": parseInt(this.state.salary),
            "bonus": parseInt(this.state.bonus),
            "bank": this.state.bank,
            "cuil": this.state.cuil,
            "maritalStatus": this.state.maritalStatus,
            "numberOfChildrens": parseInt(this.state.childrens),
            "healthInsurance": this.state.healthInsurance,
            "admissionDate": "2019-11-09T00:00:00.000Z"
        }
        const auth = btoa('admin:123');
        if (action == 'new') {
            console.log('BODY',body)

            axios.post('https://market-api-uade.herokuapp.com/api/v1/Employees/create', body, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                    'Authorization': 'Basic ' + auth

                }
            }
            ).then(response => this.props.updateEmployeesList(body, 'new'))
        } else if (action == 'edit') {
            console.log('BODY',body)

            axios.put('https://market-api-uade.herokuapp.com/api/v1/Employees/update?id=' + body.id, body, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                    'Authorization': 'Basic ' + auth

                }
            }
            ).then(response => {this.props.updateEmployeesList(body, 'edit')})
        }
    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Empleado
        </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="DNI"
                            label="DNI"
                            name="DNI"
                            autoComplete="DNI"
                            autoFocus
                            value={this.state.DNI}
                            onChange={this.handleChangeDni}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Password"
                            label="Contraseña"
                            name="Contraseña"
                            autoComplete="Contraseña"
                            autoFocus
                            type="Password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}


                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Empleado"
                            label="Empleado"
                            type="text"
                            id="UserName"
                            value={this.state.userName}
                            onChange={this.handleChangeUserName}


                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Apellido"
                            label="Apellido"
                            type="text"
                            id="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChangeLastName}
                        />


                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Correo Electronico"
                            label="Correo Electrónico"
                            type="text"
                            id="Email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}


                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Direccion"
                            label="Dirección"
                            type="text"
                            id="Address"
                            value={this.state.address}
                            onChange={this.handleChangeAddress}


                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Zip Code"
                            label="Zip Code"
                            type="text"
                            id="ZipCode"
                            value={this.state.zipCode}
                            onChange={this.handleChangeZipCode}


                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Phone"
                            label="Teléfono"
                            type="phone"
                            id="Phone"
                            value={this.state.phone}
                            onChange={this.handleChangePhone}


                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Posicion"
                            label="Posición"
                            type="text"
                            id="possition"
                            value={this.state.position}
                            onChange={this.handleChangePosition}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Descripcion de posicion"
                            label="Descripción de posición"
                            type="text"
                            id="possitionDescription"
                            value={this.state.positionDescription}
                            onChange={this.handleChangePositionDescription}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Turno de trabajo"
                            label="Turno de trabajo"
                            type="text"
                            id="workShift"
                            value={this.state.workShift}
                            onChange={this.handleChangeWorkShift}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Salario"
                            label="Salario"
                            type="number"
                            id="salary"
                            value={this.state.salary}
                            onChange={this.handleChangeSalary}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Bonus"
                            label="Bonus"
                            type="number"
                            id="bonus"
                            value={this.state.bonus}
                            onChange={this.handleChangeBonus}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Banco"
                            label="Banco"
                            type="text"
                            id="bank"
                            value={this.state.bank}
                            onChange={this.handleChangeBank}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="CUIL"
                            label="CUIL"
                            type="text"
                            id="cuil"
                            value={this.state.cuil}
                            onChange={this.handleChangeCUIL}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Estado marital"
                            label="Estado marital"
                            type="text"
                            id="maritalStatus"
                            value={this.state.maritalStatus}
                            onChange={this.handleChangeMaritalStatus}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Numero de hijos"
                            label="Número de hijos"
                            type="number"
                            id="numberOfChildrens"
                            value={this.state.childrens}
                            onChange={this.handleChangeChildrens}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Seguro social"
                            label="Seguro social"
                            type="text"
                            id="healthInsurance"
                            value={this.state.healthInsurance}
                            onChange={this.handleChangeHealthInsurance}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Horas laborales"
                            label="Horas laborales"
                            type="number"
                            id="laboralHours"
                            value={this.state.workHours}
                            onChange={this.handleChangeWorkHours}

                        />
                        <Select
                            native
                            value={this.state.role}
                            onChange={this.handleChangeRole}
                            fullWidth
                            id="Role"

                        >
                            <option aria-label="None" value="" > Rol</option>
                            <option value={'1'}>Administracion</option>
                            <option value={'2'}>Recursos Humanos</option>
                            <option value={'3'}>Encargado de Deposito</option>
                            <option value={'4'}>Catagolador</option>
                            <option value={'5'}>Despachante</option>
                        </Select>
                        <Select
                            native
                            value={this.state.sex}
                            onChange={this.handleChangeSex}
                            fullWidth
                            id="sex"

                        >
                            <option aria-label="None" value="" > Sexo</option>
                            <option value={'H'}>Hombre</option>
                            <option value={'M'}>Mujer</option>
                        </Select>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => { this.actionClient(this.state.action) }}
                        >
                            Confirmar
          </Button>
                    </form>
                </div>
            </Container>
        )
    }
}
export default withStyles(classes, { withTheme: true })(UserForm);
