import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../components"

const BiographyPage = ({ data }) => (
  <>
    <Seo
      title="Biografie"
      keywords="Biografie Heike Hänsel wer bin ich"
      description=""
    />
    <section className="bg-white-purple py-8">
      <div className="container mx-auto  max-w-screen-lg">
        <h1 className="text-purple">Biografie</h1>
        <p className="">
          Geboren wurde ich 1963 in Ebersbach/ Sachsen und lebe seit 25 Jahren
          in Nürnberg. Ich habe 3 erwachsene Kinder. Nach einer Ausbildung zur
          Krankenschwester an der Fachhochschule für Medizin in Dresden folgte
          2000 mein Abschluss an der Evangelischen Hochschule Nürnberg zur
          Diplom-Sozialpädagogin (FH).
        </p>
      </div>
    </section>

    <section className="bg-purple py-8">
      <div className="container mx-auto  max-w-screen-lg text-white flex items-center flex-wrap justify-center">
        <Img
          className="w-full md:w-2/5 mb-8 md:mb-0 max-w-xs"
          fluid={data.portrait.childImageSharp.fluid}
        />

        <ul className="w-full md:w-3/5 pl-4 md:pl-8  font-thin list-outside  list-disc text-justify">
          <li className="pb-4">
            2001 staatliche Zulassung für Psychotherapie nach dem
            Heilpraktikergesetz in Nürnberg
          </li>
          <li className="pb-4">
            1999 – 2001 begann ich meine erste Zusatzausbildung „Imaginative
            sinnorientierte Arbeit mit inneren Kräften und Bildern“ bei Prof. A.
            Pfau in Nürnberg.
          </li>
          <li className="pb-4">
            2003 - 2006 absolvierte ich eine Ausbildung zur „Systemischen Paar-
            und Familientherapeutin“ in München beim VFT - Verein der
            Familientherapie und –Beratung e.V.
          </li>
          <li className="pb-4">
            2010 – 2015 folgte die Ausbildung zum „Counselor grad. BVPPT,
            Fachrichtung Kunst- und Gestaltungstherapie“ am Institut für
            Humanistische Psychologie in Eschweiler.
          </li>
          <li className="pb-4">
            2014 Ausbildung zur „Entspannungspädagogin für Kinder und
            Erwachsene“ bei C. Gebhard in Lauf
          </li>
          <li className="pb-4">
            2014 einjährige Fortbildung „Traumatisierung“ beim Institut für
            systemische Beratung in Hanau
          </li>
        </ul>
      </div>
    </section>

    <section className="bg-white-purple py-8">
      <div className="container mx-auto  max-w-screen-lg">
        <p>
          Bevor ich 2012 meine Praxis eröffnete, arbeitete ich mehrere Jahre in
          einer psychiatrischen Einrichtung mit chronisch kranken Menschen. Hier
          traf ich auf verschiedenste Ausprägungen von seelischen Erkrankungen.
          In dieser Zeit konnte ich mir ein umfangreiches Wissen über diese
          Krankheitsbilder aneignen.
        </p>
        <p>
          Schon immer interessierte mich das psychische Erleben des Patienten
          und welche Behandlungsmöglichkeiten bestehen. Aus diesem Grund
          besuchte ich zahlreiche Fortbildungen zu psychiatrischen Erkrankungen,
          wie zum Beispiel Depressionen, Psychosen, Persönlichkeitsstörungen,
          Angst- und Zwangserkrankungen, die mir ein umfangreiches Fachwissen
          und Verständnis im Umgang mit den Patienten ermöglichen.
        </p>
        <p>
          Mitglied im Berufsverband für Beratung, Pädagogik und Psychotherapie
          e.V. (BVPPT)
        </p>
      </div>
    </section>
  </>
)

export default BiographyPage

export const biographyQuery = graphql`
  {
    portrait: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "H_Haensel_9381_c.jpg" }
    ) {
      ...image
    }
  }
`
