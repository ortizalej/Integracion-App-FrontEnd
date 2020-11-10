import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import CartModal from '../Cart/CartModal'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
const classes = theme => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '10%',
    left: '10%',
    overflow: 'scroll',
    height: '100%',
    display: 'flex'
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }

});
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      products: []

    };
  }
  handleClose = (row) => {
    this.setState({
      open: false,
    })
  };
  handleOpen = (products) => {
    if (this.state.user == null) {

    } else {
      this.setState({
        open: true

      })
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title}>
            </Typography>
            <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Inicio </Button>
            </Link>
            <Link to={{ pathname: '/products' }} style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Productos </Button>
            </Link>
            <Link to={{ pathname: '/sign-in' }} style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Ingresar </Button>
            </Link>
            <IconButton aria-label="cart" onClick={this.handleOpen}>
              <StyledBadge badgeContent={this.state.products.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper}>
              <CartModal />
            </div>
          </Fade>
        </Modal>
      </div>
    )
  }
}
export default withStyles(classes, { withTheme: true })(Header);
