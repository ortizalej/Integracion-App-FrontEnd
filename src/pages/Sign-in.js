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
import axios from 'axios';
import { Redirect } from "react-router-dom"


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

function SignInRedirect(user) {
  let path;

  switch (user.role) {
    case 0: // Client
      path = "../"
      break;
    case 1: // Admin
      path = "../admin"
      break;
    case 2: // RR.HH.
      path = "/users"
      break;
    case 3: // Encargado de depósito
      path = "/productsAdmin"
      break;
    case 4: // Catalogador
      path = "/productsAdmin"
      break;
    case 5: // Despachante
      path = "/sales"
      break;
  }

  console.log(path);
  return <Redirect to="www.google.com" />
}

export default function SignIn() {
  async function getUser(emailAddress, password) {
    let resp;
    var auth = btoa('admin:123');
    try {
      let url = 'https://market-api-uade.herokuapp.com/api/v1/Clients/get-by-email-and-password?emailAddress=' + emailAddress + '&password=' + password;
      await axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          'Authorization': 'Basic ' + auth
        }
      }
      ).then(response => {
        resp = response.data;
      })
    }
    catch {
      if (resp === undefined) {
        let url2 = 'https://market-api-uade.herokuapp.com/api/v1/Employees/get-by-email-and-password?emailAddress=' + emailAddress + '&password=' + password;
        await axios.get(url2, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Authorization': 'Basic ' + auth
          }
        }
        ).then(response => {
          resp = response.data;
          if (resp === undefined) {
            console.log("El usuario no existe.")
          }
        })
      }
    }

    return resp;
  }

  async function validateUser() {
    let emailAddress = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var user = await getUser(emailAddress, password);
    SignInRedirect(user)
  }

  const classes = useStyles();
  // const [role, setRole] = React.useState('');
  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };
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
          {/* <Select
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
          </Select> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={validateUser}
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