import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../../components"
const ImaginativeTherapiemitInnerenBildernPage = () => {
  const { pb } = useStaticQuery(graphql`
    {
      pb: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Die_Imaginative_Therapie_mit_Inneren_Bilder.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo
        title="Imaginative Therapie mit Inneren Bildern"
        keywords="Imaginative Therapie mit Inneren Bildern"
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
          <h1 className="text-purple mt-8">
            Imaginative Therapie mit Inneren Bildern
          </h1>
          <Img
            className="my-8 w-full md:w-1/2"
            fluid={pb.childImageSharp.fluid}
          />
          <p>
            Die Sprache der Seele ist eine Bildersprache. Die Seele „denkt“
            sozusagen in Bildern. Sie hilft uns, unsere eigene innere Welt zu
            verstehen und gibt Aufschluss über seelisches und körperliches
            Befinden.
          </p>
          <p>
            In Verbindung mit einem Zustand tiefer Entspannung können wir Bilder
            in uns entstehen lassen, die ähnlich wie Traumbilder, stark vom
            Unbewussten geprägt sind. Diese Bilder haben symbolischen Charakter.
          </p>
          <p>
            In Abgrenzung zum Traum kann aber hier bewusst Einfluss genommen
            werden. Die Situationen sind kontrollierbar, es besteht die
            Möglichkeit, zwischen Lösungen zu wählen und verdrängte und
            abgespaltene Teile zu integrieren. Inhalte aus dem Unbewussten
            können so aus den tieferen Schichten freigesetzt und erlebbar
            gemacht werden, damit eine Bearbeitung möglich wird.
          </p>
          <p>
            Das therapeutische Setting gestaltet sich dabei so, dass sie mit
            Hilfe einfacher verbaler Suggestionen in einen Zustand der
            Tiefenentspannung versetzt werden. In diesem Zustand sind wir in der
            Lage, Bilder und Vorstellungen entstehen zu lassen. Ein assoziativer
            Prozess wird somit in Gang gesetzt.
          </p>
          <p>
            Während der gesamten Imagination begleite ich sie und gebe
            Hilfestellung im Umgang mit den Bildern. Spontan können sich nun
            neue Einsichten ergeben und kreative Handlungsspielräume eröffnen.
          </p>
          <p>
            Durch das Erleben der Heilkraft innerer Bilder gewinnen sie das
            Vertrauen, sich in jeder Situation selbst helfen zu können.
          </p>
        </div>
      </section>
    </>
  )
}

export default ImaginativeTherapiemitInnerenBildernPage
