import { Outlet, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import Footer from "./Footer"
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="Layout">
      <Outlet />
      <nav>
        <ul className="links">
          <li className="link-item">
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon className="icon" icon={faHome} />
              <div className="text-item">Home</div>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink activeclassname="active" to="/search">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              <div className="text-item">Search</div>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink activeclassname="active" to="/contact">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <div className="text-item">About</div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

export default Layout
