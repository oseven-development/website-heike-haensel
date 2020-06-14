import React from "react"
import { Seo } from "../components"

import Home from "../assets/icons/home.svg"
import Phone from "../assets/icons/phone.svg"
import Smartphone from "../assets/icons/smartphone.svg"
import Email from "../assets/icons/email.svg"

const ContactBox = () => (
  <div className="w-full md:w-1/2 text-white">
    <h2>Adresse</h2>
    <a
      className="text-white-purple underline"
      href="https://www.google.de/maps/place/Eibacher+Hauptstra%C3%9Fe+50,+90451+N%C3%BCrnberg/@49.40419,11.0324213,17z/data=!3m1!4b1!4m2!3m1!1s0x479f512c29ab9385:0xa97742ab7dab7e3a"
      target="_blank"
      rel="noopener"
    >
      <Home className="w-6 h-6 fill-current text-inherit inline mr-4" />
      Eibacher Hauptstrasse 50 – 90451 Nürnberg
    </a>

    <h2 className="pt-4">Telefon</h2>
    <a
      className="text-white-purple underline"
      href="tel:+491121093294"
      rel="noopener"
    >
      <Phone className="w-6 h-6 fill-current text-white inline mr-4" />
      Telefon Praxis 0911 – 21 09 32 94
    </a>
    <br />
    <br />
    <a
      className="text-white-purple underline"
      href="tel:+491782463713"
      rel="noopener"
    >
      <Smartphone className="w-6 h-6 fill-current text-white inline mr-4" />
      Mobil 0178 – 24 63 713
    </a>

    <h2 className="pt-4">E-Mail</h2>
    <a
      className="text-white-purple underline"
      href="mailto:info@heikehaensel.de"
      rel="noopener"
    >
      <Email className="w-6 h-6 fill-current text-white inline mr-4" />
      Mail an info@heikehaensel.de
    </a>
  </div>
)

const ContactPage = () => (
  <>
    <Seo
      title="Kontakt"
      keywords="Adresse Kontakt Kontaktaufnahme"
      description=""
    />
    <section className="bg-light-purple">
      <div className="max-w-screen-lg mx-auto py-0 md:py-8">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA2jqnDXdP91ripA7oXhxaEVYLE4y3zh7k
            &amp;q=Heike Hänsel - Heilpraktikerin Psychotherapie, Eibacher Hauptstraße, Nürnberg"
          allowFullScreen
        ></iframe>
      </div>
    </section>

    <section className="bg-purple">
      <div className="max-w-screen-lg mx-auto py-8 flex">
        <ContactBox></ContactBox>
      </div>
    </section>
  </>
)

export default ContactPage
