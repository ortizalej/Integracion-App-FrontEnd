import React, { useEffect, useState, Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../Images/Logo.png';
import axios from 'axios';
import Link from '@material-ui/core/Link';

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


class SignIn extends Component {
  SignInRedirect(user) {
    let path;

    switch (user.role) {
      case 0: // Client
        path = "/products"
        break;
      case 1: // Admin
        path = "/ordenes-de-compra"
        break;
      case 2: // RR.HH.
        path = "/users"
        break;
      case 3: // Encargado de depósito
        path = "/cataloger"
        break;
      case 4: // Catalogador
        path = "/cataloger"
        break;
      case 5: // Despachante
        path = "/deliverer"
        break;
    }
    this.props.history.push({
      pathname: path,
      state: { user: user }
    })
  }
  async getUser(emailAddress, password) {
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
        this.SignInRedirect(response.data, emailAddress, password)
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
          this.SignInRedirect(response.data, emailAddress, password)
          if (resp === undefined) {
            console.log("El usuario no existe.");
          }
          
        })
      }
    }

    return resp;
  }

  async validateUser() {
    let emailAddress = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    await this.getUser(emailAddress, password);
  }

  render() {
    const { classes } = this.props;

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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => { this.validateUser() }}
            >
              Ingresar
          </Button>

          </form>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/sign-up" variant="body2">
              {"No tienes cuenta? Registrate"}
            </Link>
          </div>

        </div>
        <Box mt={8}>
        </Box>
      </Container>
    )
  }
}
export default withStyles(classes, { withTheme: true })(SignIn);
