/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 *
 * @format
 */

// You can delete this file if you're not using it

import React from "react"
import { Layout } from "./src/layout"

import "src/styles/global.scss"

export const onClientEntry = () => {
  /**
   * IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
   */
  if (!("IntersectionObserver" in window)) {
    import("intersection-observer") // eslint-disable-line

    console.log("IntersectionObserver is polyfilled!")
  }
}

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}> {element}</Layout>
)
