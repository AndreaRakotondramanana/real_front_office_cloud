import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Connection() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const apiUrl = 'https://voiture-production-247e.up.railway.app/api/log/signin';

    try {
      // const data = axios.toFormData(formData);
      const data = new FormData();
      data.append('email', formData.email); // Assuming email is the email
      data.append('password', formData.password);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: data
      };
      const response = await axios.request(config);

      if (response.data.error) {
        // Check if there's an error in the response
        console.error('Erreur lors de la requête:', response.data.error);
        setError(response.data.error);
        setLoading(false);
      } else {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token);
        navigate("/Home")
        setFormData({
          email: '',
          password: '',
        });

      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à railway:', error);
    }
  }
  return (
    <div className='Connection'>
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

              <h1 class="text-white mb-4 pb-2">Connection.</h1>
            </div>

          </div>
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

            <div class="col-lg-5 col-12 mx-auto">
              <h4 class="mb-4 pb-lg-2">Rejoignez nous !</h4>
              <form onSubmit={handleSubmit} class="custom-form membership-form shadow-lg">
                <h4 class="text-white mb-4">Connectez vous</h4>

                <div class="form-floating">
                  <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control"
                    placeholder="Email address" value={formData.email} onChange={handleChange} required="" />

                  <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                  <input type='password' class="form-control" id="Pass" name="password"
                    placeholder="Password" value={formData.password} onChange={handleChange} />

                  <label for="floatingTextarea">Password</label>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className="submit button" type='submit'>Se connecter</button>
              </form>
            </div>
          </div >
        </div >
      </section >

      <Footer />
    </div >
  );
}

export default Connection;
