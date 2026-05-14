window.SmartSiteBotConfig = {
  businessName: 'The Village by Annè',
  title: 'The Village',
  subtitle: 'Hoe kan ons help? / How can we help?',
  botTitle: 'Village Bot',
  botSubtitle: 'Navraag-assistent / enquiry assistant',
  whatsappNumber: '27834468070',
  genericMessage: 'Hi The Village by Annè, I would like to enquire about The Village or Resa.',
  fallback: 'Ek is nie heeltemal seker oor daardie vraag nie. Wil jy met iemand op WhatsApp praat?',
  emailSubject: 'The Village enquiry',
  languages: {
    af: {
      label: 'AF',
      introMessage: 'Hallo 👋 Ek kan help met The Village navrae, verblyf, byeenkomste, ligging, Resa, produkte, skoonheid/versorging en WhatsApp navrae. Kies ’n opsie of tik jou vraag.',
      fallback: 'Ek is nie heeltemal seker oor daardie vraag nie. Wil jy met iemand op WhatsApp praat?',
      inputPlaceholder: 'Tik jou boodskap...',
      sendLabel: 'Stuur',
      backLabel: 'Terug na menu',
      agentLabel: 'Praat met iemand',
      agentPrompt: 'Geen probleem — wil jy met iemand op WhatsApp praat?',
      whatsappLabel: 'Praat op WhatsApp',
      quickReplies: ['Waarmee kan julle help?', 'Ek wil bespreek', 'Verblyf', 'Byeenkoms of event', 'Resa beauty', 'Resa produkte', 'Ligging', 'WhatsApp Annè']
    },
    en: {
      label: 'EN',
      introMessage: 'Hello 👋 I can help with The Village enquiries, stays, gatherings, location, Resa, products, beauty/self-care and WhatsApp enquiries. Choose an option or type your question.',
      fallback: 'I am not sure about that. Would you like to speak to someone on WhatsApp?',
      inputPlaceholder: 'Type your message...',
      sendLabel: 'Send',
      backLabel: 'Back to menu',
      agentLabel: 'Speak to someone',
      agentPrompt: 'No problem — would you like to speak to someone on WhatsApp?',
      whatsappLabel: 'Speak on WhatsApp',
      quickReplies: ['What can you help with?', 'I want to enquire', 'Accommodation', 'Gathering or event', 'Resa beauty', 'Resa products', 'Location', 'WhatsApp Annè']
    }
  },
  parameters: [
    { keywords: ['hello', 'hi', 'hey', 'hallo', 'goeie more', 'good morning', 'good afternoon', 'goeie middag'], reply: { af: 'Hallo 👋 Hoe kan ek jou help met The Village of Resa? Jy kan vra oor verblyf, byeenkomste, Resa behandelings, produkte, ligging of WhatsApp navrae.', en: 'Hello 👋 How can I help with The Village or Resa? You can ask about accommodation, gatherings, Resa treatments, products, location or WhatsApp enquiries.' } },
    { keywords: ['waarmee kan julle help', 'what can you help with', 'help', 'services', 'dienste', 'options', 'opsies'], reply: { af: 'Ons kan help met The Village navrae, verblyf/guest stay, klein byeenkomste of spesiale geleenthede, rustige plattelandse besoeke, Resa skoonheid/versorging, Resa produkte, ligging en WhatsApp navrae.', en: 'We can help with The Village enquiries, guest stays, small gatherings or special occasions, peaceful countryside visits, Resa beauty/self-care, Resa products, location and WhatsApp enquiries.' } },
    { keywords: ['bespreek', 'booking', 'book', 'enquire', 'enquiry', 'navraag', 'reserve', 'availability', 'beskikbaar'], reply: { af: 'Graag. Stuur asseblief jou naam, datum, aantal mense, tipe navraag en enige spesiale versoeke. Ons kan dit dan op WhatsApp deurstuur vir opvolg.', en: 'Gladly. Please send your name, date, number of people, enquiry type and any special requests. We can then send it via WhatsApp for follow-up.' } },
    { keywords: ['verblyf', 'accommodation', 'stay', 'sleep', 'room', 'kamer', 'guest', 'overnight'], reply: { af: 'The Village wys ’n warm, netjiese verblyf-ervaring. Stuur asseblief jou datums, aantal gaste en enige behoeftes, dan kan Annè beskikbaarheid bevestig.', en: 'The Village offers a warm, neat guest-stay feel. Please send your dates, number of guests and any needs, then Annè can confirm availability.' } },
    { keywords: ['event', 'byeenkoms', 'function', 'party', 'geleentheid', 'gathering', 'celebration', 'groep'], reply: { af: 'The Village is geskik vir rustige byeenkomste, spesiale oomblikke en groep-ervarings. Stuur jou datum, aantal mense, tipe geleentheid en wat jy in gedagte het.', en: 'The Village is suited to peaceful gatherings, special moments and group experiences. Send your date, number of people, type of event and what you have in mind.' } },
    { keywords: ['resa', 'beauty', 'skoonheid', 'versorging', 'treatment', 'behandeling', 'self-care', 'selfversorging'], reply: { af: 'Resa is die sagte skoonheid- en versorgingsruimte by The Village. Jy kan vra oor behandelings, selfversorging, kreatiewe ervarings of produkte.', en: 'Resa is the gentle beauty and self-care space at The Village. You can ask about treatments, self-care, creative experiences or products.' } },
    { keywords: ['products', 'produkte', 'prys', 'price', 'catalogue', 'catalog', 'koop', 'buy'], reply: { af: 'Resa het ’n produk-afdeling en pryslys op die webwerf. Stuur watter produk of tipe produk jy soek, dan kan ons jou na die regte opsie lei.', en: 'Resa has a product section and price list on the website. Send which product or product type you want, and we can guide you to the right option.' }, links: [{ label: 'Open Resa products', href: 'resa.html#resa-products' }] },
    { keywords: ['gallery', 'galery', 'photos', 'fotos', 'pictures', 'images'], reply: { af: 'Jy kan The Village en Resa se foto’s in die galerye op die webwerf sien. Vra gerus vir “Village gallery” of “Resa gallery” as jy die regte blad wil hê.', en: 'You can view The Village and Resa photos in the website galleries. Ask for “Village gallery” or “Resa gallery” if you want the right page.' } },
    { keywords: ['location', 'ligging', 'address', 'adres', 'where', 'waar', 'muldersdrift', 'map'], reply: { af: 'The Village is by 47 Riverside Road, Muldersdrift. Jy kan die kaart op die kontak-afdeling oopmaak vir aanwysings.', en: 'The Village is at 47 Riverside Road, Muldersdrift. You can open the map in the contact section for directions.' } },
    { keywords: ['phone', 'call', 'bel', 'telefoon', 'number', 'nommer'], reply: { af: 'Jy kan The Village kontak by 083 446 8070 of direk WhatsApp stuur vir ’n vinnige navraag.', en: 'You can contact The Village on 083 446 8070 or send a WhatsApp for a quick enquiry.' } },
    { keywords: ['email', 'e-pos', 'mail'], reply: { af: 'Die e-pos vir The Village is info@thevillagebyanne.co.za. Jy kan ook WhatsApp gebruik vir vinniger opvolg.', en: 'The email for The Village is info@thevillagebyanne.co.za. You can also use WhatsApp for faster follow-up.' } },
    { keywords: ['whatsapp', 'anne', 'agent', 'person', 'persoon', 'human', 'mens'], reply: { af: 'Geen probleem — ek kan jou na WhatsApp stuur. Stuur jou naam, datum/diens en kort beskrywing van wat jy nodig het.', en: 'No problem — I can route you to WhatsApp. Send your name, date/service and a short description of what you need.' } },
    { keywords: ['pool', 'swembad', 'garden', 'tuin', 'outdoor', 'buitelug', 'firepit', 'vuurput'], reply: { af: 'The Village het ’n rustige buite-atmosfeer met tuin-, swembad- en kuier-elemente. Vra gerus oor beskikbaarheid of geskiktheid vir jou besoek.', en: 'The Village has a peaceful outdoor atmosphere with garden, pool and gathering elements. Ask about availability or suitability for your visit.' } }
  ],
  siteAnswers: [
    { keywords: ['how did the village start', 'how did it start', 'story', 'begin', 'geskiedenis', 'hoe het the village begin', 'hoe het dit begin'], reply: { af: 'The Village se storie word op die webwerf as ’n rustige, verwelkomende ruimte vertel — geskep vir mense wat hou van skoonheid, atmosfeer en betekenisvolle oomblikke. Vir die volle persoonlike storie kan Annè dit die beste direk deel.', en: 'The site presents The Village as a peaceful, welcoming space created for people who love beauty, atmosphere and meaningful moments. For the full personal origin story, Annè can share it best directly.' }, links: [{ label: 'Open homepage', href: 'index.html#welcome' }] },
    { keywords: ['what products do you sell', 'products do you sell', 'watter produkte verkoop julle', 'produkte verkoop', 'sell products', 'buy products'], reply: { af: 'Resa verkoop/lys skoonheid- en versorgingsprodukte op die Resa produk-afdeling. Jy kan die katalogus en pryslys daar sien, en dan WhatsApp stuur vir beskikbaarheid.', en: 'Resa lists beauty and self-care products in the Resa products section. You can view the catalogue and price list there, then WhatsApp for availability.' }, links: [{ label: 'View Resa products', href: 'resa.html#resa-products' }] },
    { keywords: ['where can i book', 'where do i book', 'where can i enquire', 'waar bespreek ek', 'waar doen ek navraag'], reply: { af: 'Jy kan via WhatsApp navraag doen of die kontak-afdeling gebruik. Stuur jou datum, aantal mense en wat jy nodig het.', en: 'You can enquire via WhatsApp or use the contact section. Send your date, number of people and what you need.' }, links: [{ label: 'Go to contact', href: 'index.html#contact' }] },
    { keywords: ['show me resa', 'open resa', 'gaan na resa', 'resa page'], reply: { af: 'Hier is die Resa blad vir skoonheid, versorging, kreatiewe ervarings en produkte.', en: 'Here is the Resa page for beauty, self-care, creative experiences and products.' }, links: [{ label: 'Open Resa page', href: 'resa.html' }] },
    { keywords: ['home page', 'homepage', 'main page', 'website', 'site', 'webwerf', 'tuisblad'], reply: { af: 'Die webwerf wys The Village se hoofinligting: ’n rustige plattelandse ruimte in Muldersdrift, foto’s, verblyf-gevoel, wat aangebied word, kontakbesonderhede en skakels na Resa.', en: 'The website shows the main information for The Village: a peaceful countryside space in Muldersdrift, photos, guest-stay feel, offerings, contact details and links to Resa.' } },
    { keywords: ['about', 'oor', 'who are you', 'wie is julle', 'what is the village', 'wat is the village'], reply: { af: 'The Village is ’n rustige, verwelkomende ruimte in Muldersdrift met natuurlike skoonheid, warm atmosfeer en plek vir besoeke, byeenkomste en spesiale ervarings.', en: 'The Village is a peaceful, welcoming space in Muldersdrift with natural beauty, a warm atmosphere and room for visits, gatherings and special experiences.' } },
    { keywords: ['offer', 'offers', 'offering', 'bied', 'wat bied', 'available', 'beskikbaar'], reply: { af: 'Volgens die webwerf bied The Village ’n mooi plattelandse atmosfeer, verblyf-ervaring, byeenkomsruimte, tuin/buite-omgewing, Resa skoonheid/versorging en Resa produkte.', en: 'According to the site, The Village offers a beautiful countryside atmosphere, guest-stay experience, gathering space, garden/outdoor setting, Resa beauty/self-care and Resa products.' } },
    { keywords: ['contact', 'kontak', 'details', 'besonderhede'], reply: { af: 'Kontak The Village by Annè: WhatsApp/telefoon 083 446 8070, e-pos info@thevillagebyanne.co.za, ligging 47 Riverside Road, Muldersdrift.', en: 'Contact The Village by Annè: WhatsApp/phone 083 446 8070, email info@thevillagebyanne.co.za, location 47 Riverside Road, Muldersdrift.' } },
    { keywords: ['address', 'adres', 'directions', 'aanwysings', 'map', 'kaart', 'riverside road'], reply: { af: 'The Village is by 47 Riverside Road, Muldersdrift. Die kontak-afdeling op die webwerf het ’n Google Maps skakel vir aanwysings.', en: 'The Village is at 47 Riverside Road, Muldersdrift. The contact section on the site has a Google Maps link for directions.' } },
    { keywords: ['facebook', 'social', 'page'], reply: { af: 'Die webwerf het ’n Facebook-skakel in die kontak-afdeling waar besoekers meer kan sien en kontak kan maak.', en: 'The website has a Facebook link in the contact section where visitors can see more and get in touch.' } },
    { keywords: ['gallery page', 'galery blad', 'village gallery', 'photos of village', 'fotos van village'], reply: { af: 'Die Village galery wys foto’s van die terrein, buite-ruimtes, swembad, vuurput/sitarea en die warm atmosfeer van die plek.', en: 'The Village gallery shows photos of the grounds, outdoor spaces, pool, firepit/seating area and the warm atmosphere of the place.' }, links: [{ label: 'Open Village gallery', href: 'gallery.html' }] },
    { keywords: ['resa page', 'resa blad', 'what is resa', 'wat is resa'], reply: { af: 'Resa is deel van The Village en fokus op skoonheid, versorging, selfversorging, kreatiewe ervarings en produkte in ’n rustige omgewing.', en: 'Resa is part of The Village and focuses on beauty, care, self-care, creative experiences and products in a peaceful setting.' } },
    { keywords: ['resa gallery', 'resa galery', 'resa photos', 'resa fotos'], reply: { af: 'Die Resa galery wys die Resa ruimte, produkte en die sagte skoonheid/versorging atmosfeer by The Village.', en: 'The Resa gallery shows the Resa space, products and the gentle beauty/self-care atmosphere at The Village.' }, links: [{ label: 'Open Resa gallery', href: 'resa-gallery.html' }] },
    { keywords: ['price list', 'pricelist', 'pryslys', 'prices', 'pryse'], reply: { af: 'Die Resa blad het ’n produk- en pryslys-afdeling. Vir finale beskikbaarheid of pryse is dit die beste om op WhatsApp te bevestig.', en: 'The Resa page has a product and price-list section. For final availability or pricing, it is best to confirm on WhatsApp.' }, links: [{ label: 'Open price list', href: 'resa.html#resa-products' }] },
    { keywords: ['product catalogue', 'catalogue', 'catalog', 'produk katalogus', 'produkte katalogus'], reply: { af: 'Resa se produk-katalogus is op die Resa blad. Jy kan vra oor spesifieke produkte, of WhatsApp stuur vir hulp met keuse/beskikbaarheid.', en: 'Resa’s product catalogue is on the Resa page. You can ask about specific products, or send a WhatsApp for help with choice/availability.' } },
    { keywords: ['language', 'taal', 'afrikaans', 'english', 'engels'], reply: { af: 'Die webwerf en die bot ondersteun Afrikaans en Engels. Jy kan AF/EN in die bot kies of die taal-knoppies op die webwerf gebruik.', en: 'The website and bot support Afrikaans and English. You can choose AF/EN inside the bot or use the site language buttons.' } },
    { keywords: ['opening hours', 'hours', 'times', 'tye', 'oop', 'open'], reply: { af: 'Ek sien nie vaste openingstye op die webwerf nie. Vir tye of beskikbaarheid is dit die beste om Annè direk op WhatsApp te vra.', en: 'I do not see fixed opening hours on the website. For times or availability, it is best to ask Annè directly on WhatsApp.' } },
    { keywords: ['pets', 'pet friendly', 'troeteldier', 'dogs', 'honde'], reply: { af: 'Ek sien nie bevestigde troeteldier-inligting op die webwerf nie. Dit is beter om Annè op WhatsApp te vra voor jy bespreek.', en: 'I do not see confirmed pet information on the website. It is better to ask Annè on WhatsApp before booking.' } },
    { keywords: ['food', 'kos', 'catering', 'spyseniering', 'breakfast', 'ontbyt'], reply: { af: 'Ek sien nie bevestigde kos/spyseniering-besonderhede op die webwerf nie. Stuur gerus ’n WhatsApp met jou datum en behoefte sodat Annè kan bevestig.', en: 'I do not see confirmed food/catering details on the website. Send a WhatsApp with your date and needs so Annè can confirm.' } },
    { keywords: ['capacity', 'how many people', 'hoeveel mense', 'group size', 'aantal mense'], reply: { af: 'Die webwerf noem byeenkomste en groep-ervarings, maar ek sien nie ’n vaste kapasiteit nie. Stuur jou aantal mense op WhatsApp sodat Annè kan bevestig.', en: 'The site mentions gatherings and group experiences, but I do not see a fixed capacity. Send your number of people on WhatsApp so Annè can confirm.' } },
    { keywords: ['parking', 'parkering'], reply: { af: 'Ek sien nie spesifieke parkering-besonderhede op die webwerf nie. Vra gerus op WhatsApp vir bevestiging.', en: 'I do not see specific parking details on the website. Please ask on WhatsApp to confirm.' } },
    { keywords: ['resa.html', 'gallery.html', 'resa-gallery.html', 'pages', 'bladsye'], reply: { af: 'Die webwerf het hoofbladsye vir Home, Gallery, Resa en Resa Gallery. Die kontak-afdeling is op die hoofblad.', en: 'The website has main pages for Home, Gallery, Resa and Resa Gallery. The contact section is on the homepage.' } }
  ]
,
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'Home', href: 'index.html' },
    { label: 'Village Gallery', href: 'gallery.html' },
    { label: 'Resa', href: 'resa.html' },
    { label: 'Resa Gallery', href: 'resa-gallery.html' }
  ]

};
