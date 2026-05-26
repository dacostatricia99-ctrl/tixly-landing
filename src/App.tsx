import { Download, Apple, Ticket } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Ticket size={32} color="#6366f1" />
          Tixly
        </div>
      </header>

      <main className="hero">
        <div className="hero-badge">
          ✨ La nouvelle façon de gérer vos billets
        </div>
        
        <h1>
          Vos tickets, <br />
          <span>simplifiés.</span>
        </h1>
        
        <p>
          Téléchargez l'application Tixly pour gérer vos billets en toute simplicité. 
          Disponible dès maintenant pour Android et iOS.
        </p>

        <div className="download-buttons">
          <a href="/tixly.apk" download className="btn btn-primary">
            <Download size={24} />
            Télécharger pour Android
          </a>
          
          <a href="/tixly.ipa" download className="btn btn-secondary">
            <Apple size={24} />
            Télécharger pour iOS
          </a>
        </div>

        <div className="mockup-container">
          <div className="mockup-glow"></div>
          <div className="mockup-inner glass">
            {/* Vous pourrez remplacer ceci par une vraie image de l'application */}
            <p style={{ color: 'var(--text-muted)' }}>Aperçu de l'application Tixly</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
