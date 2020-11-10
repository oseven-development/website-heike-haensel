import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../../components"
const PersoenlichesBudgetPage = () => {
  const { pb } = useStaticQuery(graphql`
    {
      pb: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Persoenliches_Budget.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo
        title="Persönliches Budget"
        keywords="Persönliches Budget"
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
          <h1 className="text-purple mt-8">Persönliches Budget</h1>
          <h2 className="text-purple">
            Betreuung über Leistungen des Persönlichen Budgets
          </h2>
          <Img
            className="my-8 w-full md:w-1/2"
            fluid={pb.childImageSharp.fluid}
          />
          <p>
            Dieses Angebot richtet sich an Menschen, die von einer körperlichen
            oder seelischen Behinderung bedroht oder betroffen sind. Seit dem 1.
            Januar 2008 hat jeder Mensch mit Behinderung einen Rechtsanspruch
            auf ein Persönliches Budget. Dieser ist unabhängig vom Grad der
            Behinderung.
          </p>
          <p>
            Dabei ist das Persönliche Budget eine neue Form der
            Leistungserbringung. Anstelle von Sachleistungen kann der Betroffene
            Geld „das Persönliche Budget“ beantragen, um davon Leistungen zu
            bezahlen, die zur Deckung seines Hilfebedarfs notwendig sind. Sie
            können hierbei selbst entscheiden, welche Person zu welchem
            Zeitpunkt eine Leistung erbringen soll.
          </p>
          <p>
            Wurde bei ihnen eine seelische Erkrankung diagnostiziert und sie
            benötigen Hilfe um ihre bisherige Situation zu erhalten oder zu
            verbessern, biete ich ihnen für folgende Lebensbereiche Beratung und
            Unterstützung an:
          </p>
          <ul className="list-disc list-inside font-thin pb-4">
            <li>Umgang mit den Auswirkungen der Behinderung</li>
            <li>Aufnahme und Gestaltung persönlicher, sozialer Beziehungen </li>
            <li>Arbeit, arbeitsähnliche Tätigkeit, Ausbildung </li>
            <li>Selbstversorgung und Wohnen </li>
            <li>
              Tagesgestaltung, Freizeit und Teilnahme am gesellschaftlichen
              Leben{" "}
            </li>
          </ul>
          <h2 className="text-purple">Kostenträger:</h2>
          <p>
            Die Antragstellung für ein Persönliches Budget erfolgt beim Bezirk
            Mittelfranken. Dabei sind Einkommens- und Vermögensgrenzen zu
            berücksichtigen. Hierzu berate ich sie gerne und helfe ihnen beim
            Ausfüllen der Anträge.
          </p>
          <h2 className="text-purple">
            Beratung und Information erhalten sie außerdem bei:
          </h2>
          <p>
            ServiceZentrum Nürnberg - Bezirk Mittelfranken <br />
            Wallensteinstr. 61-63 <br />
            90431 Nürnberg <br />
            Tel.: 0911/600 66 98-0
          </p>
          <a
            className="text-purple"
            href="http://www.bezirk-mittelfranken.de/fileadmin/user_upload/bezirk-mittelfranken/pdf/Soziales/Persoenliches_Budget/Flyer_Perso__nliches_Buget_web.pdf"
            target="_blank"
            rel="noopener"
          >
            Persönliches Budget – ganz praktisch (InfoFlyer Bezirk
            Mittelfranken)
          </a>
        </div>
      </section>
    </>
  )
}

export default PersoenlichesBudgetPage
