import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const routes = [
  { name: "News", to: "/" },
  { name: "Therapie", to: "/therapie" },
  { name: "Biografie", to: "/biografie" },
  { name: "Praxis", to: "/praxis" },
  { name: "Kontakt", to: "/kontakt" },
  { name: "Impressum", to: "/impressum" },
]

export default () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "logos" }
        relativePath: { eq: "logo-heilpraktiker-negativ.png" }
      ) {
        ...image
      }
    }
  `)

  return (
    <footer className="bg-dark-tyrian-purple py-8">
      <div className="container flex mx-auto justify-between flex text-center items-center flex-wrap">
        <div className="w-full md:w-1/3 pt-8 md:pt-0">
          <h4 className="text-white">Navigation</h4>
          <ul>
            {routes.map(({ name, to }) => (
              <li key={name} className="text-light-purple p-2">
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 pt-8 md:pt-0">
          <h4 className="text-white">Kontakt</h4>

          <Link className="text-light-purple text-center" to="/">
            Heike Hänsel
          </Link>

          <ul className="pt-4">
            <li>
              <a
                className="text-light-purple"
                href="tel:+491782463713"
                rel="noopener nofollow"
              >
                Tel: 01 78 – 24 63 713
              </a>
            </li>
            <li className="pt-4">
              <a
                className="text-light-purple"
                href="mailto:info@heikehaensel.de"
                rel="noopener nofollow"
              >
                info@heikehaensel.de
              </a>
            </li>
            <li className="pt-4">
              <a
                className="text-light-purple"
                href="https://www.google.de/maps/place/Eibacher+Hauptstra%C3%9Fe+50,+90451+N%C3%BCrnberg/@49.40419,11.0324213,17z/data=!3m1!4b1!4m2!3m1!1s0x479f512c29ab9385:0xa97742ab7dab7e3a"
                target="_blank"
                rel="noopener nofollow"
              >
                Eibacher Hauptstrasse 50 <br /> 90451 Nürnberg
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 pt-8 md:pt-0">
          <Link to="/" aria-label="Heike Hänsel Logo">
            <Img
              aria-label="Heike Hänsel Logo"
              className=" max-w-xs mx-auto "
              fluid={file.childImageSharp.fluid}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
