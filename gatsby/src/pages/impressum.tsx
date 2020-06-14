import React from "react"
import { Link } from "gatsby"
import { Seo } from "../components"

const ImpresumPage = () => (
  <>
    <Seo title="Impressum" keywords="Impressum" description="" />
    <section className="bg-white-purple py-8">
      <div className="container mx-auto max-w-screen-sm">
        <h1 className="text-purple">Impressum</h1>
        <h2 className="text-purple">Angaben gemäß § 5 TMG</h2>
        <p>
          Praxis für Psychotherapie (HPG) <br /> Eibacher Hauptstr. 50 <br />{" "}
          90451 Nürnberg
        </p>
        <h2 className="text-purple">Vertreten durch</h2>
        <p>
          Heike Hänsel <br /> Steuernummer: 240/224/30528
        </p>
        <h2 className="text-purple">Kontakt</h2>
        <p>
          Telefon: 09 11 – 21 09 32 94 <br /> E-Mail:
          <a href="mailto:info@heikehaensel.de">info@heikehaensel.de</a>
        </p>

        {/* <h2 className="text-purple">Registereintrag</h2>
      <p>
        Eintragung im Handelsregister. <br />
        Registergericht: Nürnberg HRB <br />
        Registernummer: xxxx <br />
        Umsatzsteuer <br />
      </p> */}

        <h2 className="text-purple">Umsatzsteuer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz:{" "}
          <br />
          Umsatzsteuer entfällt, da umsatzsteuerfreie Leistungen gemäß § 4 Nr.14
          UStG
        </p>
        <h2 className="text-purple">Streitschlichtung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h2 className="text-purple">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h2 className="text-purple">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2 className="text-purple">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h1 className="text-purple">Datenschutzerklärung</h1>

        <h2 className="text-purple">Datenschutz</h2>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Website ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>

        <h2 className="text-purple">Cookies</h2>
        <p>
          Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert.
        </p>
        <p>
          Die meisten der von uns verwendeten Cookies sind so genannte
          „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
          gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis
          Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser
          beim nächsten Besuch wiederzuerkennen.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browser
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </p>

        <h2 className="text-purple">Server-Log- Files</h2>
        <p>
          Beim Aufrufen dieser Website werden durch den auf Ihrem Endgerät zum
          Einsatz kommenden Browser automatisch Informationen an den Server
          unserer Website gesendet. Diese Informationen werden temporär in einem
          sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr
          Zutun erfasst und bis zur automatisierten Löschung gespeichert:
        </p>
        <ul className="list-disc list-inside font-thin pb-4">
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Referrer URL</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>Browsertyp und Browserversion</li>
        </ul>
        <p>
          Die Möglichkeit, diese Daten auf der Rechtsgrundlage nach Art. 6 Abs.
          1 S. 1 lit. f DSGVO für Zwecke wie die Gewährleistung eines
          reibungslosen Verbindungsaufbaus der Website, die Gewährleistung einer
          komfortablen Nutzung unserer Website, die Auswertung der
          Systemsicherheit und -stabilität sowie zu weiteren administrativen
          Zwecken zu nutzen, wird derzeit von uns nicht wahrgenommen. Sollten
          wir diese Möglichkeit künftig nutzen wollen, werden wir die erhobenen
          Daten in keinem Fall dafür verwenden, Rückschlüsse auf Ihre Person zu
          ziehen.
        </p>

        <h2 className="text-purple">Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <h2 className="text-purple">SSL-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die
          Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von "http://" auf "https://" wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>
        <h2 className="text-purple">Recht auf Auskunft, Löschung, Sperrung</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
          zum Thema personenbezogene Daten können Sie sich jederzeit unter der
          im Impressum angegebenen Adresse an uns wenden.
        </p>

        <h2 className="text-purple">Widerspruch Werbe-Mails</h2>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>

        <h2 className="text-purple">SSL-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die
          Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von "http://" auf "https://" wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>

        <h2 className="text-purple">Recht auf Auskunft, Löschung, Sperrung</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
          zum Thema personenbezogene Daten können Sie sich jederzeit unter der
          im Impressum angegebenen Adresse an uns wenden.
        </p>

        <h2 className="text-purple">Widerspruch Werbe-Mails</h2>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>

        <h2 className="text-purple">Externe Dienste</h2>
        <h3 className="text-purple">Datenschutzerklärung Google Maps</h3>
        <p>
          Diese Webseite verwendet das Produkt Google Maps von Google Inc. Durch
          Nutzung dieser Webseite erklären Sie sich mit der Erfassung,
          Bearbeitung sowie Nutzung der automatisiert erhobenen Daten durch
          Google Inc, deren Vertreter sowie Dritter einverstanden. Die
          Nutzungsbedingungen von Google Maps finden sie unter
          "Nutzungsbedingungen von Google Maps".
        </p>
      </div>
    </section>
  </>
)

export default ImpresumPage
