import React from 'react';
import Atention_Logo from '../Images/Atencion_Cliente.png'
import Email from '../Images/Email.png'
import Phone from '../Images/Phone.png'
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
    padding: "100px"
}


export default function Footer() {

    return (
        <div>
            <div style={style}>
                <div class="row">
                    <div class="col-sm-8" >
                        <img src={Atention_Logo} width="100" align="left" />
                    </div>
                    <div class="col-sm-8">
                        <div>
                            <img src={Phone} width="30" style={{marginLeft:80 }}  />
                            <label style={{marginLeft: 15}}>contacto@superencasa.com</label>
                        </div>
                        <div style={{marginTop:20 }}>
                            <img src={Email} width="30" />
                            <label style={{marginLeft: 15}}> 0800-333-4323</label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}