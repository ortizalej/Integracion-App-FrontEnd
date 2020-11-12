import React from 'react';
import Atention_Logo from '../../Images/Atencion_Cliente.png'
import Email from '../../Images/Email.png'
import Phone from '../../Images/Phone.png'
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "2px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    paddingBottom: "85px",
    paddingTop: "1px",
    padding: '0.5rem',
    marginTop: '1rem'
}

var phantom = {
    display: 'block',
    height: '60px',
    width: '100%',
    bottom:'1rem'
  }

export default function Footer() {

    return (
        <div >
            <div style={style}>
                <div class="row" style={{marginLeft:'20%'}}>
                    <div class="col-sm-8" styles={{marginBottom:'1rem'}} >
                        <img src={Atention_Logo} width="70" align="left" />
                    </div>
                    <div class="col-sm-8" >
                        <div>
                            <img src={Phone} width="20" style={{marginLeft:80 }}  />
                            <label style={{marginLeft: 15}}>0800-333-4323</label>
                        </div>
                        <div style={{marginTop:10 }}>
                            <img src={Email} width="20" />
                            <label style={{marginLeft: 15}}> contacto@superencasa.com</label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}