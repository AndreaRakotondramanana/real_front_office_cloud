import React from 'react';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    

    <div className="header">
      <div className='sticky-wrapper is-sticky' id='sticky-wrapper'>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
              <img src="images/logo.png" class="navbar-brand-image img-fluid" alt="Tiya Golf Club" />
              <span class="navbar-brand-text">
                Tiya
                <small>Golf Club</small>
              </span>
            </a>

            <div class="d-lg-none ms-auto me-3">
              <a class="btn custom-btn custom-border-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Member Login</a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-lg-auto">
                <li class="nav-item">
                  <a class="nav-link click-scroll"><Link to="/">Liste Annonces</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_2"><Link to="/detailAnnonce">Detail Annonce</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_3"><Link to="/detailAnnonceLogin">Detail Annonce Login</Link></a>
                </li>
 
                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_4"><Link to="/listeFavoris">Liste Favoris</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/profil">Mon Profil</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/profilAutre">Profil autre</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/recherche">Recherche</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/connection">Connection</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/listeDiscussions">Liste Discussions</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/resultatRecherche">Resultat Recherche</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5"><Link to="/discussion">Discussions</Link></a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>

                  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    <li><a class="dropdown-item" href="event-listing.html">Event Listing</a></li>

                    <li><a class="dropdown-item" href="event-detail.html">Event Detail</a></li>
                  </ul>
                </li>
              </ul>

              <div class="d-none d-lg-block ms-lg-3">
                <a class="btn custom-btn custom-border-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Member Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

  );
}

export default Header;
