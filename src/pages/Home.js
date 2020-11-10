import React, { Component } from 'react';
import logo from '../Images/Logo.png';
import Footer from '../components/General/Footer'
import Header from '../components/General/Header'
import CarouselSlide from '../components/General/CarrouselImageHome';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            login: false
        };
    }

    render() {
        if (this.props.location.state != null && !this.state.login) {
            this.setState({
                user: this.props.location.state.user,
                login: true
            })
        }

        return (
            <div>

                <div style={{ marginTop: 60 }} >
                    <div>
                        <img src={logo} width="100" align="left" />
                    </div>
                    <Header user={this.state.user} />
                </div>
                <CarouselSlide />
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;