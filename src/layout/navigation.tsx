/** @format */

// React and Libarys
import React from "react"
import { Link } from "gatsby"
import { routes } from "./routes"

export default () => (
  <nav className="items-center hidden lg:flex">
    <ul className="flex flex-column">
      {routes.map(({ name, to }) => (
        <li key={name}>
          <Link className="ml-4 text-purple" to={to}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
