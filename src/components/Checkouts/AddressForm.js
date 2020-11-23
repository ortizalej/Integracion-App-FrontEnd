import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validCPRegex = RegExp(
  /^[0-9]{4}$/
);

const validOnlyText = RegExp(
  /^[a-zA-Z]+$/
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

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
      paymentMethod: null,
      errors: {
        name: '',
        lastName:'',
        zipcode: '',
        address:'',
        address2:'',
        city:'',
        province:'',
        
      }
    };
  }

  

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'Nombre': 
        errors.name = 
          value.length < 1
            ? 'El nombre no puede estar vacío.'
            : '';
            this.setState({
              name: event.target.value
            })
        break;
      
      case 'Apellido': 
        errors.lastName = 
          value.length < 1 
            ? 'El Apellido no puede estar vacío.'
            : '';
            this.setState({
              lastName: event.target.value
            })
        break;
        case 'Calle': 
        errors.address = 
          value.length < 1 
            ? 'La Calle no puede estar vacía.'
            : '';
            this.setState({
              address: event.target.value
            })
        break;
        case 'PisoDepto': 
            this.setState({
              address2: event.target.value
            })
        break;
        case 'Ciudad': 
        errors.city = 
          value.length < 1 
            ? 'La Ciudad no puede estar vacía.'
            : '';
            this.setState({
              city: event.target.value
            })
        break;
        case 'Provincia': 
        errors.province = 
          value.length < 1 
            ? 'La Provincia no puede estar vacía.'
            : '';
            this.setState({
              province: event.target.value
            })
        break;
        case 'Codigo Postal': 
        errors.zipcode = 
        validCPRegex.test(value) 
            ? ''
            : 'El Código Postal no es válido.';
            this.setState({
              zipCode: event.target.value
            })
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  /*handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };*/
  /*handleChangeLastName = (event) => {
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
  };*/
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

    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      this.props.updateAddress(addressForm)
    }else{
      console.error('Invalid Form')
    }
   
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
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.name.length > 0 && 
                <span className='error'>{this.state.errors.name}</span>}
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
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.lastName.length > 0 && 
                <span className='error'>{this.state.errors.lastName}</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="Calle"
                label="Calle"
                fullWidth
                autoComplete="shipping address-line1"
                value={this.state.address}
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.address.length > 0 && 
                <span className='error'>{this.state.errors.address}</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="PisoDepto"
                label="Piso/Depto."
                fullWidth
                autoComplete="shipping address-line2"
                value={this.state.address2}
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.address2.length > 0 && 
                <span className='error'>{this.state.errors.address2}</span>}
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
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.city.length > 0 && 
                <span className='error'>{this.state.errors.city}</span>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="province"
                name="Provincia"
                label="Provincia"
                fullWidth
                value={this.state.province}
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.province.length > 0 && 
                <span className='error'>{this.state.errors.province}</span>}
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
                onChange={this.handleChange}
                noValidate
              />
              {this.state.errors.zipcode.length > 0 && 
                <span className='error'>{this.state.errors.zipcode}</span>}
            </Grid>
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
