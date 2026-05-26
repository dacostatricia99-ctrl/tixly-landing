import {
  Download,
  Apple,
  Ticket,
  QrCode,
  ScanLine,
  Compass,
  CreditCard,
  ShieldCheck,
  Bell,
  CalendarDays,
  MapPin,
  Sparkles,
} from 'lucide-react';
import logoTixly from './assets/logo-tixly.png';
import './index.css';

const ANDROID_APK_URL =
  'https://github.com/dacostatricia99-ctrl/tixly-landing/releases/download/v1.0.0/tixly.apk';

const features = [
  {
    icon: Compass,
    title: 'Découvrez des événements',
    text: "Explorez concerts, festivals et soirées près de chez vous et trouvez votre prochaine sortie.",
  },
  {
    icon: CreditCard,
    title: 'Achetez en quelques secondes',
    text: 'Réservez vos billets avec un paiement rapide et sécurisé, directement depuis votre téléphone.',
  },
  {
    icon: QrCode,
    title: 'Vos billets en QR code',
    text: 'Tous vos billets réunis au même endroit, toujours accessibles, même hors connexion.',
  },
  {
    icon: ScanLine,
    title: 'Validation par scan',
    text: "Les organisateurs scannent et valident les entrées à la porte, instantanément.",
  },
  {
    icon: ShieldCheck,
    title: 'Sécurisé & anti-fraude',
    text: 'Des billets uniques et vérifiés pour éviter les doublons et la revente frauduleuse.',
  },
  {
    icon: Bell,
    title: 'Rappels & notifications',
    text: "Ne ratez plus jamais un événement grâce aux rappels et aux mises à jour en temps réel.",
  },
];

function DownloadButtons() {
  return (
    <div className="download-buttons">
      <a href={ANDROID_APK_URL} className="btn btn-primary">
        <Download size={22} />
        Télécharger pour Android
      </a>
      <a href="/tixly.ipa" download className="btn btn-secondary">
        <Apple size={22} />
        Télécharger pour iOS
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="Tixly">
            <img src={logoTixly} alt="" className="logo-mark" />
            <span className="logo-word">Tixly</span>
          </a>
          <nav className="nav">
            <a className="nav-link" href="#features">
              Fonctionnalités
            </a>
            <a className="btn btn-primary btn-sm" href="#download">
              <Download size={18} />
              Télécharger
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              La nouvelle façon de vivre vos événements
            </div>
            <h1>
              Vos billets, <br />
              <span className="accent">simplifiés.</span>
            </h1>
            <p className="lead">
              Découvrez des événements, achetez vos billets et présentez-les en
              QR code. Tixly réunit toute votre billetterie dans une seule app.
            </p>
            <DownloadButtons />
            <p className="store-note">Gratuit • Disponible sur Android et iOS</p>
          </div>

          <div className="hero-visual">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="screen-top">
                  <div className="screen-label">MON BILLET</div>
                  <div className="screen-title">Festival Lumière 2026</div>
                </div>
                <div className="screen-body">
                  <div className="ticket">
                    <div className="ticket-head">
                      <span className="tag">BILLET ÉLECTRONIQUE</span>
                      <Ticket size={18} />
                    </div>
                    <div className="ticket-event">Accès Pass — 2 jours</div>
                    <div className="ticket-meta">
                      <span>
                        <CalendarDays size={14} /> 12–13 juin 2026
                      </span>
                      <span>
                        <MapPin size={14} /> Parc des Expositions, Paris
                      </span>
                    </div>
                    <div className="ticket-perf" />
                    <div className="ticket-qr">
                      <QrCode size={92} strokeWidth={1.4} />
                    </div>
                    <span className="ticket-code">TIXLY · 2048 · 7731</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-head">
            <h2>Tout ce qu'il faut pour vos événements</h2>
            <p>
              Que vous achetiez une place ou que vous organisiez l'événement,
              Tixly gère tout, de la découverte à la validation à l'entrée.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <div className="feature-card" key={title}>
                <div className="feature-icon">
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="cta" id="download">
        <div className="container">
          <div className="cta-inner">
            <h2>Prêt à vivre vos événements autrement&nbsp;?</h2>
            <p>Téléchargez Tixly et gardez tous vos billets dans votre poche.</p>
            <DownloadButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="logo">
            <img src={logoTixly} alt="" className="logo-mark" />
            <span className="logo-word">Tixly</span>
          </div>
          <span className="footer-copy">
            © {new Date().getFullYear()} Tixly. Tous droits réservés.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
