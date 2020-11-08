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
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    heigth: '90%'
  },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
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
    <Container >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Producto
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="Nombre"
            autoComplete="Nombre"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Descripcion"
            name="Descripcion"
            autoComplete="Descripcion"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Marca"
            label="Marca"
            type="text"
            id="brand"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Categoria"
            label="Categoria"
            type="text"
            id="category"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Peso"
            label="Peso"
            type="number"
            id="weight"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Precio"
            label="Precio"
            type="number"
            id="price"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Descuento"
            label="Descuento"
            type="number"
            id="discountRate"
          />              
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Stock"
            label="Stock"
            type="number"
            id="stock"
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
    </Container>
  );
}