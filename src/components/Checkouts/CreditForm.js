import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const validCVVRegex = RegExp(
    /^[0-9]{3}$/
  );

const validCreditCardRegex = RegExp(
    /^[0-9]{16}$/
  );

  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class CreditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: this.props.paymentForm.cardNumber,
            cvv: this.props.paymentForm.cvv,
            pays: this.props.paymentForm.pays,
            errors: {
                cardNumber: '',
                cvv:'',
              }
        };
    }

    /*handleChangeCardNumber = async function(event){
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
    };*/

    handleChangeCardNumber = async function(event){
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        
        await this.setState({
            cardNumber: event.target.value
        })
        errors.cardNumber = 
        validCreditCardRegex.test(value) 
            ? ''
            : 'El numero de la Tarjeta no es válido.';
            this.setState({
                cardNumber: event.target.value
            })

            if(validateForm(this.state.errors)) {
                //console.info('Valid Form')
                this.props.updateCardNumber(this.state.cardNumber)
              }else{
                //console.error('Invalid Form')
                //this.props.updateCbu(this.state.cbu, 0)
              }

        
    };

    handleChangeCvv = async function(event){
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        
        await this.setState({
            cvv: event.target.value
        })
        errors.cvv = 
        validCVVRegex.test(value) 
            ? ''
            : 'El código verificador no es válido.';
            this.setState({
                cvv: event.target.value
            })

            if(validateForm(this.state.errors)) {
                //console.info('Valid Form')
                this.props.updateCvv(this.state.cvv)
              }else{
                //console.error('Invalid Form')
                //this.props.updateCbu(this.state.cbu, 0)
              }

        
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
                        {this.state.errors.cardNumber.length > 0 && 
                        <span className='error'>{this.state.errors.cardNumber}</span>}
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
                        {this.state.errors.cvv.length > 0 && 
                        <span className='error'>{this.state.errors.cvv}</span>}
                    </Grid>

                    <React.Fragment >
                        <Grid item xs={3} sm={3}>
                        <Typography gutterBottom>Cuotas:</Typography>
                     
                        <Select
                            native
                            value={this.state.pays}
                            //onChange={this.handleChangePays}
                            onChange={(e) => {this.handleChangePays(e)}}
                            fullWidth
                            id="pays"
                            
                        >
                            
                            <option style={{textAlign:'center'}} value={'1'}>1</option>
                            <option value={'3'}>3</option>
                            <option value={'12'}>12</option>
                        </Select>
                        </Grid>
                        </React.Fragment>
                </Grid>



            ));
    }
}
export default CreditForm;