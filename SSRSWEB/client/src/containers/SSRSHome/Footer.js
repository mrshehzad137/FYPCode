import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
// import logo from '../../assets/img/brand/comsatslogo.jpg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class SSRSFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://lahore.comsats.edu.pk/">Smart Synopsis Review System</a> &copy; 2019 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://lahore.comsats.edu.pk/">Comsats University Islamabad, Campus Lahore</a></span>  
      </React.Fragment>
    );
  }
}

SSRSFooter.propTypes = propTypes;
SSRSFooter.defaultProps = defaultProps;

export default SSRSFooter;
