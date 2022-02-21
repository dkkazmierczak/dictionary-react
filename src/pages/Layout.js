import { Outlet, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="Layout">
      <Outlet />
      <nav>
        <ul className="links">
          <li className="link-item">
            <Link to="/">
              <FontAwesomeIcon className="icon" icon={faHome} />
              <div className="text-item">Home</div>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/search">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              <div className="text-item">Search</div>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/contact">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <div className="text-item">About</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Layout
