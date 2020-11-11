import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import React, { Component } from 'react';

const classes = theme => ({
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
});
class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.selectedRow.id,
      productName: this.props.selectedRow.productName,
      description: this.props.selectedRow.description,
      brand: this.props.selectedRow.brand,
      category: this.props.selectedRow.category,
      weight: this.props.selectedRow.weight,
      price: this.props.selectedRow.price,
      pictureUrl: this.props.selectedRow.pictureUrl,
      discountRate: this.props.selectedRow.discountRate,
      stock: this.props.selectedRow.stock,
      technicalSpecifications: this.props.selectedRow.technicalSpecifications,
      action: this.props.action
    };
  }
  handleChangeId = (event) => {
    this.setState({
      id: event.target.value
    })
  };
  handleChangeProductName = (event) => {
    this.setState({
      productName: event.target.value
    })
  };
  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  };
  handleChangeBrand = (event) => {
    this.setState({
      brand: event.target.value
    })
  };
  handleChangeCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  };
  handleChangeWeight = (event) => {
    this.setState({
      weight: event.target.value
    })
  };
  handleChangePrice = (event) => {
    this.setState({
      price: event.target.value
    })
  };
  handleChangePictureURL = (event) => {
    this.setState({
      pictureUrl: event.target.value
    })
  };
  handleChangeDiscountRate = (event) => {
    this.setState({
      discountRate: event.target.value
    })
  };
  handleChangeStock = (event) => {
    this.setState({
      stock: event.target.value
    })
  };
  actionProduct(action) {
    console.log(action)
    let body = {
      "id": this.state.id,
      "productName": this.state.productName,
      "description": this.state.description,
      "brand": this.state.brand,
      "category": this.state.category,
      "weight": this.state.weight,
      "price": parseInt(this.state.price),
      "pictureUrl": this.state.pictureUrl,
      "discountRate": parseInt(this.state.discountRate),
      "stock": parseInt(this.state.stock),
      "technicalSpecifications": {}
    }
    const auth = btoa('admin:123');
    if (action == 'new') {
      let url ='https://market-api-uade.herokuapp.com/api/v1/Products/create'
      console.log(url)
      axios.post(url, body, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          'Authorization': 'Basic ' + auth

        }
      }
      ).then(response => this.props.updateProductList(body, 'new'))
    } else if (action == 'edit') {
      console.log('BODY', body)

      axios.put('https://market-api-uade.herokuapp.com/api/v1/Products/update?id=' + body.id, body, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          'Authorization': 'Basic ' + auth

        }
      }
      ).then(response => { this.props.updateProductList(body, 'edit') })
    }
  }
  render() {
    const { classes } = this.props;

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
              id="id"
              label="SKU"
              name="SKU"
              autoComplete="SKU"
              autoFocus
              value={this.state.id}
              onChange={this.handleChangeId}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Nombre"
              name="Nombre"
              autoComplete="Nombre"
              value={this.state.productName}
              onChange={this.handleChangeProductName}


            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Descripcion"
              label="Descripcion"
              type="text"
              id="description"
              value={this.state.description}
              onChange={this.handleChangeDescription}

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
              value={this.state.brand}
              onChange={this.handleChangeBrand}

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
              value={this.state.category}
              onChange={this.handleChangeCategory}

            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Peso"
              label="Peso"
              type="text"
              id="weight"
              value={this.state.weight}
              onChange={this.handleChangeWeight}

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
              value={this.state.price}
              onChange={this.handleChangePrice}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="url de imagen"
              label="url de imagen"
              type="text"
              id="pictureUrl"
              value={this.state.pictureUrl}
              onChange={this.handleChangePictureURL}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Porcentaje de descuento"
              label="Porcentaje de descuento"
              type="number"
              id="discountRate"
              value={this.state.discountRate}
              onChange={this.handleChangeDiscountRate}

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
              value={this.state.stock}
              onChange={this.handleChangeStock}

            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => { this.actionProduct(this.state.action) }}

            >
              Confirmar
          </Button>
          </form>
        </div>
      </Container>
    )
  }
}
export default withStyles(classes, { withTheme: true })(ProductForm);
