import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import React  from "react";
import './header.scss'
import headerBackgroundImage from '../../../../assets/header_image_background.svg'
export default function UserDashboardHeader({title, secondTitle=null}) {

  return (
      <MDBContainer fluid className="DashBoard">
        <MDBRow style={{background:'#5B7EA2',
          height:'66px',
          display:'block'}}>
            <img style={{float:'right'}}
                 alt={''} src={headerBackgroundImage}/>
          <MDBCol size={'10'} className="dashboard-header">
            <p  className="dashboard-title align-baseline">{title}</p>
          </MDBCol>
          {secondTitle ?
              <MDBCol size={'10'} className="dashboard-header">
                <p  className="dashboard-second-title align-baseline">{secondTitle}</p>
              </MDBCol>
              :
              null}
        </MDBRow>
      </MDBContainer>
  )
}