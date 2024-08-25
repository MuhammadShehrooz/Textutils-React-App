import React from 'react'
import propTypes from 'prop-types'
// import link from "react-router-dom" 

export default function Navbar(props) {
  

   const handleTheme = (event) =>{
    const themeEffect = event.target.value;
 
    props.togglemode(themeEffect);
    }
   


    return(
  <>
  {/* <nav className={`navbar navbar-expand-lg navbar-${props.navColor} bg-${props.NavColor} ` }> */}
  <nav className={`navbar navbar-expand-lg bg-${props.navColor}  ` }>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">{props.homeText}</a>
        </li>        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.chngmodetext}</label>
</div> */}
<select className="form-select" id="options" defaultValue={"nope"} onChange={handleTheme}>
  <option value="nope" disabled>Select Theme</option>
  <option value="dark" >Dark Theme</option>   
  <option value="blue" >Blue Theme</option>
  <option value="green">Green Theme</option>
  <option value="red" >Red Theme</option>
</select>
  </div>
</nav>
  </>

    )
  }

Navbar.propTypes = {title : propTypes.string.isRequired ,
                    homeText : propTypes.string.isRequired  ,
                    aboutText : propTypes.string.isRequired  ,
                    contactText : propTypes.string.isRequired 
}

