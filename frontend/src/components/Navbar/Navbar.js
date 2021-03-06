import React, { Component } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'



class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <nav className="navbar p-3 mb-2 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mr-3"> <i class="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp; FASHION DU JOUR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="r">

          </div>
          <div className="navbar-buttons ml-auto">
            <Link to="/login">
              <button className="btn btn-info mr-2" type="submit"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
                        Admin Login</button>
            </Link>


          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
