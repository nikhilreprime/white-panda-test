
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Component imports */

/* Style imports */
import './styles.css'
/*** End Imports ***/

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.menuItems = [
      {
        id: 1,
        title: "H",
        iconUrl: "/images/home.svg",
        isActive: true
      },
      {
        id: 2,
        title: "C",
        iconUrl: "/images/note.svg",
        isActive: false
      },
      {
        id: 1,
        title: "P",
        iconUrl: "/images/save.svg",
        isActive: false
      }
    ]
  }

  componentWillMount() {

  }
  componentDidMount() {

  }

  // Server calls

  // helper function

  // listeners

  // views to be rendered


  //finally render
  render() {
    let { orientation } = this.props;

    let classes = "nav-bar-container"
    if (orientation === "horizantal") {
      classes += " nav-horizantal"
    } else {
      classes += " nav-vertical"
    };

    let menuView = this.menuItems.map((item, index) => {
      let classes = "";
      if (item.isActive) {
        classes = "active"
      }
      if (orientation === "horizantal") {
        classes += " item-menu-h"
      } else {
        classes += " item-menu-v"
      };
      return (
        <div className={classes}>
          {/* {item.title} */}
          <img
            className="route-icon"
            src={item.iconUrl}
            alt="route"
          />
        </div>
      )
    })
    return (
      <div className={classes}>
        {menuView}
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
NavBar.propTypes = {
  orientation: PropTypes.string
};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
NavBar.defaultProps = {
  orientation: "vertical"
};

export default NavBar;