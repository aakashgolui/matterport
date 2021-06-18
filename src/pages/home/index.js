import React from 'react'
// import PropTypes from 'prop-types'
import './home.scss';
import {
    MDBAlert,
    MDBBtnFixed,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBRow,
} from "mdbreact";
import UserDashboardHeader from '../_layouts/auth/header/header'


const queryString = require('qs')
const styles = {
    compare: {
        backgroundColor: '#5B7EA2',
        borderRadius: '10px',
        color: 'white'
    },
    search: {
        alignItems: 'center'
    }
}
function Home(props) {
    return (
        <MDBContainer fluid className="Models">
            <MDBRow>
                <MDBCol md={'12'} className="header_wrapper">
                    <UserDashboardHeader title={'Models'} />
                </MDBCol>
            </MDBRow>
            <MDBRow key="model-list"
                className={"d-flex flex-row ml-5 Search-modal"} style={styles.search}>
                <MDBCol md={"3"} >
                    <MDBInput style={{ fontWeight: '300' }}
                        type="text"
                        outline
                        onChange={(e) => this.handleSearch(e)}
                        label={<MDBIcon icon={"search"}> Search Models</MDBIcon>}
                        aria-label="Search" />
                </MDBCol>
            </MDBRow>
            

            
        </MDBContainer>
    )
}

Home.propTypes = {

}

export default Home