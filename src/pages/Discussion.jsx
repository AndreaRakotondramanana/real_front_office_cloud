import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/styleAndrea.css';

function Discussion() {
  return (
    <div className='discussion'>
      <Header />

      <section class="events-section section-bg section-padding" id="section_4">
        <div class="container">
          <div class="row">

            <div class="col-lg-12 col-12">
              <h2 class="mb-lg-3">Chat</h2>
            </div>

            <div class="row custom-block custom-block-bg">
              <div class="col-lg-12 col-md-12 col-12">
                <div class="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
                  <strong class="text-white">Jean</strong>
                </div>
              </div>

              <div className='container'>
                <br/>

                <div className='mess1'>
                  <p>message 1 bbbbbbbbbbbbbbbbb bbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbb bbnnnnnnnnnnn nnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn</p>
                </div>

                <div className='mess2'>
                <p>message 2 bbbbbbbbbbbbbbbbb bbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbb bbnnnnnnnnnnn nnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn</p>
                </div>

                <div className='mess1'>
                  <p>message 1 bbbbbbbbbbbbbbbbb bbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbb bbnnnnnnnnnnn nnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn</p>
                </div>

              </div>
              <form action="#" method="get" class="custom-form mt-lg-4 mt-2" role="form">
                {/* <div class="input-group input-group-lg"> */}
                  <input type="text" name="email" id="email"
                    class="form-control" placeholder="Votre message" required=""/>
                    <button type="submit" class="form-control">Envoyer</button>
                {/* </div> */}
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Discussion;
