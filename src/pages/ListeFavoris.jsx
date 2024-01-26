import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/styleAndrea.css';

const images = [
  "car5.jpg",
  "car6.jpg"
];

function ListeFavoris() {
  return (
    <div className='ListeFavoris'>
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

              <h1 class="text-white mb-4 pb-2">Liste favoris.</h1>

              <a href="#section_2" class="btn custom-btn smoothscroll me-3">Learn more</a>
            </div>

          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </section>

      <section class="events-section section-padding" id="section_2">
        <div class="container">
          <div class="row">

            <div class="col-lg-12 col-12">
              <h2 class="mb-lg-5 mb-4">Liste des favoris</h2>
            </div>

            <div class="col-lg-6 col-12 mb-5 mb-lg-0">
              <div class="custom-block-image-wrap">
                <a href="event-detail.html">
                  <img src={images[0]} class="custom-block-image img-fluid" alt="" />

                  <i class="custom-block-icon bi-link"></i>
                </a>

                <div class="custom-block-date-wrap">
                  <strong class="text-white">18 Feb 2023</strong>
                </div>

                <div class="custom-btn-wrap">
                  <a href="event-detail.html" class="btn custom-btn">Retirer</a>
                </div>
              </div>

              <div class="custom-block-info">
                <a href="event-detail.html" class="events-title mb-2">Ciquer ici pour voir les details</a>
                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Marque:</span>

                    <p class="mb-0">BMW</p>
                  </div>

                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Type:</span>

                    <p class="mb-0">BMW</p>
                  </div>

                <div class="border-top mt-4 pt-3">

                  <div class="d-flex flex-wrap align-items-center">
                    <span class="custom-block-span">Prix:</span>

                    <p class="mb-0">100000 Ar</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12 mb-5 mb-lg-0">
              <div class="custom-block-image-wrap">
                <a href="event-detail.html">
                  <img src={images[1]} class="custom-block-image img-fluid" alt="" />

                  <i class="custom-block-icon bi-link"></i>
                </a>

                <div class="custom-block-date-wrap">
                  <strong class="text-white">18 Feb 2023</strong>
                </div>

                <div class="custom-btn-wrap">
                  <a href="event-detail.html" class="btn custom-btn">Retirer</a>
                </div>
              </div>

              <div class="custom-block-info">
                <a href="event-detail.html" class="events-title mb-2">Ciquer ici pour voir les details</a>
                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Marque:</span>

                    <p class="mb-0">BMW</p>
                  </div>

                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Type:</span>

                    <p class="mb-0">BMW</p>
                  </div>

                <div class="border-top mt-4 pt-3">

                  <div class="d-flex flex-wrap align-items-center">
                    <span class="custom-block-span">Prix:</span>

                    <p class="mb-0">100000 Ar</p>
                  </div>
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

export default ListeFavoris;
