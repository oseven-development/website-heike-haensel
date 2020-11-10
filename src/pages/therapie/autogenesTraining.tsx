import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../../components"
const ImaginativeTherapiemitInnerenBildernPage = () => {
  const { pb } = useStaticQuery(graphql`
    {
      pb: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Das_Autogene_Training.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo
        title="Autogenes Training"
        keywords="Autogenes Training"
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
          <h1 className="text-purple mt-8">Autogenes Training</h1>
          <Img
            className="my-8 w-full md:w-1/2"
            fluid={pb.childImageSharp.fluid}
          />
          <p>
            Das Autogene Training ist eine auf Autosuggestion beruhende
            Entspannungstechnik und bedeutet, dass ein Entspannungszustand
            „selbst“ erzeugt wird.
          </p>
          <p>
            Heinrich Schultz, ein deutscher Psychiater und Neurologe entwickelte
            dieses Verfahren zwischen 1910 und 1920 in Berlin.
          </p>
          <p>
            Das Autogene Training nutzt die Tatsache, dass das vegetative
            Nervensystem über die konzentrative Selbstentspannung gezielt
            beeinflusst werden kann. So wird es möglich, Stress auch willentlich
            abzubauen.
          </p>
          <p>
            Dies geschieht mittels Übungen, die eine Entspannung der Muskeln und
            Gefäße herbeiführen, sowie ausgleichend auf Atmung und Herztätigkeit
            einwirken. Die ungesunde Anspannung wird reduziert und körperliche
            und mentale Entspannung tritt ein.
          </p>
          <p>
            Die Ruhe- und Entspannungsformeln, die zum Beispiel Schwere- und
            Wärmeempfindungen auslösen, werden dabei gedanklich mitgesprochen.
            Sie helfen dabei, mehr Abstand zum Alltag zu gewinnen und
            ermöglichen eine bessere Körperwahrnehmung.
          </p>
          <p>
            Am Ende des Kurses beschäftigen wir uns mit der formelhaften
            Vorsatzbildung. Diese dient dazu, persönliche Ziele mit Hilfe einer
            Formel zu definieren und während des Autogenen Trainings zu
            suggerieren.
          </p>

          <h2 className="text-purple">Indikation des Autogenen Trainings:</h2>
          <ul className="list-disc list-inside font-thin pb-4">
            <li>bewusste und aktive körperliche und mentale Entspannung</li>
            <li>Vorbeugung stressbedingter Erkrankungen</li>
            <li>Stress- und Belastungsreduktion im Alltag</li>
            <li>Steigerung von Aufmerksamkeit und Konzentration</li>
            <li>
              Steigerung der körperlichen und geistigen Belastungsfähigkeit
            </li>
            <li>Stärkung des Selbstbewusstseins</li>
            <li>Stärkung des Herz-Kreislauf- und Gefäßsystems</li>
            <li>Stärkung des Immunsystems</li>
            <li>Steigerung von Wohlbefinden und Lebensqualität</li>
          </ul>

          <p>
            In Gruppen mit max. 6 Teilnehmern erlernen sie über 8 Wochen Stress
            zu reduzieren, sich zu entspannen und diese Methode in den Alltag zu
            integrieren.
          </p>
          <p>
            Die Kurse werden von den Krankenkassen anerkannt und als
            Präventionsmaßnahme nach § 20 SGBV bezuschusst. Genaue Informationen
            erhalten sie von ihrer Krankenkasse.
          </p>
        </div>
      </section>
    </>
  )
}

export default ImaginativeTherapiemitInnerenBildernPage
