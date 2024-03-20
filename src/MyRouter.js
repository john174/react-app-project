import React from 'react';
import { Outlet, Link } from "react-router-dom";


export default function MyRouter() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid ">
          
          <Link className="navbar-brand" to="/home">MovieNestle</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link active">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link active">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}