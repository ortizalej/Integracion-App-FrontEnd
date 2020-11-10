import React from 'react';
import Atention_Logo from '../../Images/Atencion_Cliente.png'
import Email from '../../Images/Email.png'
import Phone from '../../Images/Phone.png'
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "2px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0px",
    bottom: "0px",
    height: "80px",
    width: "100%",
    padding: '2rem',
    marginTtop:'1rem'    
}

var phantom = {
    display: 'block',
    height: '60px',
    width: '100%',
  }

export default function Footer() {

    return (
        <div style={phantom}>
            <div style={style}>
                <div class="row" style={{marginLeft:'20%'}}>
                    <div class="col-sm-8" >
                        <img src={Atention_Logo} width="100" align="left" />
                    </div>
                    <div class="col-sm-8">
                        <div>
                            <img src={Phone} width="30" style={{ marginLeft: 80 }} />
                            <label style={{ marginLeft: 15 }}>contacto@superencasa.com</label>
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <img src={Email} width="30" />
                            <label style={{ marginLeft: 15 }}> 0800-333-4323</label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}