import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';

function Recherche() {
  return (
    <div className='Recherche'>
      <Header />

      <section class="section-bg-image">
        <svg viewBox="0 0 1265 144" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <path fill="rgba(255, 255, 255, 1)" d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z"
            stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z"
            stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z"
            stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)"
            d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z" stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z"
            stroke-width="0"></path>
        </svg>

        <div class="container">
          <div class="row">

            <div class="col-lg-12 col-12">
              <div class="section-bg-image-block">
                <h2 class="mb-lg-3">Rechercher</h2>

                <form action="#" method="get" class="custom-form mt-lg-4 mt-2">
                  <div className='row'>
                    <div className='col-lg-4 col-4'>
                      <p>
                        Categorie
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>
                      <p>
                        Type
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>
                      <p>
                        Marque
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>
                      <p>
                        Modele
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>

                    </div>
                    <div className='col-lg-4 col-4'>
                      <p>
                        Transmission
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>
                      <p>
                        Energie
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>
                      <p>
                        Pays
                        <select name="" id="">
                          <option value="">llllllll</option>
                        </select>
                      </p>

                    </div>
                    <div className='col-lg-4 col-4'>
                      <p>
                        <input type="checkbox" name="Annee 1" id="" />Annee 1
                        <input type="checkbox" name="Annee 2" id="" />Annee 2
                      </p>
                      <p>
                        <input type="checkbox" name="Date 1" id="" />Date 1
                        <input type="checkbox" name="Date 2" id="" />Date 2
                      </p>
                      <p>
                        <input type="checkbox" name="Prix 1" id="" />Prix 1
                        <input type="checkbox" name="Prix 2" id="" />Prix 2
                      </p>

                    </div>
                  </div>
                  <button type="submit" class="form-control">
                    <Link to="/resultatRechercheVoiture">Rechercher</Link>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        <svg viewBox="0 0 1265 144" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <path fill="rgba(255, 255, 255, 1)" d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z"
            stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z"
            stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z"
            stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)"
            d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z" stroke-width="0"></path>
          <path fill="rgba(255, 255, 255, 1)" d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z"
            stroke-width="0"></path>
        </svg>
      </section>

      <Footer />
    </div>
  );
}

export default Recherche;
