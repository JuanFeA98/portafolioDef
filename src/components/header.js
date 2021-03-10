import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/components/header.css'

import logo from '../images/saturno.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link to="/">
      <img src={logo} alt=""/>
      <h1>
        {siteTitle}
      </h1>
    </Link>
    <div className="NavBar">
      <Link to="/about">About me</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
