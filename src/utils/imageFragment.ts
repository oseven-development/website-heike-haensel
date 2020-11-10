import { graphql } from "gatsby"

const imageFragment = graphql`
  fragment image on File {
    childImageSharp {
      fluid(maxHeight: 1080) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }
`

export { imageFragment }
