import React, { Component } from 'react'
import LoginForm from './component/form'

import './login.scss';
import {MDBContainer, MDBRow,  MDBCol, MDBAlert, MDBTypography} from "mdbreact";
import {ReactComponent as MetabimDiagram} from '../../assets/diagram-top-background.svg';
import metabimWelcomeLogo from '../../assets/Meta-BIM_Logo_negative.png'

import metaBimLogo from '../../assets/metabim-logo.svg' 

class Login extends Component {

    render() {
        return (
            <>
            <MDBContainer className={"LoginPage login_wrapper"}>
                <div className="left-login-background">
                    <MetabimDiagram />
                </div>
                <div className={"right-login-background"}>
                    <div className={"login-elipse-icon"}>
                        <img alt={''} className={"login-logo"} src={metaBimLogo} />
                    </div>
                    <MDBRow className={"login-form-row"}>
                        <MDBCol md="6" className="login-form">
                            <div className={"login-welcome-text"}>
                                <img
                                    className="rounded mx-auto d-block"
                                    src={metabimWelcomeLogo}
                                />
                                <MDBTypography
                                    className={'text-center'}
                                    tag='p'
                                >To continue, log in to Metabim</MDBTypography>
                            </div>
                            <LoginForm {...this.props}  />
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
            </>
        )
    }
}
Login.propTypes = {
}

export default Login;