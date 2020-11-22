import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class CreditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: this.props.paymentForm.cardNumber,
            cvv: this.props.paymentForm.cvv,
            pays: this.props.paymentForm.pays,
        };
    }

    handleChangeCardNumber = (event) => {
        this.setState({
            cardNumber: event.target.value
        })
    };

    handleChangeCvv = (event) => {
        this.setState({
            cvv: event.target.value
        })
    };

    handleChangePays = (event) => {
        this.setState({
          pays: event.target.value
        })
    };

    render() {

        return (
            (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            required id="cardNumber" 
                            label="Nunmero de la tarjeta" 
                            fullWidth 
                            autoComplete="cc-name"
                            value={this.state.cardNumber}
                            onChange={this.handleChangeCardNumber}
                        />
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
                            value={this.state.cvv}
                            onChange={this.handleCvv}
                        />

                        <Select
                            native
                            value={this.state.pays}
                            onChange={this.handleChangePays}
                            fullWidth
                            id="pays"
                        >
                            <option aria-label="None" value="" > Cuotas</option>
                            <option value={'1'}>1</option>
                            <option value={'3'}>3</option>
                            <option value={'12'}>12</option>
                        </Select>
                    </Grid>

                </Grid>



            ));
    }
}
export default CreditForm;