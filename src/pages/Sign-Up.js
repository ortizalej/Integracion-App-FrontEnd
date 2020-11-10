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

  async function createClient() {
    let dni = document.getElementById("DNI").value;
    let userName = document.getElementById("userName").value;
    let lastName = document.getElementById("lastName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let zipCode = document.getElementById("zipCode").value;

    let user = {
      "id": dni,
      "userName": userName,
      "lastName": lastName,
      "sex": "H",
      "birthDate": "1990-10-08T00:00:00.000Z",
      "emailAddress": emailAddress,
      "password": password,
      "address": address,
      "zipCode": zipCode,
      "phone": phone,
      "role": 0
    }

    let resp = await validateExistingUser(user.id);

    if (resp === undefined) { createUser(user); }
    else { console.log("El cliente ya existe"); }

    // Redirect to sign in
  }

  async function validateExistingUser(dni) {
    let resp;
    var auth = btoa('admin:123');
    try {
      let url = 'https://market-api-uade.herokuapp.com/api/v1/Clients/' + dni;
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
    catch {}

    return resp;
  }

  async function createUser(user) {
    var auth = btoa('admin:123');
      await axios.post('https://market-api-uade.herokuapp.com/api/v1/Clients/create', user, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          'Authorization': 'Basic ' + auth
        }
      }
      ).then(response => console.log("El cliente ha sido creado: ", response.data))
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
            name="Nombre"
            label="Nombre"
            type="text"
            id="userName"
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Correo Electronico"
            label="Correo Electronico"
            type="text"
            id="emailAddress"
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
            id="phone"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Código Postal"
            label="Código Postal"
            type="string"
            id="zipCode"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={createClient}
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