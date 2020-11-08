import React, { useEffect, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
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
}));

export default function UserForm() {
    const classes = useStyles();
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    function createClient() {
        axios.post('https://market-api-uade.herokuapp.com/api/v1/Clients/{id}', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => console.log(response.data))
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Usuario
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Contraseña"
                        name="Contraseña"
                        autoComplete="Contraseña"
                        autoFocus
                        type="password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Usuario"
                        label="Usuario"
                        type="text"
                        id="userName"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Correo Electronico"
                        label="Correo Electronico"
                        type="text"
                        id="Email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Direccion"
                        label="Direccion"
                        type="text"
                        id="address"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Phone"
                        label="Phone"
                        type="phone"
                        id="Phone"
                    />
                    <Select
                        native
                        value={role}
                        onChange={handleChange}
                        fullWidth

                    >
                        <option aria-label="None" value="" />
                        <option value={'admin'}>Administracion</option>
                        <option value={'rrhh'}>Recursos Humanos</option>
                        <option value={'deposito'}>Encargado de Deposito</option>
                        <option value={'catagolador'}>Catagolador</option>
                        <option value={'despachante'}>Despachante</option>
                    </Select>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={createClient()}
                    >
                        Confirmar
          </Button>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}