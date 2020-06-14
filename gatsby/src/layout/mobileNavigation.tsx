import React, { useState } from "react"
import { Link } from "gatsby"

import { routes } from "./routes"

//import Marke from "src/assets/icons/nv-marke.svg"

import CrossIcon from "../assets/icons/cross.svg"

const MobileNavigation = () => {
  const [toggle, setToggle] = useState(false)

  const toggleMobileNavigation = () => {
    const body = document.body

    body.classList.toggle("overflow-hidden")
    setToggle(!toggle)
  }

  return (
    <div className="lg:hidden" aria-hidden="true">
      {/* Overlay */}
      <div
        className={`fixed z-30 top-0 bottom-0 left-0 right-0 bg-dark-blue transition-all duration-300 ${
          toggle ? "visible opacity-75" : "invisible opacity-0"
        }`}
        onClick={toggleMobileNavigation}
        aria-hidden="true"
      />
      {/* Menu Button */}
      <button
        type="button"
        className="flex items-center text-dark-blue px-3 py-2 -mr-3"
        onClick={toggleMobileNavigation}
      >
        <span className="font-bold text-xl mt-1 text-purple">Menü</span>
        <span className="burger-icon text-purple" />
      </button>

      {/* Mobile Navigation */}
      <aside
        className={`mobile-navigation-shadow fixed z-40 top-0 bottom-0 right-0 w-full max-w-300px bg-white overflow-auto transform transition-all duration-300 ${
          toggle ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full ">
          <button
            type="button"
            className="block px-4 py-3 ml-auto"
            onClick={toggleMobileNavigation}
          >
            <CrossIcon className="w-10 h-10 fill-current text-purple" />
          </button>
          <ul className="border-t-2 border-light-grey">
            {routes.map(({ name, to }, index) => (
              <li key={index}>
                <h5 onClick={toggleMobileNavigation}>
                  <Link to={`${to}`} className="block px-4 py-3 text-purple">
                    {name}
                  </Link>
                </h5>
              </li>
            ))}
          </ul>
          <Link to="/" className="mt-auto ml-auto px-4 py-3">
            Home
          </Link>
        </nav>
      </aside>
    </div>
  )
}

export default MobileNavigation
