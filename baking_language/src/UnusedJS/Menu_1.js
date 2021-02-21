import React from 'react';




export default function Menu() {
  
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Baking Language</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/gallery">Galley</a>
      <a className="nav-item nav-link" href="/products">Products</a>
       <a className="nav-item nav-link" href="/feedbacks">Feedbacks</a>
        <a className="nav-item nav-link" href="/aboutus">About Us</a>
         <a className="nav-item nav-link" href="/login">Login</a>
          <a className="nav-item nav-link" href="/cart">My Cart</a>
      
    </div>
  </div>
</nav>
    );
}
