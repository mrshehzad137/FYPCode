import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import AuthService from '../AuthTest';
import {AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/comsatslogo.jpg';
import sygnet from '../../assets/img/brand/comsatslogo.jpg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const Auth =new AuthService();

class AdminHeader extends Component {
    
  constructor(props){
    super(props);
    this.state={
    }
    this.logoutHandler= this.logoutHandler.bind(this);
  }

  logoutHandler(){
    
    Auth.logout();
    window.location.reload(false);

  }
 
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 40, height: 30, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }} style={{width:'80px'}}
        />
        <h2 style={{marginTop:'10px',color:'#3a3a56'}}><strong>SSRS</strong></h2>
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/AdminDashboard/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="/AdminDashboard/notification" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'http://localhost:4000/uploads/AdminImages/2020-02-17T20:55:03.574ZIMG_20170922_191809.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><i className="fa fa-user"></i><Link to='/AdminDashboard/profile' style={{textDecoration:'none'}}>Profile</Link></DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem onClick={this.logoutHandler}><i className="fa fa-lock"></i> 
                <Link to="/admin/login" style={{textDecoration:"none"}}>Logout</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

AdminHeader.propTypes = propTypes;
AdminHeader.defaultProps = defaultProps;

export default AdminHeader;
