const fs = require('fs');
const path = require('path');

const REGION = (process.env.REGION || 'uk').toLowerCase();

const CONFIG = {
  uk: {
    lang: 'en-GB',
    siteOrigin: 'https://crystalharp.uk',
    ogLocale: 'en_GB',
    pageTitle: 'Crystal Harps UK – Sacred Forest® 432Hz Quartz Harps',
    metaDescription:
      'Crystal Harps UK by Sacred Forest – handcrafted 432Hz quartz harps for sound healing, meditation and wellness. Discover Stardust C#, Mystic E, Celtic Moon D, Celestial Sun D and more, shipped safely to the United Kingdom.',
    ogDescription:
      'Handcrafted 432Hz crystal harps for sound healing and meditation in the United Kingdom.',
    websiteDescription:
      'Handcrafted 432Hz Crystal Harps by Sacred Forest for sound healers and wellness practitioners in the United Kingdom.',
    heroKicker: 'Crystal Harps · United Kingdom',
    heroTitle: 'Handcrafted 432Hz Crystal Harps',
    heroSub:
      'Sacred Forest® creates premium crystal harps tuned to 432Hz – instruments for sound healers, therapists and seekers of deep inner peace in the United Kingdom and beyond.',
    regionSectionKicker: 'For UK sound healers',
    regionSectionHeading: 'Crystal harps for practitioners in the United Kingdom',
    regionSectionBody:
      'This dedicated UK microsite helps sound healers, yoga teachers and wellness studios in London, Manchester, Edinburgh and across the United Kingdom discover Sacred Forest® crystal harps tuned to 432Hz. All instruments are shipped safely from Poland to the UK with insured delivery and careful packaging.',
    faqShipQuestion: 'Do you ship to the United Kingdom?',
    faqShipAnswer:
      'Yes. Sacred Forest ships all Crystal Harps safely to the UK and worldwide using insured, reinforced packaging.',
    faqTimeQuestion: 'How long does shipping to the UK take?',
    faqTimeAnswer:
      'Most Crystal Harps shipped from Poland to the United Kingdom arrive within a few working days, depending on the courier and destination city. You receive full tracking details from Sacred Forest after dispatch.',
  },
  us: {
    lang: 'en-US',
    siteOrigin: 'https://crystalharp.us',
    ogLocale: 'en_US',
    pageTitle: 'Crystal Harps USA – Sacred Forest® 432Hz Quartz Harps',
    metaDescription:
      'Crystal Harps USA by Sacred Forest – handcrafted 432Hz quartz harps for sound healing, meditation and wellness. Discover Stardust C#, Mystic E, Celtic Moon D, Celestial Sun D and more, shipped safely to the United States.',
    ogDescription:
      'Handcrafted 432Hz crystal harps for sound healing and meditation in the United States.',
    websiteDescription:
      'Handcrafted 432Hz Crystal Harps by Sacred Forest for sound healers and wellness practitioners in the United States.',
    heroKicker: 'Crystal Harps · United States',
    heroTitle: 'Handcrafted 432Hz Crystal Harps',
    heroSub:
      'Sacred Forest® creates premium crystal harps tuned to 432Hz – instruments for sound healers, therapists and seekers of deep inner peace in the United States and worldwide.',
    regionSectionKicker: 'For US sound healers',
    regionSectionHeading: 'Crystal harps for practitioners in the United States',
    regionSectionBody:
      'This dedicated US microsite helps sound healers, yoga teachers and wellness studios in New York, Los Angeles, Austin and across the United States discover Sacred Forest® crystal harps tuned to 432Hz. All instruments are shipped safely from Europe to the US with insured delivery and careful packaging.',
    faqShipQuestion: 'Do you ship to the United States?',
    faqShipAnswer:
      'Yes. Sacred Forest ships Crystal Harps safely to the United States and worldwide using insured, reinforced packaging.',
    faqTimeQuestion: 'How long does shipping to the US take?',
    faqTimeAnswer:
      'Shipping time from Europe to the United States depends on the courier and destination state. During checkout on SacredForest.pl you can see available options and estimated delivery times.',
  },
  eu: {
    lang: 'en',
    siteOrigin: 'https://crystalharp.eu',
    ogLocale: 'en_GB',
    pageTitle: 'Crystal Harps Europe – Sacred Forest® 432Hz Quartz Harps',
    metaDescription:
      'Crystal Harps Europe by Sacred Forest – handcrafted 432Hz quartz harps for sound healing, meditation and wellness across the EU. Discover Stardust C#, Mystic E, Celtic Moon D, Celestial Sun D and more.',
    ogDescription:
      'Handcrafted 432Hz crystal harps for sound healing and meditation across Europe.',
    websiteDescription:
      'Handcrafted 432Hz Crystal Harps by Sacred Forest for sound healers and wellness practitioners across Europe.',
    heroKicker: 'Crystal Harps · Europe',
    heroTitle: 'Handcrafted 432Hz Crystal Harps',
    heroSub:
      'Sacred Forest® creates premium crystal harps tuned to 432Hz – instruments for sound healers, therapists and seekers of deep inner peace across Europe.',
    regionSectionKicker: 'For European sound healers',
    regionSectionHeading: 'Crystal harps for practitioners across Europe',
    regionSectionBody:
      'This dedicated European microsite helps sound healers, yoga teachers and wellness studios in Berlin, Paris, Barcelona and across the EU discover Sacred Forest® crystal harps tuned to 432Hz. All instruments are shipped safely from Poland within the European Union.',
    faqShipQuestion: 'Do you ship across Europe?',
    faqShipAnswer:
      'Yes. Sacred Forest ships Crystal Harps safely across the European Union using insured, reinforced packaging.',
    faqTimeQuestion: 'How long does shipping within Europe take?',
    faqTimeAnswer:
      'Most Crystal Harps shipped within the European Union arrive within a few working days, depending on the courier and destination country.',
  },
  pl: {
    lang: 'pl-PL',
    siteOrigin: 'https://krysztalowaharfa.pl',
    ogLocale: 'pl_PL',
    pageTitle: 'Harfy Kryształowe Polska – Sacred Forest® 432Hz',
    metaDescription:
      'Harpy kryształowe 432Hz Sacred Forest – ręcznie wykonywane instrumenty z kwarcu dla relaksu, medytacji i sesji dźwiękowych w Polsce.',
    ogDescription:
      'Ręcznie wykonywane harfy kryształowe 432Hz dla terapeutów dźwiękiem i praktyków medytacji w Polsce.',
    websiteDescription:
      'Ręcznie wykonywane harfy kryształowe 432Hz Sacred Forest dla terapeutów dźwiękiem i studiów jogi w Polsce.',
    heroKicker: 'Harfy Kryształowe · Polska',
    heroTitle: 'Ręcznie wykonywane harfy kryształowe 432Hz',
    heroSub:
      'Sacred Forest® tworzy premium harfy kryształowe strojone do 432 Hz – instrumenty dla terapeutów dźwiękiem, nauczycieli jogi i osób szukających głębokiego wyciszenia w Polsce.',
    regionSectionKicker: 'Dla terapeutów dźwiękiem w Polsce',
    regionSectionHeading: 'Harfy kryształowe dla praktyków w Polsce',
    regionSectionBody:
      'Ta polska mikrostorna pomaga terapeutom dźwiękiem, nauczycielom jogi i studiom wellness w Warszawie, Krakowie, Wrocławiu i całej Polsce odkryć harfy kryształowe Sacred Forest® strojonone do 432 Hz. Instrumenty wysyłane są bezpiecznie z Polski, w wzmocnionych opakowaniach.',
    faqShipQuestion: 'Czy wysyłacie harfy kryształowe do Polski?',
    faqShipAnswer:
      'Tak. Harfy kryształowe Sacred Forest wysyłane są z Polski, z pełnym ubezpieczeniem i wzmocnionym opakowaniem.',
    faqTimeQuestion: 'Ile trwa wysyłka na terenie Polski?',
    faqTimeAnswer:
      'Wysyłka na terenie Polski zwykle zajmuje kilka dni roboczych, w zależności od firmy kurierskiej i miejscowości odbiorcy.',
  },
};

