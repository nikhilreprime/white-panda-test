/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* Component imports */

/* Style imports */
import "./styles.css";
/*** End Imports ***/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  componentWillMount() {}
  componentDidMount() {}

  // Server calls

  // helper function

  // listeners

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  // views to be rendered

  //finally render
  render() {
    let { title } = this.props;
    let menuUrl = (this.state.showMenu) ?  "/images/close.svg" :  "/images/menu.svg"
    return (
      <div className="header-container">
        <div className="section-1">
          <img src="/images/logo.jpg" />
        </div>
        <div className="section-2">
          <img
            class="i-hamburger-menu"
            src={menuUrl}
            alt="menu"
            onClick={this.toggleMenu}
          />
        </div>
        <div className={this.state.showMenu ? "menu show": "menu"}>
          <div className="item">
            <i class="item-icon" />
            <span>Balance</span>
          </div>
          <div className="item">
            <i class="item-icon" />
            <span>Notification</span>
          </div>
          <div className="item">
            <i class="item-icon" />
            <span>Profile</span>
          </div>
          <div className="item">
            <i class="item-icon" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * all prop types which can be passed to this component
 */
Header.propTypes = {
  title: PropTypes.string
  // options: PropTypes.arrayOf({
  //   icon : PropTypes.string,
  //   actionCallback: PropTypes.func
  // })
};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Header.defaultProps = {};

export default Header;
