import React from 'react';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    

    <div className="header">
      <div className='sticky-wrapper is-sticky' id='sticky-wrapper'>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
              <span class="navbar-brand-text">
                Tiya
                <small>Golf Club</small>
              </span>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-lg-auto">
                <li class="nav-item">
                  <Link to="/">Liste Annonces</Link>
                </li>

                <li class="nav-item">
                  <Link to="/detailAnnonce">Detail Annonce</Link>
                </li>

                <li class="nav-item">
                  <Link to="/detailAnnonceLogin">Detail Annonce Login</Link>
                </li>
 
                <li class="nav-item">
                  <Link to="/listeFavoris">Liste Favoris</Link>
                </li>

                <li class="nav-item">
                  <Link to="/profil">Mon Profil</Link>
                </li>

                <li class="nav-item">
                  <Link to="/profilAutre">Profil autre</Link>
                </li>

                <li class="nav-item">
                  <Link to="/recherche">Recherche</Link>
                </li>

                <li class="nav-item">
                  <Link to="/connection">Connection</Link>
                </li>

                <li class="nav-item">
                  <Link to="/listeDiscussions">Liste Discussions</Link>
                </li>

                <li class="nav-item">
                  <Link to="/resultatRecherche">Resultat Recherche</Link>
                </li>

                <li class="nav-item">
                  <Link to="/discussion">Discussions</Link>
                </li>
              </ul>

              <div class="d-none d-lg-block ms-lg-3">
                <Link to="/" class="btn custom-btn custom-border-btn" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasExample">Member Login</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

  );
}

export default Header;
