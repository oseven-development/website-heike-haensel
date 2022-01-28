import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../../components"
const HolographischeReinkarnationsTherapiePage = () => {
  const { pb } = useStaticQuery(graphql`
    {
      pb: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "nature-3306655-69500739.jpg" }
      ) {
        ...image
      }
    }
  `)
  return (
    <>
      <Seo
        title="Holographische Reinkarnations­therapie"
        keywords="Holographische Reinkarnations­therapie"
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
            Holographische Reinkarnations­therapie
          </h1>
          <Img
            className="my-8 w-full md:w-1/2"
            fluid={pb.childImageSharp.fluid}
          />
          <p>
            Bei der Holographischen Reinkarnationstherapie handelt es sich um
            eine Methode, die es ermöglicht, unverarbeitete Traumata aus der
            Vergangenheit ins Bewusstsein zu holen, zu bearbeiten und diese in
            die Persönlichkeit zu integrieren. Holographisch bedeutet hier, dass
            in einem Teil des Ganzen die komplette Information über das Ganze
            enthalten ist. Die Therapie basiert auf der Annahme, dass jedes
            Symptom auf ein oder mehrere traumatische Erfahrungen im jetzigen
            oder auch vorhergegangenen Leben zurückzuführen sind. Hierbei geht
            die Reinkarnationstherapie davon aus, dass der Mensch nicht nur
            einmal geboren wird.
          </p>
          <p>
            Den Vorrang hat hierbei immer die Bearbeitung der aktuellen
            biographischen Ebene.
          </p>
          <p>
            Da sich unbearbeitete Traumata, egal woher sie stammen, so lange
            wiederholen bis diese von uns bearbeitet werden, kann eine wirkliche
            Heilung der tiefen Verletzungen erst dann erfolgen. Dies bedeutet,
            Unerledigtes wiederholt sich so lange bis es von uns bearbeitet und
            beendet wird. In unserem Seelengedächtnis sind alle Erinnerungen
            gespeichert, die wir jemals gemacht haben. Durch Entspanntheit
            gelangen wir in Trance und erinnern uns an alles was wir bisher
            erlebt haben. In einer Sitzung gehen wir bis zum
            Entstehungszeitpunkt des Traumas zurück und bearbeiten und
            durchleben dort die Situation auf körperlicher, gedanklicher und
            gefühlsmäßiger Ebene. Erst das Zusammenspiel dieser drei Ebenen
            ermöglicht uns eine dauerhafte und wirkliche Heilung. Dadurch kommt
            es zu einer Änderung der in den Zellen gespeicherten Information,
            die sich auf das Wohlbefinden und die Gesundheit des Körpers und der
            Seele auswirken.
          </p>
          <p>
            Die Holographische Reinkarnationstherapie wurde von den
            Niederländern Tineke Noordegraaf und Rob Bontenbal entwickelt.
          </p>
          <p>
            Reinkarnationsarbeit ist unabhängig von jeglicher Glaubensrichtung.
            Um zu profitieren ist es nicht zwingend notwendig an die Möglichkeit
            der Reinkarnation zu glauben, es reicht, wenn wir wahrnehmen, dass
            Inhalte aus dem Unterbewusstsein an die Oberfläche kommen und mit
            den Problemen zu tun haben, die uns in die Therapie geführt haben.
          </p>
          <h2 className="text-purple"> Was ist das Ziel?</h2>
          <ul className="list-disc list-inside font-thin pb-4">
            <li>Beseitigung Symptomatik</li>
            <li>Einsicht in Ursachen und Entstehung</li>
            <li>Integration der Persönlichkeitsanteile</li>
            <li>Verbesserung Lebensqualität</li>
          </ul>
          <h2 className="text-purple">
            Welche Symptome lassen sich behandeln?
          </h2>
          <ul className="list-disc list-inside font-thin pb-4">
            <li>Psychosomatische Erkrankungen </li>
            <li>Chronische Erkrankungen </li>
            <li>
              Psychische Erkrankungen (Depressionen, Ängste, Zwänge, Phobien
              etc.)
            </li>
            <li>Essstörungen </li>
            <li>Missbrauch und Gewalt </li>
            <li>Lebenskrisen </li>
            <li>Partnerschaftsprobleme </li>
          </ul>
          <h2 className="text-purple">Mein Angebot</h2>
          <p>
            Meine Ausbildung zur Holographischen Reinkarnationstherapie habe ich von 2016 - 2020 bei Frau Dipl. Psych. Ulrike Vinmann absolviert. 
            Eine Sitzung dauert 2 Stunden und die Kosten hierfür betragen 100 € pro Stunde.
          </p>
          <p>
            Die erste Einheit beinhaltet ein ausführliches Vorgespräch, in dem ich Ihre Lebenssituation näher kennenlerne und im Abschluss wir besprechen wir das therapeutische Vorgehen. 
            Habe ich Ihr Interesse geweckt, dann vereinbaren Sie einen Termin. 
            Ich freue mich auf Ihre Mail oder Ihren Anruf.
          </p>
          <p>Veröffentlichungen von Frau Dipl.-Psych. Ulrike Vinmann</p>
          <a
            className="text-purple"
            title="Reinkarnationstherapie"
            href="https://reinkarnationstherapeutin.de/buecher_artikel_ulrike_vinmann_86.htm"
            target="_blank"
            rel="noopener"
          >
            Literaturhinweis
          </a>
        </div>
      </section>
    </>
  )
}

export default HolographischeReinkarnationsTherapiePage
