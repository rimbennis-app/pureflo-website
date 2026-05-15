// @ts-nocheck
import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Droplet, Zap, Package, Sparkles, Mail, Menu, X } from "lucide-react";

const variants = [
  { id: "warm-white", nameEN: "Warm White", nameFR: "Blanc Chaud", hex: "#E8E2D5", descEN: "Clean, timeless, hotel-ready.", descFR: "Pur, intemporel, prêt pour l'hôtellerie.", shellColor: "#EFE9DC", shadowColor: "#D4CDB8" },
  { id: "graphite-black", nameEN: "Graphite Black", nameFR: "Noir Graphite", hex: "#2A2A2A", descEN: "Modern, architectural, premium.", descFR: "Moderne, architectural, raffiné.", shellColor: "#2F2F2F", shadowColor: "#0F0F0F" },
  { id: "brushed-metal", nameEN: "Brushed Metal", nameFR: "Métal Brossé", hex: "#B8B5AE", descEN: "Technical, refined, contemporary.", descFR: "Technique, raffiné, contemporain.", shellColor: "#C2BEB5", shadowColor: "#8A867D" },
  { id: "terracotta-clay", nameEN: "Terracotta Clay", nameFR: "Terre Cuite", hex: "#B85C3E", descEN: "Warm, spa-inspired, distinctive.", descFR: "Chaleureux, inspiré du spa, distinctif.", shellColor: "#C26544", shadowColor: "#8E4329" },
];

