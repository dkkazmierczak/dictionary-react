import { Outlet, Link } from "react-router-dom"
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="Layout">
      <nav>
        <ul className="links">
          <li className="link-item">
            <Link to="/">
              <i className="fas fa-home icon"></i>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/search">
              <i className="fas fa-search icon"></i>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/contact">
              <i className="fas fa-user-circle icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
