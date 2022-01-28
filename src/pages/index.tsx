import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Seo, Courses, ImageSlider } from "../components"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="news kurse" keywords="news kurse" description="" />
      <ImageSlider />
      <section className="bg-purple py-8">
        <div className="container mx-auto max-w-screen-sm">
          <h1 className="text-white text-center">News</h1>
          <p className="text-white">
            Schmerzen, Krankheiten, psychische und körperliche Beschwerden …
          </p>
          <p className="text-white">
            Lassen diese sich mit <strong>Reinkarnationstherapie</strong>{" "}
            heilen?
          </p>
          <Link className="text-white-purple underline" to="/therapie">
            Weiterlesen …
          </Link>
        </div>
      </section>

      <section className="bg-white-purple py-8">
        <div className="container mx-auto text-center max-w-screen-sm">
          <h3 className="text-purple">Neue Kurse:</h3>
          <h2 className="text-purple">Autogenes Training für Erwachsene</h2>
          <h3>Leider können zur Zeit keine Kurse stattfinden!</h3>
          <GatsbyImage
            className="my-8"
            image={data.atfe.childImageSharp.gatsbyImageData}
            alt=""
          />
          {/* <Courses /> */}
        </div>
      </section>

      <section className="bg-purple py-8">
        <div className="container mx-auto max-w-screen-sm text-white ">
          <h3>je Kurs 8 Einheiten/ 60 min</h3>
          <p>
            Die Kurse werden von den Krankenkassen anerkannt und als
            Präventivmaßnahme nach § 20 SGB V bezuschusst.
          </p>
          <p>Genauere Informationen erhalten sie von ihrer Krankenkasse.</p>
          <h3>Kursgebühr: 90,- €</h3>
        </div>
      </section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    atfe: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "H_Haensel_9760_roh.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
