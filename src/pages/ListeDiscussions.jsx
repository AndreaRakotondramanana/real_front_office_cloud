import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ListeDiscussions() {
  return (
    <div className='ListeDiscussions'>
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

            <div class="col-lg-6 col-12">
              <div class="section-bg-image-block">
                <h2 class="mb-lg-3">Faite votre recherche</h2>

                <form action="#" method="get" class="custom-form mt-lg-4 mt-2">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text bi-envelope" id="basic-addon1"></span>

                    <input type="text" name="text" id="text" pattern="[^ @]*@[^ @]*"
                      class="form-control" placeholder="Nom" required="" />
                    <button type="submit" class="form-control">Rechercher</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="section-bg-image-block">
                <span><h5>Jean Ba</h5>Last message</span>
                <hr/>

                <span><h5>Jean Ba</h5>Last message</span>
                <hr/>

                <span><h5>Jean Ba</h5>Last message</span>
                <hr/>
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

export default ListeDiscussions;
