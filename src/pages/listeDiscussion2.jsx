import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';

function ListeDiscussion2() {
    return (
        <div className='ListeDiscussion2'>
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

                    <div class="col-lg-12 col-12">
                        <div class="section-bg-image-block">
                            <h2 class="mb-lg-3">Faites votre recherche</h2>

                            {/* <form action="#" method="get" class="custom-form mt-lg-4 mt-2"> */}
                            <div className='row'>
                                <div class="col-md-10 col-12">
                                    <input type="text" name="text" class="form-control" placeholder="Nom" required="" />
                                </div>
                                <div class="col-md-2 col-12">
                                    <Link to="/resultatRecherche">
                                        <button type="submit" class="form-control">
                                            <span class=" bi-search" ></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/* </form> */}

                            <div className='liste'>
                                <ul>
                                    <li><Link to="/discussion"><span class=" bi-person" ></span>Olona 1</Link></li>
                                    <li><Link to="/discussion"><span class=" bi-person" ></span>Olona 2</Link></li>
                                    <li><Link to="/discussion"><span class=" bi-person" ></span>Olona 3</Link></li>
                                </ul>

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

export default ListeDiscussion2;
