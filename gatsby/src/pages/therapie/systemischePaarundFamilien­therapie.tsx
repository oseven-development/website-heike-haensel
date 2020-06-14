import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../../components"
const ImaginativeTherapiemitInnerenBildernPage = () => {
  const { pb } = useStaticQuery(graphql`
    {
      pb: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Die_Systemische_Paar-_und_Familientherapie.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo
        title="Systemische Paar- und Familien­therapie"
        keywords="Systemische Paar- und Familien­therapie"
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
            Systemische Paar- und Familien­therapie
          </h1>
          <Img
            className="my-8 w-full md:w-1/2"
            fluid={pb.childImageSharp.fluid}
          />
          <p>
            Dabei handelt es sich um ein psychotherapeutisches Verfahren, dessen
            Schwerpunkt auf dem sozialen Kontext psychischer Störungen liegt.
          </p>
          <p>
            Es wird besonderer Wert auf die Interaktion von Familienmitgliedern
            und deren sozialen Umgebung gelegt.
          </p>
          <p>
            Hierbei sind unterschiedliche Settings in Form von Einzel-, Paar-,
            Familien- und Gruppentherapie möglich.
          </p>
          <p>
            Die systemische Therapie ist an den Beziehungsprozessen der Personen
            interessiert, die an der Entstehung und Aufrechterhaltung eines
            Problems beteiligt sind und daher für Veränderungs- und
            Lösungsprozesse von Bedeutung sind. Dabei muss es sich nicht allein
            um Familienmitglieder handeln, sondern auch andere Personen oder
            Institutionen können von Belang sein. Die beteiligten Personen oder
            Institutionen müssen im Therapieprozess jedoch nicht unbedingt
            anwesend sein.&nbsp;
          </p>
          <p>
            In der Therapie wird vorrangig nach Ressourcen gesucht. In diesen
            verbergen sich meist Ansatzpunkte für die individuelle Lösung. Wenn
            es nötig und hilfreich ist, können auch Außenstehende in die
            therapeutische Kooperationsbeziehung einbezogen werden.
          </p>
          <p>
            Allen Beteiligten wird hierbei in einer wertschätzenden Haltung
            begegnet.
          </p>
        </div>
      </section>
    </>
  )
}

export default ImaginativeTherapiemitInnerenBildernPage
