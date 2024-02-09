import React from 'react';
import './App.css';
import HomePage from './pages/ListeAnnonces';
import DetailAnnonceLogin from './pages/DetailAnnonceLogin';
import ListeFavoris from './pages/ListeFavoris';
import Profil from './pages/Profil';
import Recherche from './pages/Recherche';
import ResultatRechercheVoiture from './pages/ResultatRechercheVoiture';
import Connection from './pages/Connection';
import ListeDiscussion2 from './pages/listeDiscussion2';
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
          <Route path="/detailAnnonceLogin/:id_voiture" element={<DetailAnnonceLogin />} />
          <Route path="/listeFavoris" element={<ListeFavoris />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/resultatRechercheVoiture" element={<ResultatRechercheVoiture />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/listeDiscussion2" element={<ListeDiscussion2 />} />
          <Route path="/resultatRecherche" element={<ResultatRecherche />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  );
}


export default App;