if (!CONFIG[REGION]) {
  console.warn(`Unknown REGION="${REGION}", falling back to "uk".`);
}

const cfg = CONFIG[REGION] || CONFIG.uk;

const hrefLangLinks = [
  '<link rel="alternate" hreflang="en-gb" href="https://crystalharp.uk/">',
  '<link rel="alternate" hreflang="en-us" href="https://crystalharp.us/">',
  '<link rel="alternate" hreflang="en" href="https://crystalharp.eu/">',
  '<link rel="alternate" hreflang="pl-pl" href="https://krysztalowaharfa.pl/">',
  '<link rel="alternate" hreflang="x-default" href="https://crystalharp.eu/">',
].join('\n');

function build() {
  const templatePath = path.join(__dirname, 'index.template.html');
  const outPath = path.join(__dirname, 'index.html');
  const sitemapPath = path.join(__dirname, 'sitemap.xml');

  let html = fs.readFileSync(templatePath, 'utf8');

  const replacements = {
    '{{LANG}}': cfg.lang,
    '{{SITE_ORIGIN}}': cfg.siteOrigin.replace(/\/+$/, ''),
    '{{OG_LOCALE}}': cfg.ogLocale,
    '{{PAGE_TITLE}}': cfg.pageTitle,
    '{{META_DESCRIPTION}}': cfg.metaDescription,
    '{{OG_DESCRIPTION}}': cfg.ogDescription,
    '{{WEBSITE_DESCRIPTION}}': cfg.websiteDescription,
    '{{HERO_KICKER}}': cfg.heroKicker,
    '{{HERO_TITLE}}': cfg.heroTitle,
    '{{HERO_SUB}}': cfg.heroSub,
    '{{REGION_SECTION_KICKER}}': cfg.regionSectionKicker,
    '{{REGION_SECTION_HEADING}}': cfg.regionSectionHeading,
    '{{REGION_SECTION_BODY}}': cfg.regionSectionBody,
    '{{FAQ_SHIP_QUESTION}}': cfg.faqShipQuestion,
    '{{FAQ_SHIP_ANSWER}}': cfg.faqShipAnswer,
    '{{FAQ_TIME_QUESTION}}': cfg.faqTimeQuestion,
    '{{FAQ_TIME_ANSWER}}': cfg.faqTimeAnswer,
    '{{HREFLANG_LINKS}}': hrefLangLinks,
  };

  for (const [token, value] of Object.entries(replacements)) {
    html = html.split(token).join(value);
  }

  // Polish-specific text translations for krysztalowaharfa.pl
  if (REGION === 'pl') {
    const plPairs = [
      ['Go to Sacred Forest Shop', 'Przejdź do sklepu SacredForest.pl'],
      ['Explore models', 'Zobacz modele'],
      ['About Sacred Forest', 'O marce Sacred Forest'],
      ['Crystal Harps born in the forest', 'Harfy kryształowe zrodzone w lesie'],
      [
        'Every Sacred Forest® crystal harp is handcrafted in Poland with pure quartz glass, perfectly tuned to its healing 432Hz frequency.',
        'Każda harfa kryształowa Sacred Forest® powstaje ręcznie w Polsce z wysokiej jakości szkła kwarcowego, precyzyjnie strojonego do częstotliwości 432 Hz.',
      ],
      [
        'We design our instruments to feel gentle, luminous and strong – just like the forests and oceans that inspire us.',
        'Projektujemy nasze instrumenty tak, aby były delikatne, świetliste i jednocześnie mocne – podobnie jak lasy i oceany, które nas inspirują.',
      ],
      ['Collection', 'Kolekcja'],
      ['Crystal Harp models', 'Modele harf kryształowych'],
      [
        'Choose between different tunings and tonalities – from oceanic Stardust C sharp to mystical E and grounding Earth Om C sharp.',
        'Wybierz między różnymi strojeniami i charakterami brzmienia – od oceanicznej Stardust C# po mistyczne E i uziemiające Earth Om C#.',
      ],
      [
        'All models are available worldwide from our main Sacred Forest store.',
        'Wszystkie modele są dostępne w naszym głównym sklepie SacredForest.pl.',
      ],
      ['Sound Healing', 'Terapia dźwiękiem'],
      ['Why 432Hz crystal harps?', 'Dlaczego harfy kryształowe 432 Hz?'],
      ['Gentle, clear sound', 'Delikatne, przejrzyste brzmienie'],
      [
        'Crystal harps carry long, shimmering overtones that fill the room without being harsh to the ears.',
        'Harfy kryształowe niosą długie, migoczące alikwoty, które wypełniają przestrzeń bez ostrości dla uszu.',
      ],
      ['Supports deep relaxation', 'Wspierają głęboki relaks'],
      [
        '432Hz tuning is loved by many practitioners for its calming, heart-centred character.',
        'Strój 432 Hz jest ceniony przez wielu praktyków za swój uspokajający, „sercowy” charakter.',
      ],
      ['Made for therapists', 'Stworzone dla terapeutów'],
      [
        'Designed for sound healers, yoga teachers, energy workers and wellness studios that need reliable instruments.',
        'Stworzone dla terapeutów dźwiękiem, nauczycieli jogi, pracowników energii i studiów wellness, które potrzebują niezawodnych instrumentów.',
      ],
      ['FAQ', 'FAQ'],
      ['Crystal Harp – Questions & answers', 'Harfy kryształowe – pytania i odpowiedzi'],
      ['What is a Crystal Harp?', 'Czym jest harfa kryształowa?'],
      [
        'A crystal harp is a musical instrument made from high-purity quartz glass tubes, tuned to precise pitches. When played with a special mallet, it creates long, singing tones similar to crystal bowls but arranged like a harp.',
        'Harfa kryształowa to instrument muzyczny wykonany z wysokiej jakości szklanych rur kwarcowych, strojonych do precyzyjnych dźwięków. Grana specjalną pałeczką tworzy długie, śpiewne tony podobne do mis kryształowych, ułożone jednak jak struny harfy.',
      ],
      ['Do you ship to the United Kingdom?', 'Czy wysyłacie harfy kryształowe do Polski?'],
      [
        'Yes. Sacred Forest ships Crystal Harps safely from Poland to the UK and worldwide, using protective packaging and full insurance.',
        'Tak. Sacred Forest wysyła harfy kryształowe z Polski, w wzmocnionych opakowaniach i z pełnym ubezpieczeniem przesyłki.',
      ],
      ['Do I need musical experience?', 'Czy potrzebuję doświadczenia muzycznego?'],
      [
        'No. Many of our clients are therapists and healers without classical music training. Simple intuitive playing already creates a beautiful sound field.',
        'Nie. Wielu naszych klientów to terapeuci i uzdrawiacze bez klasycznego wykształcenia muzycznego. Prosta, intuicyjna gra już tworzy piękne pole dźwiękowe.',
      ],
      ['Where can I order?', 'Gdzie mogę zamówić?'],
      [
        'All orders are processed through our main shop on SacredForest.pl – this is where you can see prices, tuning options and availability.',
        'Wszystkie zamówienia realizujemy przez nasz główny sklep SacredForest.pl – tam znajdziesz aktualne ceny, dostępne strojenia i informacje o dostępności.',
      ],
      ['How long does shipping to the UK take?', 'Ile trwa wysyłka na terenie Polski?'],
      [
        'Most Crystal Harps shipped from Poland to the UK arrive within a few working days, depending on the courier and your location. After dispatch you receive tracking details so you can follow the parcel.',
        'Wysyłka harf kryształowych na terenie Polski zwykle zajmuje kilka dni roboczych, w zależności od firmy kurierskiej i miejscowości odbiorcy. Po nadaniu przesyłki otrzymasz numer śledzenia.',
      ],
      [
        'Are customs or import fees included in the price?',
        'Czy cło lub dodatkowe opłaty są wliczone w cenę?',
      ],
      [
        'Depending on current UK regulations, local customs duties or VAT may apply. During checkout on SacredForest.pl you will see available shipping options, and the courier will inform you if any additional fees are due before delivery.',
        'W zależności od aktualnych przepisów mogą pojawić się lokalne opłaty lub podatki. Podczas składania zamówienia na SacredForest.pl zobaczysz dostępne opcje wysyłki, a kurier poinformuje Cię, jeśli przed doręczeniem pojawią się dodatkowe opłaty.',
      ],
      [
        'Can I use a Crystal Harp in group sessions?',
        'Czy mogę używać harfy kryształowej podczas sesji grupowych?',
      ],
      [
        'Yes. Crystal Harps are designed for individual sessions as well as group sound baths, yoga classes and retreats, where their clear tones can fill the room without being harsh.',
        'Tak. Harfy kryształowe są stworzone zarówno do pracy indywidualnej, jak i do grupowych kąpieli dźwiękowych, zajęć jogi czy warsztatów, gdzie ich klarowne tony wypełniają przestrzeń bez ostrości.',
      ],
      ['How do I care for my Crystal Harp?', 'Jak dbać o harfę kryształową?'],
      [
        'Keep your instrument in a padded case or on a stable stand, avoid strong impacts and extreme temperatures, and clean the quartz tubes gently with a soft, dry cloth.',
        'Przechowuj instrument w miękkim pokrowcu lub na stabilnym stojaku, unikaj silnych uderzeń i skrajnych temperatur, a rurki kwarcowe czyść delikatnie miękką, suchą ściereczką.',
      ],
      [
        '© 2025 Sacred Forest® – Crystal Harps UK Microsite',
        '© 2025 Sacred Forest® – Harfy Kryształowe Polska',
      ],
    ];

    for (const [from, to] of plPairs) {
      html = html.split(from).join(to);
    }

    // Localise button labels in product cards
    html = html.split('View ').join('Zobacz ');
    html = html.split(' on SacredForest.pl →').join(' na SacredForest.pl →');
  }

  fs.writeFileSync(outPath, html, 'utf8');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${cfg.siteOrigin.replace(/\/+$/, '')}/</loc>
  </url>
</urlset>
`;
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');

  console.log(`Built index.html and sitemap.xml for REGION="${REGION}" (${cfg.siteOrigin})`);
}

build();
