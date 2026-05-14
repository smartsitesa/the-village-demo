window.SmartSiteBotConfig = {
  businessName: 'The Village by Anne',
  title: 'The Village',
  subtitle: 'Hoe kan ons help? / How can we help?',
  botTitle: 'Village Bot',
  botSubtitle: 'Navraag-assistent / enquiry assistant',
  whatsappNumber: '27834468070',
  genericMessage: 'Hi The Village by Anne, I would like to enquire about The Village or Resa.',
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
      quickReplies: ['Waarmee kan julle help?', 'Ek wil bespreek', 'Verblyf', 'Byeenkoms of event', 'Resa beauty', 'Resa produkte', 'Ligging', 'WhatsApp Anne']
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
      quickReplies: ['What can you help with?', 'I want to enquire', 'Accommodation', 'Gathering or event', 'Resa beauty', 'Resa products', 'Location', 'WhatsApp Anne']
    }
  },
  parameters: [
    { keywords: ['hello', 'hi', 'hey', 'hallo', 'goeie more', 'good morning', 'good afternoon', 'goeie middag'], reply: { af: 'Hallo 👋 Hoe kan ek jou help met The Village of Resa? Jy kan vra oor verblyf, byeenkomste, Resa behandelings, produkte, ligging of WhatsApp navrae.', en: 'Hello 👋 How can I help with The Village or Resa? You can ask about accommodation, gatherings, Resa treatments, products, location or WhatsApp enquiries.' } },
    { keywords: ['waarmee kan julle help', 'what can you help with', 'help', 'services', 'dienste', 'options', 'opsies'], reply: { af: 'Ons kan help met The Village navrae, verblyf/guest stay, klein byeenkomste of spesiale geleenthede, rustige plattelandse besoeke, Resa skoonheid/versorging, Resa produkte, ligging en WhatsApp navrae.', en: 'We can help with The Village enquiries, guest stays, small gatherings or special occasions, peaceful countryside visits, Resa beauty/self-care, Resa products, location and WhatsApp enquiries.' } },
    { keywords: ['bespreek', 'booking', 'book', 'enquire', 'enquiry', 'navraag', 'reserve', 'availability', 'beskikbaar'], reply: { af: 'Graag. Stuur asseblief jou naam, datum, aantal mense, tipe navraag en enige spesiale versoeke. Ons kan dit dan op WhatsApp deurstuur vir opvolg.', en: 'Gladly. Please send your name, date, number of people, enquiry type and any special requests. We can then send it via WhatsApp for follow-up.' } },
    { keywords: ['verblyf', 'accommodation', 'stay', 'sleep', 'room', 'kamer', 'guest', 'overnight'], reply: { af: 'The Village wys ’n warm, netjiese verblyf-ervaring. Stuur asseblief jou datums, aantal gaste en enige behoeftes, dan kan Anne beskikbaarheid bevestig.', en: 'The Village offers a warm, neat guest-stay feel. Please send your dates, number of guests and any needs, then Anne can confirm availability.' } },
    { keywords: ['event', 'byeenkoms', 'function', 'party', 'geleentheid', 'gathering', 'celebration', 'groep'], reply: { af: 'The Village is geskik vir rustige byeenkomste, spesiale oomblikke en groep-ervarings. Stuur jou datum, aantal mense, tipe geleentheid en wat jy in gedagte het.', en: 'The Village is suited to peaceful gatherings, special moments and group experiences. Send your date, number of people, type of event and what you have in mind.' } },
    { keywords: ['resa', 'beauty', 'skoonheid', 'versorging', 'treatment', 'behandeling', 'self-care', 'selfversorging'], reply: { af: 'Resa is die sagte skoonheid- en versorgingsruimte by The Village. Jy kan vra oor behandelings, selfversorging, kreatiewe ervarings of produkte.', en: 'Resa is the gentle beauty and self-care space at The Village. You can ask about treatments, self-care, creative experiences or products.' } },
    { keywords: ['products', 'produkte', 'prys', 'price', 'catalogue', 'catalog', 'koop', 'buy'], reply: { af: 'Resa het ’n produk-afdeling en pryslys op die webwerf. Stuur watter produk of tipe produk jy soek, dan kan ons jou na die regte opsie lei.', en: 'Resa has a product section and price list on the website. Send which product or product type you want, and we can guide you to the right option.' } },
    { keywords: ['gallery', 'galery', 'photos', 'fotos', 'pictures', 'images'], reply: { af: 'Jy kan The Village en Resa se foto’s in die galerye op die webwerf sien. Vra gerus vir “Village gallery” of “Resa gallery” as jy die regte blad wil hê.', en: 'You can view The Village and Resa photos in the website galleries. Ask for “Village gallery” or “Resa gallery” if you want the right page.' } },
    { keywords: ['location', 'ligging', 'address', 'adres', 'where', 'waar', 'muldersdrift', 'map'], reply: { af: 'The Village is by 47 Riverside Road, Muldersdrift. Jy kan die kaart op die kontak-afdeling oopmaak vir aanwysings.', en: 'The Village is at 47 Riverside Road, Muldersdrift. You can open the map in the contact section for directions.' } },
    { keywords: ['phone', 'call', 'bel', 'telefoon', 'number', 'nommer'], reply: { af: 'Jy kan The Village kontak by 083 446 8070 of direk WhatsApp stuur vir ’n vinnige navraag.', en: 'You can contact The Village on 083 446 8070 or send a WhatsApp for a quick enquiry.' } },
    { keywords: ['email', 'e-pos', 'mail'], reply: { af: 'Die e-pos vir The Village is info@thevillagebyanne.co.za. Jy kan ook WhatsApp gebruik vir vinniger opvolg.', en: 'The email for The Village is info@thevillagebyanne.co.za. You can also use WhatsApp for faster follow-up.' } },
    { keywords: ['whatsapp', 'anne', 'agent', 'person', 'persoon', 'human', 'mens'], reply: { af: 'Geen probleem — ek kan jou na WhatsApp stuur. Stuur jou naam, datum/diens en kort beskrywing van wat jy nodig het.', en: 'No problem — I can route you to WhatsApp. Send your name, date/service and a short description of what you need.' } },
    { keywords: ['pool', 'swembad', 'garden', 'tuin', 'outdoor', 'buitelug', 'firepit', 'vuurput'], reply: { af: 'The Village het ’n rustige buite-atmosfeer met tuin-, swembad- en kuier-elemente. Vra gerus oor beskikbaarheid of geskiktheid vir jou besoek.', en: 'The Village has a peaceful outdoor atmosphere with garden, pool and gathering elements. Ask about availability or suitability for your visit.' } }
  ]
};
