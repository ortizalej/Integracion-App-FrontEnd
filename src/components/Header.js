import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

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
        </Toolbar>
      </AppBar>
    </div>
  );
}