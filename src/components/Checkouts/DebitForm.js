import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const validCBURegex = RegExp(
    /^[0-9]{22}$/
  );

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class DebitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cbu: this.props.paymentForm.cbu,
            errors: {
                cbu: '',
              }
        };
    }

    handleChangeCbu = async function(event){
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        await this.setState({
            cbu: event.target.value
        })

        errors.cbu = 
        validCBURegex.test(value) 
            ? ''
            : 'El CBU no es válido.';
            this.setState({
                cbu: event.target.value
            })

            if(validateForm(this.state.errors)) {
                //console.info('Valid Form')
                this.props.updateCbu(this.state.cbu)
              }else{
                //console.error('Invalid Form')
                //this.props.updateCbu(this.state.cbu, 0)
              }

        
    };
    

    render() {

        return (
            (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            required id="cbu" 
                            label="CBU" 
                            fullWidth 
                            autoComplete="cc-name"
                            value={this.state.cbu}
                            //onChange={this.handleChangeCbu} 
                            onChange={(e) => {this.handleChangeCbu(e)}}
                            noValidate
                        />
                        {this.state.errors.cbu.length > 0 && 
                        <span className='error'>{this.state.errors.cbu}</span>}
                    </Grid>
                    {/* 
                    <Grid item xs={12} md={6}>
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

                </Grid>
            ));
    }
}
export default DebitForm;