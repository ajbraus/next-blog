// components/navbar.js

import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mb-5">
        <div className="container">
          <Link href="/"><a className="navbar-brand">Gadfly</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/"><a className="nav-link">Home</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/about"><a className="nav-link">About</a></Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/posts/new"><a className="nav-link">New Post</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
