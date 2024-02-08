import React from 'react';
import './App.css';
import HomePage from './pages/ListeAnnonces';
import DetailAnnonce from './pages/DetailAnnonce';
import DetailAnnonceLogin from './pages/DetailAnnonceLogin';
import ListeFavoris from './pages/ListeFavoris';
import Profil from './pages/Profil';
import ProfilAutre from './pages/ProfilAutre';
import Recherche from './pages/Recherche';
import Connection from './pages/Connection';
import ListeDiscussions from './pages/ListeDiscussions';
import ResultatRecherche from './pages/ResultatRecherche';
import Discussion from './pages/Discussion';


// Importer les modules nécessaires depuis react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Utiliser Routes pour définir vos routes
function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailAnnonce" element={<DetailAnnonce />} />
          <Route path="/detailAnnonceLogin/:id_annonce" element={<DetailAnnonceLogin />} />
          <Route path="/listeFavoris" element={<ListeFavoris />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/profilAutre" element={<ProfilAutre />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/listeDiscussions" element={<ListeDiscussions />} />
          <Route path="/resultatRecherche" element={<ResultatRecherche />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  );
}


export default App;
