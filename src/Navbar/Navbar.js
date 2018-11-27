import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-title">
            <h1>Schuster Art Consultancy</h1>
          </div>
          <div className="nav-menu">
            <a href="#">About</a>
            <a href="#">Our Artists</a>
            <a href="#">Connect</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