const t = {
  en: {
    nav: { home: "HOME", h5: "5L EDITION", h2: "2.5L EDITION", contact: "CONTACT" },
    hero: { eyebrow: "PREMIUM PORTABLE HYGIENE SYSTEM", tagline1: "Water-based hygiene,", tagline2: "portable and premium.", subtitle: "PUREFLO is a portable hygiene spray designed for premium hotels, spas, restaurants and rentals — no construction, no fixed installation.", cta1: "DISCOVER THE COLLECTION", cta2: "REQUEST A PILOT" },
    vision: { eyebrow: "THE VISION", title: "Premium outside. Simple inside.", p1t: "Premium outside", p1d: "A refined object designed to remain visible in elegant bathrooms.", p2t: "Simple inside", p2d: "A robust removable water tank and simplified architecture, built to last.", p3t: "Built to scale", p3d: "Hospitality credibility first, then a Home Edition for the everyday." },
    collection: { eyebrow: "THE COLLECTION", title: "Two editions, one philosophy.", subtitle: "Choose the format that suits your space. Each edition is available in four refined finishes.", explore: "Explore" },
    features: { eyebrow: "DESIGNED FOR THE DETAIL", title: "A considered object, in every gesture.", f1t: "Removable water tank", f1d: "A robust inner tank, easy to remove, refill and clean.", f2t: "Rechargeable pump", f2d: "Consistent water flow with discreet USB-C charging.", f3t: "Ergonomic spray wand", f3d: "Simple, effective and comfortable for everyday use.", f4t: "No visible interface", f4d: "A clean exterior without touch screens or unnecessary controls." },
    hospitality: { eyebrow: "MADE FOR MODERN HOSPITALITY", title: "Thoughtful comfort,", title2: "elevated experiences.", subtitle: "For many international guests, water-based hygiene is an essential daily habit. PUREFLO allows venues to offer that comfort instantly, without installation.", items: ["Boutique hotels & design-led guesthouses", "Premium Airbnb hosts & serviced apartments", "Restaurants with refined restrooms", "Wellness spaces, spas & private lounges", "Hospitality operators serving international guests", "Renovation-free upgrade for any bathroom"] },
    pilot: { eyebrow: "PILOT PROGRAM", title: "Bring PUREFLO to your venue.", subtitle: "Selected boutique hotels, restaurants and premium hospitality spaces are invited to host PUREFLO units for a pilot placement. Discover how a refined detail can elevate your guest experience.", cta: "REQUEST A PILOT DISCUSSION" },
    product: { back: "Back to collection", finishLabel: "FINISH", spec: "SPECIFICATIONS", specTitle: "Considered, in every dimension.", capacity: "CAPACITY", dimensions: "DIMENSIONS", power: "POWER", usbc: "USB-C Rechargeable", chargingPort: "Discreet charging port", bestFor: "Best suited for", inBox: "What's in the box", boxItems: ["1× PUREFLO unit with premium outer shell", "1× Removable water tank", "1× Spray wand", "1× Hose", "1× USB-C cable", "1× User manual"], also: "ALSO IN THE COLLECTION", discover: "Discover the", view: "VIEW THE", cta: "REQUEST A PILOT" },
    contact: { back: "Back to home", eyebrow: "GET IN TOUCH", title: "Request a pilot.", subtitle: "Tell us about your venue. We're partnering with selected boutique hotels, restaurants and premium hospitality spaces for pilot placements.", name: "NAME", venue: "VENUE / COMPANY", email: "EMAIL", message: "TELL US ABOUT YOUR VENUE", send: "SEND ENQUIRY", thanks: "Thank you.", confirmation: "Your enquiry has been received. We will be in touch shortly.", return: "RETURN HOME" },
    footer: { brand: "Premium portable hygiene system. Thoughtful comfort for modern hospitality.", collection: "COLLECTION", contact: "CONTACT", rights: "© 2026 PUREFLO. All rights reserved.", tagline: "Luxury lives in the details." },
    products: {
      hospitality: { name: "Hospitality Edition", tagline: "Generous capacity for refined hospitality spaces.", description: "Designed for hotel rooms, suites, premium Airbnb properties and wellness spaces where guest comfort defines the experience.", useCases: ["Boutique hotels & suites", "Premium Airbnb properties", "Wellness spaces & spas", "Private lounges"] },
      compact: { name: "Compact Edition", tagline: "Refined hygiene for compact spaces.", description: "A smaller footprint for restaurants, guest toilets, small WC spaces and apartments. The same premium experience, sized for intimacy.", useCases: ["Restaurant restrooms", "Guest toilets", "Small WC spaces", "Apartments & studios"] }
    }
  },
  fr: {
    nav: { home: "ACCUEIL", h5: "ÉDITION 5L", h2: "ÉDITION 2.5L", contact: "CONTACT" },
    hero: { eyebrow: "SYSTÈME D'HYGIÈNE PORTABLE PREMIUM", tagline1: "L'hygiène à l'eau,", tagline2: "en version portable et premium.", subtitle: "PUREFLO est une douchette d'hygiène portative pensée pour les hôtels, spas, restaurants et locations haut de gamme — sans travaux, sans installation fixe.", cta1: "DÉCOUVRIR LA COLLECTION", cta2: "DEMANDER UN PILOTE" },
    vision: { eyebrow: "LA VISION", title: "Premium dehors. Simple dedans.", p1t: "Premium dehors", p1d: "Un objet raffiné conçu pour rester visible dans les salles de bains élégantes.", p2t: "Simple dedans", p2d: "Un réservoir d'eau amovible robuste et une architecture simplifiée, conçus pour durer.", p3t: "Conçu pour évoluer", p3d: "D'abord la crédibilité hôtelière, puis une Édition Maison pour le quotidien." },
    collection: { eyebrow: "LA COLLECTION", title: "Deux éditions, une philosophie.", subtitle: "Choisissez le format adapté à votre espace. Chaque édition est disponible en quatre finitions raffinées.", explore: "Découvrir" },
    features: { eyebrow: "PENSÉ POUR LE DÉTAIL", title: "Un objet réfléchi, dans chaque geste.", f1t: "Réservoir amovible", f1d: "Un réservoir intérieur robuste, facile à retirer, remplir et nettoyer.", f2t: "Pompe rechargeable", f2d: "Débit d'eau constant avec recharge USB-C discrète.", f3t: "Pistolet ergonomique", f3d: "Simple, efficace et confortable pour un usage quotidien.", f4t: "Aucune interface visible", f4d: "Un extérieur épuré sans écran tactile ni commande superflue." },
    hospitality: { eyebrow: "CONÇU POUR L'HÔTELLERIE MODERNE", title: "Confort attentionné,", title2: "expériences élevées.", subtitle: "Pour de nombreux voyageurs internationaux, l'hygiène à l'eau est une habitude quotidienne essentielle. PUREFLO permet aux établissements d'offrir ce confort instantanément, sans installation.", items: ["Hôtels boutique & maisons d'hôtes design", "Hôtes Airbnb premium & appartements de service", "Restaurants aux toilettes raffinées", "Espaces bien-être, spas & lounges privés", "Opérateurs hôteliers servant une clientèle internationale", "Une mise à niveau sans rénovation pour toute salle de bain"] },
    pilot: { eyebrow: "PROGRAMME PILOTE", title: "Apportez PUREFLO à votre établissement.", subtitle: "Des hôtels boutique, restaurants et espaces hôteliers premium sélectionnés sont invités à accueillir des unités PUREFLO pour un placement pilote. Découvrez comment un détail raffiné peut sublimer votre expérience client.", cta: "DEMANDER UN ENTRETIEN PILOTE" },
    product: { back: "Retour à la collection", finishLabel: "FINITION", spec: "SPÉCIFICATIONS", specTitle: "Pensé, dans chaque dimension.", capacity: "CAPACITÉ", dimensions: "DIMENSIONS", power: "ALIMENTATION", usbc: "Rechargeable USB-C", chargingPort: "Port de charge discret", bestFor: "Idéal pour", inBox: "Contenu du coffret", boxItems: ["1× Unité PUREFLO avec coque premium", "1× Réservoir d'eau amovible", "1× Pistolet pulvérisateur", "1× Tuyau", "1× Câble USB-C", "1× Manuel d'utilisation"], also: "ÉGALEMENT DANS LA COLLECTION", discover: "Découvrir l'", view: "VOIR L'ÉDITION", cta: "DEMANDER UN PILOTE" },
    contact: { back: "Retour à l'accueil", eyebrow: "CONTACTEZ-NOUS", title: "Demander un pilote.", subtitle: "Parlez-nous de votre établissement. Nous nous associons avec des hôtels boutique, restaurants et espaces premium sélectionnés pour des placements pilotes.", name: "NOM", venue: "ÉTABLISSEMENT / SOCIÉTÉ", email: "EMAIL", message: "PARLEZ-NOUS DE VOTRE ÉTABLISSEMENT", send: "ENVOYER LA DEMANDE", thanks: "Merci.", confirmation: "Votre demande a bien été reçue. Nous reviendrons vers vous prochainement.", return: "RETOUR À L'ACCUEIL" },
    footer: { brand: "Système d'hygiène portable premium. Confort attentionné pour l'hôtellerie moderne.", collection: "COLLECTION", contact: "CONTACT", rights: "© 2026 PUREFLO. Tous droits réservés.", tagline: "Le luxe se révèle dans les détails." },
    products: {
      hospitality: { name: "Édition Hôtellerie", tagline: "Capacité généreuse pour les espaces hôteliers raffinés.", description: "Conçue pour les chambres d'hôtel, suites, propriétés Airbnb premium et espaces bien-être où le confort du client définit l'expérience.", useCases: ["Hôtels boutique & suites", "Propriétés Airbnb premium", "Espaces bien-être & spas", "Salons privés"] },
      compact: { name: "Édition Compacte", tagline: "Hygiène raffinée pour les espaces compacts.", description: "Un encombrement réduit pour les restaurants, toilettes invités, petits WC et appartements. La même expérience premium, dimensionnée pour l'intimité.", useCases: ["Toilettes de restaurant", "Toilettes invités", "Petits espaces WC", "Appartements & studios"] }
    }
  }
};

