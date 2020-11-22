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

    handleChangeCardNumber = async function(event){
        await this.setState({
            cardNumber: event.target.value
        })
        this.props.updateCardNumber(this.state.cardNumber)
    };

    handleChangeCvv = async function(event){
        await this.setState({
            cvv: event.target.value
        })
        this.props.updateCvv(this.state.cvv)
    };

    handleChangePays = async function(event){
        await this.setState({
            pays: event.target.value
        })
        this.props.updatePays(this.state.pays)
    };

    render() {

        return (
            (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            required id="cardNumber" 
                            label="Numero de la tarjeta" 
                            fullWidth 
                            autoComplete="cc-name"
                            value={this.state.cardNumber}
                            //onChange={this.handleChangeCardNumber}
                            onChange={(e) => {this.handleChangeCardNumber(e)}}
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
                            required id="cvv"
                            label="CVV"
                            fullWidth
                            autoComplete="cc-csc"
                            value={this.state.cvv}
                            //onChange={this.handleChangeCvv}
                            onChange={(e) => {this.handleChangeCvv(e)}}
                        />

                        <Select
                            native
                            value={this.state.pays}
                            //onChange={this.handleChangePays}
                            onChange={(e) => {this.handleChangePays(e)}}
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