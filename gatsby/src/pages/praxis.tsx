import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../components"

const PraxisPage = () => {
  const { allFile } = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(
        filter: {
          sourceInstanceName: { eq: "praxis" }
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const [images, setImages] = React.useState([])

  React.useEffect(() => {
    setImages(
      allFile.edges.map(({ node: { childImageSharp, id } }) => ({
        childImageSharp,
        id,
      }))
    )
  }, [])

  return (
    <>
      <Seo title="Meine Praxis" keywords="Die Praxis" description="" />
      <section className="bg-white-purple">
        <div className="flex flex-wrap text-white max-w-screen-lg mx-auto py-2">
          {images.map(images => {
            return (
              <div key={images.id} className="w-full md:w-1/2 text-color p-4">
                <Img fluid={images.childImageSharp.fluid} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default PraxisPage
