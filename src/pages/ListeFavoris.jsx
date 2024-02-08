import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/styleAndrea.css';
import { Link } from 'react-router-dom';
import { get } from '../axios_utils';

const images = [
  "car5.jpg",
  "car6.jpg"
];

function ListeFavoris() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get('https://voiture-production-247e.up.railway.app/api/annonce_details/listefavoris')
      .then(response => {
        if (response && response.data) {
          setData(response.data);
          console.log(response.data);
        } else {
          console.log('Response data is undefined');
        }
      })
      .catch(error => {
        console.log('Error fetching data favoris:', error);
      });
  }, []);

  return (
    <div className='ListeFavoris'>
      <Header />

      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">

        <div className="section-overlay"></div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#3D405B" fillOpacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
          </path>
        </svg>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1 className="text-white mb-4 pb-2">Liste favoris.</h1>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </section>

      <section className="events-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="mb-lg-5 mb-4">Liste des favoris</h2>
            </div>

            {data.map((item) => (
              <div key={item.id_annonce} className="col-lg-6 col-12 mb-5 mb-lg-0">
                <div className="custom-block-image-wrap">
                  <Link to="/">
                    <img src={images[0]} className="custom-block-image img-fluid" alt="" />
                    <i className="custom-block-icon bi-link"></i>
                  </Link>

                  <div className="custom-block-date-wrap">
                    <strong className="text-white">{new Date(item.date_annonce).toLocaleDateString()}</strong>
                  </div>

                  <div className="custom-btn-wrap">
                    <Link to={"/detailAnnonceLogin/"+item.id_annonce} className="btn custom-btn">Details</Link>
                  </div>
                </div>

                <div className="custom-block-info">
                  <div className="d-flex flex-wrap align-items-center mb-1">
                    <span className="custom-block-span">Marque:</span>
                    <p className="mb-0">{item.marque}</p>
                  </div>
                  <div className="d-flex flex-wrap align-items-center mb-1">
                    <span className="custom-block-span">Model:</span>
                    <p className="mb-0">{item.model}</p>
                  </div>
                  <div className="d-flex flex-wrap align-items-center mb-1">
                    <span className="custom-block-span">Categorie:</span>
                    <p className="mb-0">{item.categorie}</p>
                  </div>
                  <div className="border-top mt-4 pt-3">
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="custom-block-span">Prix:</span>
                      <p className="mb-0">{item.prix} Ar</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ListeFavoris;
