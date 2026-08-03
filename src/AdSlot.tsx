import { useEffect } from 'react';

// Google AdSense — emplacement pub sur la landing.
// ▶ POUR ACTIVER : après validation du site par Google, crée un bloc « Display »
//   dans AdSense et colle son ID de slot ci-dessous. Vide = rien ne s'affiche
//   (aucun cadre, aucun code d'annonce sur la page).
// Le script AdSense est déjà chargé dans index.html (client ca-pub-1924823613498657).
const ADSENSE_CLIENT = 'ca-pub-1924823613498657';
const ADSENSE_SLOT = '';

export default function AdSlot() {
  useEffect(() => {
    if (!ADSENSE_SLOT) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      /* bloqueur de pub ou script indisponible : on ignore */
    }
  }, []);

  if (!ADSENSE_SLOT) return null;

  return (
    <div className="ad-slot-wrap">
      <div className="ad-slot">
        <span className="ad-slot-label">PUBLICITÉ</span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={ADSENSE_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
