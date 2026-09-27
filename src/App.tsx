import { useEffect, useState } from 'react';
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
  Globe,
} from 'lucide-react';
import SocialBar from './components/SocialBar';
import AdSlot from './AdSlot';
import logoTixly from './assets/logo-tixly.png';
import './index.css';

const ANDROID_APK_URL =
  'https://github.com/dacostatricia99-ctrl/tixly-landing/releases/download/v1.3.2/tixly.apk';

const PWA_URL = 'https://app.tixly-africa.com';

// Vitrine : les VRAIS événements publiés sur Tixly (à venir en premier), lus en
// direct avec la clé publique Supabase — mêmes règles d'accès que l'app pour un
// visiteur (événements publics et approuvés seulement).
const SUPABASE_URL = 'https://akjrvareqtopmgkbbnkm.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_su-qpa-jfma11VdLYW_OJw_KySYsZfw';

type ShowcaseEvent = {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  image_url: string | null;
};

function useShowcaseEvents() {
  const [events, setEvents] = useState<ShowcaseEvent[] | null>(null);
  useEffect(() => {
    const since = new Date(Date.now() - 12 * 3600 * 1000).toISOString();
    const url =
      `${SUPABASE_URL}/rest/v1/events?select=id,title,category,location,date,image_url` +
      `&status=eq.approved&is_private=eq.false&date=gte.${encodeURIComponent(since)}` +
      `&order=date.asc&limit=6`;
    fetch(url, { headers: { apikey: SUPABASE_PUBLISHABLE_KEY } })
      .then((r) => (r.ok ? r.json() : []))
      .then((rows) => setEvents(Array.isArray(rows) ? rows : []))
      .catch(() => setEvents([]));
  }, []);
  return events;
}

function eventUrl(e: ShowcaseEvent) {
  return `${PWA_URL}/?event=${encodeURIComponent(e.id)}`;
}

function formatWhen(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
}

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
      <a
        href={PWA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <Globe size={22} />
        Ouvrir l'app web
        <span className="btn-meta">
          <Apple size={14} /> iPhone &amp; navigateur
        </span>
      </a>
    </div>
  );
}

function App() {
  const showcase = useShowcaseEvents();
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
      <SocialBar />
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
            <p className="store-note">Gratuit sur Android, et sur iPhone depuis le navigateur</p>
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

        {/* Vitrine d'événements (style dice.fm) */}
        <section className="section showcase" id="discover">
          <div className="section-head">
            <h2>Les prochains événements sur Tixly</h2>
            <p>
              Des concerts intimes aux grands festivals, trouvez la prochaine
              soirée qui vous correspond.
            </p>
          </div>
          {showcase === null ? (
            <div className="showcase-grid" aria-busy="true">
              {[0, 1, 2].map((i) => <div key={i} className="showcase-card showcase-skeleton" />)}
            </div>
          ) : showcase.length === 0 ? (
            <p className="showcase-empty">
              Les prochains événements arrivent bientôt. Organisateur ?{' '}
              <a href={PWA_URL} target="_blank" rel="noopener noreferrer">Publiez le vôtre sur Tixly</a>.
            </p>
          ) : (
            <div className="showcase-grid">
              {showcase.map((e) => (
                <a key={e.id} className="showcase-card" href={eventUrl(e)} target="_blank" rel="noopener noreferrer">
                  <div
                    className="showcase-img"
                    style={e.image_url ? { backgroundImage: `url(${e.image_url})` } : undefined}
                    aria-hidden="true"
                  />
                  <span className="showcase-badge">{e.category}</span>
                  <div className="showcase-overlay">
                    <h3>{e.title}</h3>
                    <div className="showcase-meta">
                      <span>
                        <MapPin size={14} /> {e.location}
                      </span>
                      <span>
                        <CalendarDays size={14} /> {formatWhen(e.date)}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Emplacement publicitaire (AdSense) — rien tant que non configuré */}
        <AdSlot />

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
