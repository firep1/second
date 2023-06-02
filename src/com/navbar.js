import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
<div>
<a className="btn btn-primary" href="/" role="button">Link</a>
<button className="btn btn-primary" type="submit">Button</button>
<input className="btn btn-primary" type="button" value="Input"/>
<input className="btn btn-primary" type="submit" value="Submit"/>
<input className="btn btn-primary" type="reset" value="Reset"/>
</div>
<a className="btn btn-primary" href="https://twitter.com/" role="button">Twitter</a>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Title</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.twitter.com/">Link</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/darkmode">Darkmode</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form">Form</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul> */}
        {/* </li>  */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
<p>this siis </p>
<a href="https://www.youtube.com/">Click here to go to youtube</a>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text} Dark mode</label>
      </div>
      <br />
      <div>
      <a className="btn btn-primary" href="https://google.com/" role="button">Google</a>
      </div>
</>
  )
}
Navbar.propTypes={
  title: propTypes.string

}
