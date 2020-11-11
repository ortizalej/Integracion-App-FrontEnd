
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import { BrowserRouter as Router, Link } from "react-router-dom";

export const mainListItems =(
  <div>
    <Link to={{ pathname: '/admin' }} style={{ textDecoration: 'none', color: 'black' }}>

      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Ordenes de compra" />
      </ListItem>
    </Link>
    <Link to={{ pathname: '/sales' }} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Despachador" />
      </ListItem>
    </Link>
    <Link to={{ pathname: '/users' }} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
    </Link>
    <Link to={{ pathname: '/facturation' }} style={{ textDecoration: 'none', color: 'black' }}>

      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Facturacion" />
      </ListItem>
    </Link>
    <Link to={{ pathname: '/productAdmin' }} style={{ textDecoration: 'none', color: 'black' }}>

      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Admin. Productos" />
      </ListItem>
    </Link>
  </div>
);

export const dispatcherListItems = (
  <div>
    <Link to={{ pathname: '/sales' }} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Ordenes" />
      </ListItem>
    </Link>
  </div>
);

export const RRHHListItems = (
  <div>
    <Link to={{ pathname: '/users' }} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
    </Link>
  </div>
);

export const adminListItems = (
  <div>
    <Link to={{ pathname: '/facturation' }} style={{ textDecoration: 'none', color: 'black' }}>

      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Facturacion" />
      </ListItem>
    </Link>
    <Link to={{ pathname: '/sales' }} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Ordenes" />
      </ListItem>
    </Link>
  </div>
);

export const productListItems = (
  <div>
    <Link to={{ pathname: '/productAdmin' }} style={{ textDecoration: 'none', color: 'black' }}>

      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Products Admin" />
      </ListItem>
    </Link>
  </div>
);

