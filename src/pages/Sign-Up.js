import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../Images/Logo.png';
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

export default function SignUp() {
  const classes = useStyles();
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
        <img src={logo} width="100" align="left" />
        <Typography component="h1" variant="h5">
          Registrarse
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={createClient()}
          >
            Registrarse
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}