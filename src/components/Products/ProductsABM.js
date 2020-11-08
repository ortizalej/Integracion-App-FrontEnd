import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import AddProducts from '../Forms/Product'
// Generate Order Data
function createData(id, name, price, stock) {
    return { id, name, price, stock };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', '1'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', '1'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', '1'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', '1'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', '1'),
];

function preventDefault(event) {
    event.preventDefault();
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function ClientABM() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Title>Products</Title>
            <Button variant="outlined" size="small" color="primary" onClick={handleOpen} >
                Nuevo Producto
            </Button>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.stock}</TableCell>
                            <TableCell>
                                <Button variant="outlined" size="small" color="primary" >
                                    Editar
                                </Button>
                                <Button variant="outlined" size="small" color="primary">
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}> 
                        <AddProducts />
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    );
}