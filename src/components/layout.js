import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
// import Footer from './footer'

import '../styles/index.css'

const Layout = ({ children }) => {
  
  return (
    <>
      <Header siteTitle={'Juan F. Martínez'} />
      <div>
        <main>{children}</main>
      </div>
      {/* <Footer/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
