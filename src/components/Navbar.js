import React, {Fragment} from 'react'


const Navbar = (props)=>{
    return(
        <Fragment>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand  title " href="#">React Task Tracker</a>
  <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="#">About</a>
      </li>
     

    </ul>
  </div>
</nav>
        <style jsx>{
            `
            
            
            `
        }

        </style>

        </Fragment>
    )

}



const HeadingStyle = 
    {color:'#eee',backgroundColor:'#555',textAlign:'center',padding:'20px'}




export default Navbar;