import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';

const images = [
  "she.jpg"
];

function Profil() {
  return (
    <div className='Profil'>
      <Header />

      <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">

        <div class="section-overlay"></div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#3D405B" fill-opacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
          </path>
        </svg>

        <div class="container">
          <section class="about-section section-padding" id="section_2">
            <div class="container">
              <div class="row">

                <div class="col-lg-5 col-12 me-auto mb-4 mb-lg-0">

                  <p><strong>Nom: </strong>Rakoto</p>
                  <p><strong>Prenom: </strong>Rakoto</p>
                  <p><strong>Date de naissance: </strong>Rakoto</p>
                  <p><strong>Adresse: </strong>Rakoto</p>
                  <p><strong>Numero CIN: </strong>Rakoto</p>

                </div>

                <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
                  <div class="member-block">
                    <div class="member-block-image-wrap">
                      <img src={images[0]}
                        class="member-block-image img-fluid" alt="" />

                      <ul class="social-icon">
                        <li class="social-icon-item">
                          <Link to="/" class="social-icon-link bi-twitter"></Link>
                        </li>

                        <li class="social-icon-item">
                          <Link to="/" class="social-icon-link bi-whatsapp"></Link>
                        </li>
                      </ul>
                    </div>

                    <div class="member-block-info d-flex align-items-center">
                      <h4>Hellene</h4>

                      <p class="ms-auto">Founder</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </section>

      <section class="membership-section section-padding" id="section_3">
        <div class="container">
          <div class="row">

            <div class="col-lg-12 col-12 text-center mx-auto mb-lg-5 mb-4">
              <h2>Liste de vos <span>Annonces</span></h2>
            </div>

            <div class="col-lg-12 col-12 mb-6 mb-lg-0">

              <div class="tab">
                <table class="table text-center">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Voiture</th>
                      <th>Date de vente</th>
                      <th>Etat</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start"><Link to="/">Details</Link></td>
                      <td class="text-start"><Link to="/">Supprimer</Link></td>
                    </tr>
                    <tr>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start"><Link to="/">Details</Link></td>
                      <td class="text-start"><Link to="/">Supprimer</Link></td>
                    </tr>
                    <tr>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start"><Link to="/">Details</Link></td>
                      <td class="text-start"><Link to="/">Supprimer</Link></td>
                    </tr>
                    <tr>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start">Truc</td>
                      <td class="text-start"><Link to="/">Details</Link></td>
                      <td class="text-start"><Link to="/">Supprimer</Link></td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div >
      </section >

      <Footer />
    </div >
  );
}

export default Profil;
