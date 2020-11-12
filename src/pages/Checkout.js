import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../components/Checkouts/AddressForm';
import Review from '../components/Checkouts/Review';

const classes = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      cartProducts: this.props.location.state.cartProducts,
      addressForm: null,
      user:this.props.location.state.user
    };
  }

  updateAddress(address) {

    this.setState({
      addressForm: address,
      activeStep: 1
    })

  }
  finishSale() {
    this.setState({
      activeStep: 2
    })
  }
  goBack() {
    this.setState({
      activeStep: 0
    })

  }
  getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm
          updateAddress={this.updateAddress.bind(this)}
          addressForm={this.state.addressForm}
        />;
      case 1:
        return <Review
          cartProducts={this.state.cartProducts}
          addressForm={this.state.addressForm}
          goBack={this.goBack.bind(this)}
          finishSale={this.finishSale.bind(this)}
        />;
      default:
        throw new Error('Unknown step');
    }
  }
  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  };
  render() {
    const steps = ['Datos de envio', 'Verifica tu orden'];

    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Super En Casa
          </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Datos de envio
          </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Gracias por su compra
                </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {
                      this.props.history.push({
                        pathname: '/products',
                        state: { user: this.state.user }
                      })
                    }}
                  >
                    Confirmar
                  </Button>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(this.state.activeStep)}

                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}
export default withStyles(classes, { withTheme: true })(Checkout);
