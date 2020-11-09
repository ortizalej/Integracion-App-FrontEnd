import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../Images/Logo.png';
import Select from '@material-ui/core/Select';
import axios from 'axios';


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
function SignInRedirect(role) {
  console.log(role)
  if (role == 'admin') {
    window.location.href = '/admin';
  } else if (role == 'rrhh') {
    window.location.href = '/users';

  } else if (role == 'deposito') {
    window.location.href = '/productsAdmin';

  } else if (role == 'catalogador') {
    window.location.href = '/productsAdmin';

  } else if (role == 'despachante') {
    window.location.href = '/sales';

  }
}
export default function SignIn() {
  function getUser() {
    axios.get('https://market-api-uade.herokuapp.com/api/v1/Clients/{id}', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    }
    ).then(response => console.log(response.data))
  }
  const classes = useStyles();
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} width="100" align="left" />

        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="Correo Electronico"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Contraseña"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Select
            native
            value={role}
            onChange={handleChange}
            fullWidth

          >
            <option aria-label="None" value="" > Selecciona un rol</option>
            <option value={'admin'}>Administracion</option>
            <option value={'rrhh'}>Recursos Humanos</option>
            <option value={'deposito'}>Encargado de Deposito</option>
            <option value={'catagolador'}>Catagolador</option>
            <option value={'despachante'}>Despachante</option>
          </Select>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => { SignInRedirect(role) }}
          >
            Ingresar
          </Button>

        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}