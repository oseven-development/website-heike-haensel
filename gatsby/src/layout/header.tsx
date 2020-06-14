/** @format */

// React and Libarys
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Navigation from "./navigation"
import MobileNavigation from "./mobileNavigation"

export default () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "logos" }
        relativePath: { eq: "logo-heilpraktiker-01.png" }
      ) {
        ...image
      }
    }
  `)

  return (
    <header className="container flex mx-auto justify-between py-4 max-w-screen-lg">
      <Link to="/" aria-label="Heike Hänsel Logo">
        <Img
          aria-label="Heike Hänsel Logo"
          className="w-40 md:w-64"
          fluid={file.childImageSharp.fluid}
        />
      </Link>

      <Navigation />
      <MobileNavigation />
    </header>
  )
}
