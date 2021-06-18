import React, { useState } from 'react'
import PropTypes from 'prop-types';
// import './dashboard-body.scss'
import UserDashboardHeader from './header/header'
import {
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav,
    MDBSideNavLink,
    MDBContainer,
    MDBIcon,
    MDBRow, MDBCol, MDBAvatar
} from "mdbreact";
import './side-menu.scss'
import productUrl from "../../../utils/resolve_product_url";
import metabimLogo from '../../../assets/menu-metabim-logo.svg'

import defaultProfileImage from '../../../assets/default_user_icon.svg'
export default function AuthLayout({ children }) {
    const [isSlim, setIsSlim] = useState(false)
    const [sideNavLeft, setSideNavLeft] = useState(false)
    const auth = JSON.parse(sessionStorage.getItem('auth'))
    // const isManager = auth.groups.includes('manager') || auth.groups.includes('super')
    // const profileImage = productUrl(auth.userName+'/profile_image')
    return (
        <div className="SideMenu">
            <MDBSideNav slim={!isSlim} responsive fixed triggerOpening={!sideNavLeft} breakWidth={240}
                openNav>
                <li className="menu-header">
                    <div>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol className="header-col">
                                    <img alt="logho" src={metabimLogo} />
                                    <span style={{ paddingTop: '30px' }}>{auth ? auth.fullName : 'John Doe'}</span>
                                    <span style={{ paddingTop: '18px', color: '#B6B4B4' }}>{auth ? auth.userName : 'jojhDoe'}</span>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <MDBAvatar
                            tag="img"
                            src={defaultProfileImage}
                            className="rounded-circle z-depth-1 img-fluid mx-auto"
                            onError={(e) => e.target.src = defaultProfileImage}
                        />
                    </div>
                </li>
                <MDBSideNavNav className="side-menu-body">
                    {/*<MDBSideNavCat isOpen={this.props.location.pathname.endsWith('dashboard')} name="Panels" id="panels" icon="diagnoses" iconSize="lg" >*/}
                    {/*  <MDBSideNavLink to="/dashboard"  >*/}
                    {/*    <MDBIcon icon="chart-bar" size="lg" className="mr-2" />Dashboard</MDBSideNavLink>*/}
                    {/*  <MDBSideNavLink  to={'/activity-logs'}>*/}
                    {/*    <MDBIcon size="lg" className="mr-2" icon="file-archive" />Activity logs</MDBSideNavLink>*/}
                    {/*</MDBSideNavCat>*/}
                    {/* <MDBSideNavCat icon={'users-cog'} iconSize={'lg'}
                        style={{ display: (isManager ? '' : 'none') }}
                        name={'Users Management'} id={'userManagement'}>
                        <MDBSideNavLink to="/users"  >
                            <MDBIcon icon="users" size="lg" className="mr-2" />Users
                        </MDBSideNavLink>
                    </MDBSideNavCat> */}

                    <MDBSideNavCat
                        name="Sites" id="sites" icon="building" iconSize="lg">
                        <MDBSideNavLink to={'/models'}>
                            <MDBIcon size="lg" className="mr-2" icon="cube" />Models</MDBSideNavLink>
                        <MDBSideNavLink to={'/systems'}>
                            <MDBIcon size="lg" className="mr-2" icon="project-diagram" />Systems</MDBSideNavLink>
                    </MDBSideNavCat>
                    <MDBSideNavCat name={"Account"}
                        id={'account'} icon={'user-circle'}
                        iconSize={'lg'}>
                        <MDBSideNavLink onClick={() => this.handleLogOut()}>
                            <MDBIcon size="lg" className="mr-2" icon="sign-out-alt" />
                            Sign out
                        </MDBSideNavLink>
                        <MDBSideNavLink to={`/edit-profile/`} >
                            <MDBIcon size="lg" className="mr-2" icon="user-edit" />
                            Edit profile
                        </MDBSideNavLink>
                    </MDBSideNavCat>
                </MDBSideNavNav>
            </MDBSideNav>
            <div className='page-content-container'>
                {children}
            </div>
        </div>
    )
}
AuthLayout.prototype = {
    children: PropTypes.element.isRequired
}