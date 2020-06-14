/** @format */

// React and Libarys
import React from "react"
import { graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </React.Fragment>
  )
}
