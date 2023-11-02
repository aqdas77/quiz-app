import React from 'react'

const Navbar = () => {
  return (
  
<nav className="navbar" style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="quiz.png" alt="Logo" width="24" height="24"  className="d-inline-block align-text-top mx-2 mt-1 "/>
      Quiz App
    </a>
   
  </div>
</nav>
  )
}

export default Navbar