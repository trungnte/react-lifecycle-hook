import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registers">Registers</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Hooks
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/use-state">useState</NavLink>
                <NavLink className="dropdown-item" to="/use-effect">useEffect</NavLink>
                <NavLink className="dropdown-item" to="/use-call-back">useCallBack</NavLink>
                <NavLink className="dropdown-item" to="/use-memo">useMemo</NavLink>
                <NavLink className="dropdown-item" to="/use-ref">useRef</NavLink>
                <NavLink className="dropdown-item" to="/tang-giam-fs">Tăng giảm font-size</NavLink>
                <NavLink className="dropdown-item" to="/facebook-app">Facebook App</NavLink>
                {/* <NavLink className="dropdown-item" to="/shoes-shop-api">ShoesShopAPI</NavLink>

                <NavLink className="dropdown-item" to="/shoes-shop-await">ShoesShopAwait</NavLink> */}
                
              </div>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                API
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/shoes-shop-api">ShoesShopAPI</NavLink>
                <NavLink className="dropdown-item" to="/shoes-shop-await">ShoesShopAwait</NavLink>
                
              </div>
            </li>


          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    </header>
  )
}
