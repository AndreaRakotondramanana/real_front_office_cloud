import React from 'react';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';

const images = [
  "logo.png"
];

function Header() {
  return (


    <div className="header">
      <div className='sticky-wrapper is-sticky' id='sticky-wrapper'>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <img src={images} class="navbar-brand-image img-fluid" alt="Tiya Golf Club"/>    

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-lg-auto">
                  <li class="nav-item">
                    <Link to="/">Liste Annonces</Link>
                  </li>

                  {/* <li class="nav-item">
                    <Link to="/detailAnnonceLogin">Detail Annonce Login</Link>
                  </li> */}

                  <li class="nav-item">
                    <Link to="/listeFavoris">Liste Favoris</Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/profil">Mon Profil</Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/recherche">Recherche</Link>
                  </li>

                  <li class="nav-item">
                    <Link to="/listeDiscussion2">Liste Discussions</Link>
                  </li>

                  {/* <li class="nav-item">
                    <Link to="/resultatRecherche">Resultat Recherche</Link>
                  </li> */}

                  {/* <li class="nav-item">
                    <Link to="/discussion">Discussions</Link>
                  </li> */}
                </ul>

                <div class="d-none d-lg-block ms-lg-3">
                  <Link to="/connection" class="btn custom-btn custom-border-btn" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasExample">Connection</Link>
                </div>
              </div>
          </div>
        </nav>
      </div>
      <script src="../assets/js/jquery.min.js"></script>
      <script src="../assets/js/bootstrap.bundle.min.js"></script>
      <script src="../assets/js/jquery.sticky.js"></script>
      <script src="../assets/js/click-scroll.js"></script>
      <script src="../assets/js/animated-headline.js"></script>
      <script src="../assets/js/modernizr.js"></script>
      <script src="../assets/js/custom.js"></script>
    </div>

  );
}

export default Header;
