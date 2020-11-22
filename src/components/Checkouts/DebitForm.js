import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class DebitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cbu: this.props.paymentForm.cbu,
        };
    }

    

    handleChangeCbu = (event) => {
        this.setState({
            cbu: event.target.value
        })
        this.props.updateCbu(this.state.cbu)
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
                            onChange={this.handleChangeCbu} 
                        />
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