import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
}
export default () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "slider" } }) {
        edges {
          node {
            ...image
          }
        }
      }
    }
  `)
  return (
    <div className="h-64 lg:h-128">
      <Slider {...settings}>
        {edges.map(file => (
          <div key={file.node.childImageSharp.fluid.src}>
            <Img
              className="h-64 lg:h-128"
              fluid={file.node.childImageSharp.fluid}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
