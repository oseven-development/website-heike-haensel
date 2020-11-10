import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { Seo } from "../../components"

const subPages = [
  {
    to: "persoenlichesBudget",
    text: "Persönliches Budget",
  },
  {
    to: "imaginativeTherapiemitInnerenBildern",
    text: "Imaginative Therapie mit Inneren Bildern",
  },
  {
    to: "holographischeReinkarnationsTherapie",
    text: "Holographische Reinkarnations­therapie",
  },
  {
    to: "systemischePaarundFamilien­therapie",
    text: "Systemische Paar- und Familien­therapie",
  },
  {
    to: "kunstundGestaltungs­therapie",
    text: "Kunst- und Gestaltungs­therapie",
  },
  {
    to: "autogenesTraining",
    text: "Autogenes Training",
  },
]

const TherapiePage = () => {
  const { heikehaensel, spruch, background } = useStaticQuery(graphql`
    {
      heikehaensel: file(
        sourceInstanceName: { eq: "images" }
        relativePath: {
          eq: "Informationen_zu_meinen_Therapieangeboten-d07701ae.jpg"
        }
      ) {
        ...image
      }
      spruch: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Spruch_RGB.jpg" }
      ) {
        ...image
      }
      background: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "H_Haensel_9508_c.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo title="Therapie" keywords="Therapiearten Therapie" description="" />
      <section className="bg-white-purple ">
        <div className="container mx-auto max-w-screen-lg py-8">
          <h1 className="text-purple">Therapie - Wann ist sie angezeigt?</h1>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pl-0 md:pr-4">
              <Img
                className="mb-8"
                fluid={heikehaensel.childImageSharp.fluid}
              />
              <p>
                Jeder Mensch kennt unangenehme Situationen im privaten, wie auch
                im beruflichen Leben. Damit einher gehen meist unangemessene
                Emotionen, die uns das Leben schwer machen.
              </p>
              <p>
                Daraus folgenden Ängste, Widerstände, Sorgen und Schmerzen, die
                in uns ein Gefühl von Hilflosigkeit und Überforderung
                hervorrufen.
              </p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <p>
                Es scheint immer wieder aus dem Nichts heraus zu entstehen,
                obwohl man mit allen Mitteln dagegen kämpft und sich unendliche
                Mühe gibt, die Situation zu verbessern.
              </p>
              <p>
                Die Ursachen dafür liegen meist tief in uns verborgen. Ohne
                Unterstützung von außen lassen sie sich nicht ans Licht bringen.
              </p>
              <p>
                Deshalb ist es mir ein wesentliches Anliegen, Menschen in ihrer
                persönlichen Entwicklung zu unterstützen und zu begleiten.
                Hierbei ist es mir besonders wichtig, einem Menschen im Inneren
                zu begegnen, um so einen Heilungsprozess anstoßen zu können.
              </p>
              <p>
                Ich möchte ihnen ermöglichen, mit sich selbst in einen
                intensiven Kontakt zu kommen, sich selbst liebevoll und achtsam
                zuzuwenden, so dass ihre Einzigartigkeit zur Entfaltung kommen
                kann und ihr weiterer Lebensweg glücklicher verläuft.
              </p>
            </div>
          </div>

          <Img
            className="mb-8 w-full md:w-1/2 mx-auto"
            fluid={spruch.childImageSharp.fluid}
          />
        </div>
      </section>

      {/* transition-duration: 500ms; */}
      {/* transform: translate(0px, 0%); */}
      {/* <div className="bg-black h-screen w-full bg-opacity-75 fixed top-0 right-0 z-50 translate-y-full"></div> */}

      {/* <div className="transition-all duration-500 h-32 hover:h-64 hover:bg-purple">
        test
      </div> */}

      <section className="bg-purple py-8">
        <div className="container mx-auto max-w-screen-lg text-white">
          <h1 className="text-center">
            Infor&shy;mationen zu meinen Therapie&shy;angeboten
          </h1>
          <p className="text-center">
            Nachfolgend erhalten sie genauere Informationen zu den angewandten
            Therapieformen.
          </p>
        </div>
      </section>

      <BackgroundImage
        id="angebote"
        Tag="section"
        fluid={background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        className="py-8 "
      >
        <div className="flex flex-wrap mx-auto max-w-screen-lg self-stretch">
          {subPages.map(pages => (
            <div className="w-full md:w-1/2 p-4   h-40 ">
              <Link to={`/therapie/${pages.to}/`}>
                <div className=" bg-tyrian-purple hover:bg-purple h-full px-16 flex items-center ">
                  <h3 className="text-white  text-center w-full">
                    {pages.text}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </BackgroundImage>

      <section className="bg-purple py-8">
        <div className="container mx-auto max-w-screen-lg text-white">
          <h1>Termine/ Honorar</h1>
          <h2>Honorar&shy;vereinbarungen und rechtliche Bestimmungen</h2>
          <p>
            In meiner Praxis sind sie Selbstzahler. Dies bedeutet, dass sie die
            Kosten für eine Therapie selbst tragen, garantiert ihnen aber auch
            eine wirklich 100%ige Schweigepflicht. Bei einer privaten
            Kostenübernahme werden ihre Daten nicht an die Krankenkasse
            weitergeleitet. Sie erhalten selbstverständlich eine Rechnung über
            die erbrachten Leistungen.
          </p>
          <p>
            Werden die Kosten von einer privaten Zusatzversicherung oder
            Privatversicherung übernommen, erfolgt eine Diagnosestellung nach
            ICD- 10 und somit eine Weitergabe Ihrer Daten an die Krankenkasse.
            In welcher Höhe ihre Kasse Leistungen übernimmt, hängt von den
            vereinbarten Bedingungen ihres Vertrages ab. Bitte erfragen sie
            Einzelheiten vor Therapiebeginn bei ihrer zuständigen Krankenkasse.
          </p>

          <p>
            Sie können ein Erstgespräch telefonisch unter 0911 – 21 09 32 94
            oder info@heikehaensel.de vereinbaren.
          </p>
          <p>
            Gemeinsam besprechen wir die Möglichkeiten einer therapeutischen
            Begleitung.
          </p>
        </div>
      </section>
    </>
  )
}

export default TherapiePage
