import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {     
    };
  }

  handleChangePaymentMethod = (event) => {
    this.setState({
      paymentMethod: event.target.value
    })
  };

  render() {
    const value = "";//[ 'Credito', 'Debito', 'Efectivo'];
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
      
      {this.state.paymentMethod === 'Credito' && 
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nunmero de la tarjeta" fullWidth autoComplete="cc-name" />
        </Grid>

        {/*<Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numero de tarjeta"
            fullWidth
            autoComplete="cc-number"
        /> 
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de expiracion" fullWidth autoComplete="cc-exp" />
        </Grid>*/}
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
          />

        <Select
          native
          //value={this.state.paymentMethod}
          //onChange={this.handleChangePaymentMethod}
          fullWidth
          id="pays"
          
        >
          <option aria-label="None" value="" > Cuotas</option>
          <option value={'1'}>1</option>
          <option value={'3'}>3</option>
          <option value={'12'}>12</option>
        </Select>
    </Grid> 

    </Grid> }
    
    {this.state.paymentMethod === 'Efectivo' &&
      
      <Grid style={{height:'50px', }} item xs={12} md={12}>
         <div>"El pago en Efectivo se realizara contraentrega" </div>
      </Grid>
      }

    {this.state.paymentMethod === 'Debito' && 
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cbu" label="CBU" fullWidth autoComplete="cc-name" />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numero de tarjeta"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de expiracion" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
          />
    </Grid> */}

    </Grid> }


      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Button
                fullWidth
                variant="contained"
                color="primary"
                //onClick={() => { this.goBack() }}

              >
                Atras
              </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            //onClick={() => { this.goNext() }}
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