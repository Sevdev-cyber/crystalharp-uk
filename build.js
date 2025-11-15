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
