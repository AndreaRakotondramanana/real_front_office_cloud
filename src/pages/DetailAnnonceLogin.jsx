import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link, useParams } from 'react-router-dom';

const images = [
  "car1.jpg"
];

function DetailAnnonceLogin() {
  const {id_annonce} = useParams();

  return (
    <div className='DetailAnnonceLogin'>
      <Header />

      <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">

        <div class="section-overlay"></div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#3D405B" fill-opacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
          </path>
        </svg>

        <div class="container">
          <div class="row">

            <div class="col-lg-6 col-12">

              <h1 class="text-white mb-4 pb-2">Detail annonce login.</h1>
            </div>

          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </section>

      <section class="events-section events-detail-section section-padding" id="section_2">
        <div class="container">
          <div class="row">

            <div class="col-lg-6 col-md-8 col-12 mx-auto">
              <h2 class="mb-lg-5 mb-4">Details annonce</h2>

              <div class="custom-block-image-wrap">
                <img src={images[0]} class="custom-block-image img-fluid" alt="" />
              </div>

              <div class="custom-block-info">

                <div class="events-detail-info row my-5">
                  <div class="col-lg-12 col-12">
                    <h4 class="mb-3">Details</h4>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Marque:</span>

                    <p class="mb-0">BMW</p>
                  </div>

                  <div class="col-lg-4 col-12 my-3 my-lg-0">
                    <span class="custom-block-span">Gamme:</span>

                    <p class="mb-0">Jsp</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Type:</span>

                    <p class="mb-0">Jsp</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Nombre de places:</span>

                    <p class="mb-0">7</p>
                  </div>

                  <div class="col-lg-4 col-12 my-3 my-lg-0">
                    <span class="custom-block-span">Annee:</span>

                    <p class="mb-0">2018</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Kilometrage:</span>

                    <p class="mb-0">100000</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Etat du vehicule:</span>

                    <p class="mb-0">BMW</p>
                  </div>

                  <div class="col-lg-4 col-12 my-3 my-lg-0">
                    <span class="custom-block-span">Transmission:</span>

                    <p class="mb-0">Jsp</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Energie:</span>

                    <p class="mb-0">Jsp</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Cylindre:</span>

                    <p class="mb-0">7</p>
                  </div>

                  <div class="col-lg-4 col-12 my-3 my-lg-0">
                    <span class="custom-block-span">Puissance:</span>

                    <p class="mb-0">2018</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Nombre de cylindre:</span>

                    <p class="mb-0">100000</p>
                  </div>

                  <div class="col-lg-4 col-12">
                    <span class="custom-block-span">Motricite:</span>

                    <p class="mb-0">100000</p>
                  </div>

                  <div class="col-lg-12 col-12">
                    <h4 class="mb-3">Prix: 1000000 Ar</h4>
                  </div>

                  <Link to="/" class="btn custom-btn smoothscroll me-3">Contacter</Link>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DetailAnnonceLogin;
