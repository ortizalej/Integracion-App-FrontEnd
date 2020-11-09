import React from 'react';
import { Card, makeStyles, CardMedia, CardActionArea } from '@material-ui/core';


export default function Carousel(props) {
    const { backgroundColor, title, pictureUrl, pictureUrl2, pictureUrl3 } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            
            borderRadius: 20,
            //padding: '75px 50px',
            margin: '0px 30px',
            width: '400px',
            justifyContent: 'center',
            boxShadow: '10px 10px 10px black',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'2rem',
            marginBottom:'2rem',
            marginLeft:'2rem',
            marginRight:'2rem'
    
        },
        container: {
            display: 'flex',
            justifyContent:'center'
        },
        imageCard:{
            height:"auto",
        }
    }));

    const classes = useStyles();

    return (
        //<Card className={classes.card}>
        //    <h1>{title}</h1>
        //</Card>

        <Card className={classes.container} >
           
                <CardMedia
                    className={classes.card}
                    component="img"                   
                    image={pictureUrl}
                />

                <CardMedia
                    className={classes.card}
                    component="img2"                   
                    image={pictureUrl2}
                />

                <CardMedia
                    className={classes.card}
                    component="img3"                   
                    image={pictureUrl3}
                />
            
       </Card>

    );
}