const productSpecs = {
  hospitality: { capacity: "5L", dimensions: { height: "40 cm", width: "16 cm", depth: "20 cm" } },
  compact: { capacity: "2.5L", dimensions: { height: "32 cm", width: "14 cm", depth: "17 cm" } }
};

function ProductRender({ variant }) {
  const v = variants.find(x => x.id === variant) || variants[0];
  const isDark = variant === "graphite-black";
  const wandColor = isDark ? "#3A3A3A" : v.shadowColor;
  
  return (
    <svg viewBox="0 0 300 420" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id={`shell-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={v.shadowColor} stopOpacity="0.8" />
          <stop offset="30%" stopColor={v.shellColor} />
          <stop offset="70%" stopColor={v.shellColor} />
          <stop offset="100%" stopColor={v.shadowColor} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`top-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={v.shadowColor} />
          <stop offset="100%" stopColor={v.shellColor} />
        </linearGradient>
        <radialGradient id={`floor-${variant}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="130" cy="400" rx="100" ry="10" fill={`url(#floor-${variant})`} />
      <rect x="55" y="80" width="150" height="300" rx="18" fill={`url(#shell-${variant})`} />
      <rect x="55" y="80" width="150" height="14" rx="7" fill={`url(#top-${variant})`} />
      <line x1="130" y1="340" x2="130" y2="365" stroke={v.shadowColor} strokeWidth="1" opacity="0.4" />
      <text x="130" y="355" textAnchor="middle" fontSize="7" fill={isDark ? "#888" : v.shadowColor} opacity="0.5" letterSpacing="2" fontFamily="serif">PUREFLO</text>
      <rect x="205" y="100" width="22" height="80" rx="11" fill={v.shadowColor} opacity="0.3" />
      <g>
        <rect x="208" y="105" width="16" height="55" rx="8" fill={wandColor} />
        <circle cx="216" cy="100" r="9" fill={wandColor} />
        <circle cx="216" cy="100" r="5" fill={v.shadowColor} opacity="0.6" />
      </g>
      <path d="M 216 160 Q 250 200 240 260 Q 230 310 200 330" stroke={wandColor} strokeWidth="6" fill="none" strokeLinecap="round" />
      <rect x="180" y="360" width="10" height="3" rx="1" fill={v.shadowColor} opacity="0.4" />
    </svg>
  );
}

// The four-product hero image, mimicking the reference
function FourProductsImage() {
  return (
    <div className="w-full h-full bg-stone-100">
      <img
        src="/Pureflo_Bidet_premium.png"
        alt="PUREFLO premium portable hygiene system"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function Nav({ onNav, current, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const tr = t[lang];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <button onClick={() => onNav("home")} className="font-serif text-xl tracking-[0.3em] text-stone-800">
          PUREFLO
        </button>
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wider text-stone-600">
          <button onClick={() => onNav("home")} className={`hover:text-stone-900 transition-colors ${current === "home" ? "text-stone-900" : ""}`}>{tr.nav.home}</button>
          <button onClick={() => onNav("hospitality")} className="hover:text-stone-900 transition-colors">{tr.nav.h5}</button>
          <button onClick={() => onNav("compact")} className="hover:text-stone-900 transition-colors">{tr.nav.h2}</button>
          <button onClick={() => onNav("contact")} className="hover:text-stone-900 transition-colors">{tr.nav.contact}</button>
          <div className="flex items-center border border-stone-300 rounded-full overflow-hidden">
            <button onClick={() => setLang("en")} className={`px-3 py-1 text-xs tracking-wider transition-colors ${lang === "en" ? "bg-stone-900 text-stone-50" : "text-stone-600 hover:text-stone-900"}`}>EN</button>
            <button onClick={() => setLang("fr")} className={`px-3 py-1 text-xs tracking-wider transition-colors ${lang === "fr" ? "bg-stone-900 text-stone-50" : "text-stone-600 hover:text-stone-900"}`}>FR</button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center border border-stone-300 rounded-full overflow-hidden">
            <button onClick={() => setLang("en")} className={`px-2.5 py-1 text-xs ${lang === "en" ? "bg-stone-900 text-stone-50" : "text-stone-600"}`}>EN</button>
            <button onClick={() => setLang("fr")} className={`px-2.5 py-1 text-xs ${lang === "fr" ? "bg-stone-900 text-stone-50" : "text-stone-600"}`}>FR</button>
          </div>
          <button className="text-stone-800" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm tracking-wider text-stone-700">
            <button onClick={() => { onNav("home"); setOpen(false); }} className="text-left">{tr.nav.home}</button>
            <button onClick={() => { onNav("hospitality"); setOpen(false); }} className="text-left">{tr.nav.h5}</button>
            <button onClick={() => { onNav("compact"); setOpen(false); }} className="text-left">{tr.nav.h2}</button>
            <button onClick={() => { onNav("contact"); setOpen(false); }} className="text-left">{tr.nav.contact}</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Home({ onNav, lang }) {
  const tr = t[lang];
  
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="bg-stone-50">
      {/* Hero - Full-bleed background image with overlaid text */}
      <section className="relative min-h-screen pt-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <FourProductsImage />
        </div>
        
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)" }} />
        
        {/* Content - bottom left, contained */}
        <div className="relative z-10 min-h-screen flex items-end pt-20 pb-16 md:pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl">
              <p className="text-[10px] md:text-xs tracking-[0.4em] text-stone-100 mb-5 drop-shadow-lg">{tr.hero.eyebrow}</p>
              <h1 className="font-serif text-4xl md:text-6xl text-stone-50 leading-[1.1] mb-6 drop-shadow-2xl">
                {tr.hero.tagline1}<br />{tr.hero.tagline2}
              </h1>
              <p className="text-stone-100/95 text-base md:text-lg leading-relaxed mb-8 max-w-lg drop-shadow-lg">
                {tr.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToCollection} className="group flex items-center justify-between gap-4 px-7 py-4 bg-stone-50 text-stone-900 text-sm tracking-wider hover:bg-white transition-colors shadow-xl">
                  {tr.hero.cta1}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => onNav("contact")} className="px-7 py-4 border border-stone-50 text-stone-50 text-sm tracking-wider hover:bg-stone-50 hover:text-stone-900 transition-colors backdrop-blur-sm bg-white/10">
                  {tr.hero.cta2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision pillars */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-500 mb-4 text-center">{tr.vision.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 text-center mb-20">{tr.vision.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: tr.vision.p1t, text: tr.vision.p1d },
              { title: tr.vision.p2t, text: tr.vision.p2d },
              { title: tr.vision.p3t, text: tr.vision.p3d },
            ].map((p, i) => (
              <div key={i} className="border-l-2 border-stone-200 pl-6">
                <div className="text-stone-400 font-serif text-3xl mb-4">0{i+1}</div>
                <h3 className="font-serif text-2xl text-stone-900 mb-3">{p.title}</h3>
                <p className="text-stone-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Editions */}
      <section id="collection" className="py-24 px-6 md:px-12 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-stone-500 mb-4">{tr.collection.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">{tr.collection.title}</h2>
            <p className="text-stone-600 max-w-xl mx-auto">{tr.collection.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {["hospitality", "compact"].map(key => {
              const p = tr.products[key];
              const spec = productSpecs[key];
              const defaultVariant = key === "hospitality" ? "terracotta-clay" : "warm-white";
              return (
                <button
                  key={key}
                  onClick={() => onNav(key)}
                  className="group bg-white p-8 md:p-12 text-left hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[3/4] mb-8 bg-stone-50 group-hover:bg-stone-100 transition-colors">
                    <ProductRender variant={defaultVariant} />
                  </div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs tracking-[0.3em] text-stone-500">PUREFLO {spec.capacity}</span>
                    <span className="text-stone-400 group-hover:text-stone-900 transition-colors flex items-center gap-2 text-sm">
                      {tr.collection.explore} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-stone-900 mb-3">{p.name}</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">{p.tagline}</p>
                  <div className="flex gap-2">
                    {variants.map(v => (
                      <div key={v.id} className="w-5 h-5 rounded-full ring-1 ring-stone-200" style={{ backgroundColor: v.hex }} />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Designed for the detail */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-500 mb-4 text-center">{tr.features.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 text-center mb-20">{tr.features.title}</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { icon: Droplet, title: tr.features.f1t, text: tr.features.f1d },
              { icon: Zap, title: tr.features.f2t, text: tr.features.f2d },
              { icon: Sparkles, title: tr.features.f3t, text: tr.features.f3d },
              { icon: Package, title: tr.features.f4t, text: tr.features.f4d },
            ].map((f, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-stone-300 flex items-center justify-center">
                  <f.icon size={20} className="text-stone-700" strokeWidth={1.2} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">{f.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made for hospitality */}
      <section className="py-24 px-6 md:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-400 mb-4 text-center">{tr.hospitality.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-50 text-center mb-6">{tr.hospitality.title}<br />{tr.hospitality.title2}</h2>
          <p className="text-stone-400 text-center max-w-xl mx-auto mb-16 leading-relaxed">{tr.hospitality.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {tr.hospitality.items.map((item, i) => (
              <div key={i} className="border border-stone-700 p-6 hover:border-stone-500 transition-colors">
                <Check size={16} className="text-stone-400 mb-3" />
                <p className="text-stone-200 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-32 px-6 md:px-12 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-stone-500 mb-6">{tr.pilot.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight mb-8">{tr.pilot.title}</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-10">{tr.pilot.subtitle}</p>
          <button onClick={() => onNav("contact")} className="inline-flex items-center gap-4 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wider hover:bg-stone-800 transition-colors">
            {tr.pilot.cta}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductPage({ productKey, onNav, lang }) {
  const tr = t[lang].product;
  const trProduct = t[lang].products[productKey];
  const spec = productSpecs[productKey];
  const [variant, setVariant] = useState(productKey === "hospitality" ? "terracotta-clay" : "warm-white");
  const v = variants.find(x => x.id === variant);
  const variantName = lang === "en" ? v.nameEN : v.nameFR;
  const variantDesc = lang === "en" ? v.descEN : v.descFR;
  
  return (
    <div className="bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <button onClick={() => onNav("home")} className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors">
          <ArrowLeft size={14} /> {tr.back}
        </button>
      </div>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] relative" style={{ background: `linear-gradient(135deg, ${v.shellColor}25, ${v.shadowColor}35)` }}>
            <ProductRender variant={variant} />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-stone-500 mb-4">PUREFLO {spec.capacity} · {variantName.toUpperCase()}</p>
            <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6 leading-tight">{trProduct.name}</h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">{trProduct.description}</p>
            
            <div className="mb-10">
              <p className="text-xs tracking-[0.3em] text-stone-500 mb-4">{tr.finishLabel} — {variantName.toUpperCase()}</p>
              <div className="flex gap-3 mb-3">
                {variants.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setVariant(opt.id)}
                    className={`relative w-12 h-12 rounded-full transition-all ${variant === opt.id ? "ring-2 ring-offset-2 ring-stone-900 ring-offset-stone-50" : "ring-1 ring-stone-200 hover:ring-stone-400"}`}
                    style={{ backgroundColor: opt.hex }}
                    aria-label={lang === "en" ? opt.nameEN : opt.nameFR}
                  />
                ))}
              </div>
              <p className="text-sm text-stone-500 italic">{variantDesc}</p>
            </div>

            <button onClick={() => onNav("contact")} className="group w-full sm:w-auto flex items-center justify-between gap-4 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wider hover:bg-stone-800 transition-colors">
              {tr.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-500 mb-4 text-center">{tr.spec}</p>
          <h2 className="font-serif text-4xl text-stone-900 text-center mb-16">{tr.specTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-t border-stone-200 pt-6">
              <p className="text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.capacity}</p>
              <p className="font-serif text-3xl text-stone-900">{spec.capacity}</p>
            </div>
            <div className="border-t border-stone-200 pt-6">
              <p className="text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.dimensions}</p>
              <p className="font-serif text-xl text-stone-900">H {spec.dimensions.height}</p>
              <p className="text-stone-600 text-sm">W {spec.dimensions.width} · D {spec.dimensions.depth}</p>
            </div>
            <div className="border-t border-stone-200 pt-6">
              <p className="text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.power}</p>
              <p className="font-serif text-xl text-stone-900">{tr.usbc}</p>
              <p className="text-stone-600 text-sm">{tr.chargingPort}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-6">{tr.bestFor}</h3>
              <ul className="space-y-3">
                {trProduct.useCases.map((u, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <span className="w-1 h-1 bg-stone-400 rounded-full" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-stone-900 mb-6">{tr.inBox}</h3>
              <ul className="space-y-3">
                {tr.boxItems.map((u, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <span className="w-1 h-1 bg-stone-400 rounded-full" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-stone-500 mb-4">{tr.also}</p>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">
            {tr.discover} {productKey === "hospitality" ? t[lang].products.compact.name : t[lang].products.hospitality.name}
          </h3>
          <button
            onClick={() => onNav(productKey === "hospitality" ? "compact" : "hospitality")}
            className="inline-flex items-center gap-4 px-7 py-4 border border-stone-900 text-stone-900 text-sm tracking-wider hover:bg-stone-900 hover:text-stone-50 transition-colors"
          >
            {tr.view} {productKey === "hospitality" ? "2.5L" : "5L"}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

function Contact({ onNav, lang }) {
  const tr = t[lang].contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", venue: "", email: "", message: "" });
  
  return (
    <div className="bg-stone-50 pt-20 min-h-screen">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => onNav("home")} className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-12">
            <ArrowLeft size={14} /> {tr.back}
          </button>
          
          {!submitted ? (
            <>
              <p className="text-xs tracking-[0.4em] text-stone-500 mb-4">{tr.eyebrow}</p>
              <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6 leading-tight">{tr.title}</h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-xl">{tr.subtitle}</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.name}</label>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.venue}</label>
                  <input type="text" value={form.venue} onChange={e => setForm({...form, venue: e.target.value})} className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.email}</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.3em] text-stone-500 mb-2">{tr.message}</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none" />
                </div>
                <button onClick={() => setSubmitted(true)} className="group flex items-center gap-4 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-wider hover:bg-stone-800 transition-colors mt-8">
                  {tr.send}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-8 border border-stone-300 rounded-full flex items-center justify-center">
                <Check size={24} className="text-stone-700" strokeWidth={1.2} />
              </div>
              <h1 className="font-serif text-4xl text-stone-900 mb-4">{tr.thanks}</h1>
              <p className="text-stone-600 mb-10">{tr.confirmation}</p>
              <button onClick={() => onNav("home")} className="text-sm tracking-wider text-stone-900 underline underline-offset-4">
                {tr.return}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Footer({ lang }) {
  const tr = t[lang].footer;
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-2xl tracking-[0.3em] text-stone-50 mb-4">PUREFLO</p>
            <p className="text-sm leading-relaxed">{tr.brand}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-stone-500 mb-4">{tr.collection}</p>
            <ul className="space-y-2 text-sm">
              <li>{t[lang].products.hospitality.name} · 5L</li>
              <li>{t[lang].products.compact.name} · 2.5L</li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-stone-500 mb-4">{tr.contact}</p>
            <a href="mailto:hecontactventurestudio@gmail.com" className="text-sm hover:text-stone-50 transition-colors flex items-center gap-2">
              <Mail size={14} /> contactventurestudio@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-xs tracking-wider text-stone-500 flex flex-col md:flex-row justify-between gap-4">
          <p>{tr.rights}</p>
          <p className="italic font-serif">{tr.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("en");
  
  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; font-weight: 400; }
      `}</style>
      <Nav onNav={nav} current={page} lang={lang} setLang={setLang} />
      {page === "home" && <Home onNav={nav} lang={lang} />}
      {page === "hospitality" && <ProductPage productKey="hospitality" onNav={nav} lang={lang} />}
      {page === "compact" && <ProductPage productKey="compact" onNav={nav} lang={lang} />}
      {page === "contact" && <Contact onNav={nav} lang={lang} />}
      <Footer lang={lang} />
    </div>
  );
}