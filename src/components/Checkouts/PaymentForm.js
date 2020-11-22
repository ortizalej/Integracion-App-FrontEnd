import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CreditForm from '../Checkouts/CreditForm';
import DebitForm from '../Checkouts/DebitForm';
import { Snackbar } from '@material-ui/core';



class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: null,
      cbu:"",
      cardNumber: "",
      cvv: "",
      pays: "",
    };
  }
  updateCbu(cbu){
    this.setState({
      cbu: cbu
    })
  }
  updateCardNumber(cardNumber){
    this.setState({
      cardNumber: cardNumber
    })
  }
  updateCvv(cvv){
    this.setState({
      cvv: cvv
    })
  }
  updatePays(pays){
    this.setState({
      pays: pays
    })
  }
  updatePayment() {
    let paymentForm = {
      paymentMethod: this.state.paymentMethod,
      cbu: this.state.cbu,
      cardNumber: this.state.cardNumber,
      cvv: this.state.cvv,
      pays: this.state.pays,
    }
    console.log(paymentForm);
    this.props.updatePayment(paymentForm)
  }

  handleChangePaymentMethod = (event) => {
    this.setState({
      paymentMethod: event.target.value

    })
  };

  goBack() {
    this.props.goBack()
  }

  goNext() {
    this.props.goNext()
  }

  render() {
    const value = "";
  return (
    (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de Pago
      </Typography>
      <Grid item xs={12} sm={6}>
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

      </Grid>
      
      <div style={{height:'20px'}}/>

      {this.state.paymentMethod === 'Credito' && <CreditForm 
                                                    updateCardNumber={this.updateCardNumber.bind(this)}
                                                    updateCvv={this.updateCvv.bind(this)}
                                                    updatePays={this.updatePays.bind(this)}
                                                    paymentForm={this.state} 
                                                  /> }

      {this.state.paymentMethod === 'Efectivo' &&
        <Grid style={{height:'40px', marginTop:'15px'}} item xs={12} md={12}>
          <div>"El pago en Efectivo se realizara contraentrega" </div>
        </Grid>
      }

      {this.state.paymentMethod === 'Debito' && <DebitForm 
                                                    updateCbu={this.updateCbu.bind(this)} 
                                                    paymentForm={this.state.cbu}
                                                  /> }

      <div style={{height:'30px'}}/>

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
            onClick={() => { this.updatePayment() }}
          >
            Siguiente
              </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  ));
}
}

export default PaymentForm;