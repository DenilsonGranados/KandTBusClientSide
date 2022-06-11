import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import Home from '../Pages/Home';


function NavBar() {
return(
<>
<nav class="navbar navbar-expand-md">
    <div class='container-xxl'>
        <a href='.' class='navbar-brand'>
            <span class="fw-bold text-secondary">
                The Book
            </span>
        </a>


        {/* Toggle Button for mobile nav */}
        <button class="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#main-nav" aria controls='main-nav' aria-expanded='false' aria-label='Toggle navigation'>
            <span class="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div id='main-nav' class="collapse navbar-collapse justify-content-end align-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#topics" class="nav-link"> About The Book</a>
                </li>
                <li class="nav-item">
                    <a href="#reviews" class="nav-link"> Reviews</a>
                </li>
                <li class="nav-item">
                    <a href="#careers" class="nav-link"> Careers </a>
                </li>
                <li class="nav-item">
                    <a href="#aboutus" class="nav-link"> About Us </a>
                </li>
            </ul>
        </div>

    </div>
</nav>
</>  
)
}

export default NavBar;