
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';


const classes = theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
});
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: this.props.cartProducts,
      cartProductsList: Array.from(this.props.cartProducts.keys()),
      addressForm: this.props.addressForm,
      totalPrice: 0,
      totalWithDiscount: 0,
      

    };
  }
  makeProductDetail() {
    let index = 1
    let productDetail = {}
    this.state.cartProducts.forEach((values, keys) => {
      productDetail['additionalProp' + index] = values.selectedAmount
      index++;
    })
    return productDetail
  }

  goBack() {
    this.props.goBack()
  }
  finishSale() {
    this.props.finishSale()
  }

  createSale() {
    let productDetails = this.makeProductDetail()
    let body = {
      "id": uuidv4(),
      "shoppingCarId": "string",
      "total": this.state.totalPrice,
      "totalWithDiscount": this.state.totalWithDiscount,
      "userDni": "string",
      "paymentMethod": this.state.addressForm.paymentMethod,
      "productDetails": productDetails,
      "delivered": false
    }
    console.log(body)
    var auth = btoa('admin:123');
    axios.post('https://market-api-uade.herokuapp.com/api/v1/Sales/create', body, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Authorization': 'Basic ' + auth
      }
    }
    ).then(response => {
      console.log('RESPONSE', response)
      this.finishSale()
    })
  }
  sumTotal() {
    let sumTotal = 0;
    this.state.cartProducts.forEach((values, keys) => {

      sumTotal += (parseFloat(keys.price) * parseFloat(values.selectedAmount))
    })
    this.setState({
      totalPrice: sumTotal
    })
  }
  render() {
    if (this.state.totalPrice == 0) {
      this.sumTotal()
    }
    console.log(this.state.addressForm)
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Detalle de la orden
      </Typography>
        <List disablePadding>
          {this.state.cartProductsList.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.productName} secondary={product.discountRate} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              $ {this.state.totalPrice}
            </Typography>

          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>

            <Typography variant="h6" gutterBottom className={classes.title}>
              Datos de envio
          </Typography>
            <Typography gutterBottom>Metodo de Pago: {this.state.addressForm.paymentMethod}</Typography>

            <Typography gutterBottom>Nombre: {this.state.addressForm.name} {this.state.addressForm.lastName}</Typography>
            <Typography gutterBottom>Direccion: {[this.state.addressForm.address, this.state.addressForm.address2].join(', ')}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            {/* <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> */}

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => { this.goBack() }}

              >
                Atras
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => { this.createSale() }}

              >
                Confirmar Orden
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(classes, { withTheme: true })(Review);
