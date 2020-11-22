import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      lastName: null,
      address: null,
      address2: null,
      city: null,
      province: null,
      zipcode: null,
      paymentMethod: null
    };
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  };
  handleChangeAddress = (event) => {
    this.setState({
      address: event.target.value
    })
  };
  handleChangeAddress2 = (event) => {
    this.setState({
      address2: event.target.value
    })
  };
  handleChangeCity = (event) => {
    this.setState({
      city: event.target.value
    })
  };
  handleChangeProvince = (event) => {
    this.setState({
      province: event.target.value
    })
  };
  handleChangeZipCode = (event) => {
    this.setState({
      zipCode: event.target.value
    })
  };
  handleChangePaymentMethod = (event) => {
    this.setState({
      paymentMethod: event.target.value
    })
  };
  updateAddress() {
    let addressForm = {
      name: this.state.name,
      lastName: this.state.lastName,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      province: this.state.province,
      zipcode: this.state.zipcode,
      //paymentMethod: this.state.paymentMethod
    }
    this.props.updateAddress(addressForm)
  }
  render() {
    console.log('rerender')
    return (
      (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Datos de envio
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="Nombre"
                label="Nombre"
                fullWidth
                autoComplete="given-name"
                value={this.state.name}
                onChange={this.handleChangeName}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="Apellido"
                label="Apellido"
                fullWidth
                autoComplete="family-name"
                value={this.state.lastName}
                onChange={this.handleChangeLastName}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="Direccion"
                label="Direccion"
                fullWidth
                autoComplete="shipping address-line1"
                value={this.state.address}
                onChange={this.handleChangeAddress}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="Direccion"
                label="Direccion"
                fullWidth
                autoComplete="shipping address-line2"
                value={this.state.address2}
                onChange={this.handleChangeAddress2}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="Ciudad"
                label="Ciudad"
                fullWidth
                autoComplete="shipping address-level2"
                value={this.state.city}
                onChange={this.handleChangeCity}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="province"
                name="Provincia"
                label="Provincia"
                fullWidth
                value={this.state.province}
                onChange={this.handleChangeProvince}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="Codigo Postal"
                label="Codigo Postal"
                fullWidth
                autoComplete="shipping postal-code"
                value={this.state.zipcode}
                onChange={this.handleChangeZipCode}

              />
            </Grid>
            { /*<Grid item xs={12} sm={6}>
              <Select
                native
                value={this.state.paymentMethod}
                onChange={this.handleChangePaymentMethod}
                fullWidth
                id="methodPayment"

              >
                <option aria-label="None" value="" > Medio de Pago</option>
                <option value={'Efectivo'}>Efectivo</option>
                <option value={'Debito'}>Tarjeta Debito</option>
                <option value={'Credito'}>Tarjeta Credito</option>
              </Select>

            </Grid> */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.props.history.push({
                      pathname: '/products',
                      state: { user: this.props.user, cartProducts: this.props.cartProducts }
                    })
                  }}
                >
                  Volver
              </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => { this.updateAddress() }}
                >
                  Siguiente
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )
    )
  }
}
export default AddressForm;
