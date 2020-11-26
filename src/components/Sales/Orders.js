import React, { useState, Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import axios from 'axios';


const classes = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterOrders: [],
      init: true
    };
  }
  getOrders() {
    var auth = btoa('admin:123');
    axios.get('https://market-api-uade.herokuapp.com/api/v1/Sales/get-all', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Authorization': 'Basic ' + auth
      }
    }
    ).then(response => {
      console.log('RESPONSE', response)
      this.setState({
        masterOrders: response.data,
        init: false
      })
    })
  }
  render() {
    const { classes } = this.props;
    if (this.state.init) {
      this.getOrders();
    }
    return (
      <React.Fragment>
        <Title>Órdenes de venta</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Número de Venta</TableCell>
              <TableCell>Numero de transaccion</TableCell>
              <TableCell>Método de Pago</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.masterOrders.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.paymentId}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </React.Fragment>
    )
  }
}
export default withStyles(classes, { withTheme: true })(Orders);
