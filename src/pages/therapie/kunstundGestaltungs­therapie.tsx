import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../../components"
const ImaginativeTherapiemitInnerenBildernPage = () => {
  const { pb } = useStaticQuery(graphql`
    {
      pb: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Die_Kunst-_und_Gestaltungstherapie.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo
        title="Kunst- und Gestaltungs­therapie"
        keywords="Kunst- und Gestaltungs­therapie"
        description=""
      />
      <section className="bg-white-purple ">
        <div className="container mx-auto max-w-screen-lg py-16">
          <Link
            to="/therapie#angebote"
            className="p-4 bg-purple text-white rounded mb-16 hover:bg-tyrian-purple"
          >
            Zurück zu den Therapie­angeboten
          </Link>
          <h1 className="text-purple mt-8">Kunst- und Gestaltungs­therapie</h1>
          <Img
            className="my-8 w-full md:w-1/2"
            fluid={pb.childImageSharp.fluid}
          />
          <p>
            In der Kunst- und Gestaltungstherapie steht das Arbeiten mit
            kreativen, bildnerischen Mitteln, wie Farben, Ton, Stein oder Holz
            im Vordergrund.
          </p>
          <p>
            Ziel dabei ist es, nicht mit Hilfe der künstlerischen Betätigung ein
            Kunstwerk zu schaffen, sondern über einen Gestaltungsvorgang
            innerpsychische Prozesse sichtbar zu machen.
          </p>
          <p>
            Manche Dinge lassen sich nicht, oder nur sehr schwer in Worte
            fassen. Über den Weg des Gestaltens&nbsp;wird das Unbewusste
            sichtbar und erfassbar gemacht. Die Art und Weise der Gestaltung und
            das Ergebnis des kreativen Prozesses zeigen symbolisch&nbsp;die
            anstehenden Themen.&nbsp;Wir bleiben durch&nbsp;das Gestalten nicht
            passiv und erdulden Leidvolles, sondern sind&nbsp;aktiv und können
            somit Situationen umgestalten.
          </p>
          <p>
            So wird es möglich die Inhalte zu bearbeiten und neue Lösungsansätze
            zu integrieren.
          </p>
          <p>
            Über das Gestalten lernen sie sich besser kennen und bekommen die
            Möglichkeit Geschehenes besser zu verarbeiten.
          </p>
        </div>
      </section>
    </>
  )
}

export default ImaginativeTherapiemitInnerenBildernPage
