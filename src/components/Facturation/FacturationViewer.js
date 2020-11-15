import React, { useState, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import axios from 'axios';
import moment from 'moment'
import Select from '@material-ui/core/Select';


const classes = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class FacturacionViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterOrders: [],
      showOrders: [],
      init: true,
      type: this.props.type,
      hidePaymentList: this.props.hidePaymentList,
    };
  }

  handleChangePaymentMethod = (event) => {
    let filterProducts;
    filterProducts = this.state.masterOrders.filter(item => item.paymentMethod == event.target.value);
    if (event.target.value === '') {
      filterProducts = this.state.masterOrders
    }
    this.setState({
      showOrders: filterProducts
    })
  };

  getOrders() {
    var auth = btoa('admin:123');
    var url = 'https://market-api-uade.herokuapp.com/api/v1/Sales/'
    if (this.state.type === "Date") {
      url += 'get-by-date?saleDate=' + moment().format('MM-DD-YYYY');
    }
    else {
      url += "get-all";
    }

    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Authorization': 'Basic ' + auth
      }
    }
    ).then(response => {
      this.setState({
        masterOrders: response.data,
        showOrders: response.data,
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
        {this.state.hidePaymentList == false ?
          <Select
            native
            value={this.state.paymentMethod}
            onChange={this.handleChangePaymentMethod}
            fullWidth
            id="paymentMethod"
          >
            <option value={''}>Todos</option>
            <option value={'Débito'}>Débito</option>
            <option value={'Crédito'}>Crédito</option>
            <option value={'Efectivo'}>Efectivo</option>
          </Select>
          :
          <p></p>
        }

        <Title>Ordenes de venta</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Numero de Venta</TableCell>
              <TableCell>Metodo de Pago</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.showOrders.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.id}</TableCell>
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
export default withStyles(classes, { withTheme: true })(FacturacionViewer);
