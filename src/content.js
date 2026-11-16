/* ------------------------------------------------------------------ */
/*  All visible text, in English (en) and Sinhala (si).               */
/*  Edit wording here; the components read from this file.            */
/*  Note: Sinhala conjuncts (්‍ය, ්‍ර, ර්‍) use a zero-width joiner,    */
/*  written as ‍ so it survives copy/paste.                      */
/* ------------------------------------------------------------------ */

export const RATES = { night: 2500, day: 2000, short: 1500 }

const fmtLKR = (n) => n.toLocaleString('en-LK')

const SI_MONTHS = [
  'ජනවාරි', 'පෙබරවාරි', 'මාර්\u200dතු', 'අප්\u200dරේල්', 'මැයි', 'ජූනි',
  'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්',
]
const SI_DAYS = ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්\u200dරහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා']

// Dates are formatted here rather than with the browser's locale data,
// because many phones/browsers don't ship Sinhala date names.
const isoToDate = (iso) => new Date(`${iso}T00:00:00`)

export const content = {
  en: {
    langName: 'English',
    formatDate: (iso) =>
      isoToDate(iso).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
    switchTo: 'සිංහල',
    switchToShort: 'සිං',
    switchToLabel: 'සිංහලට මාරු වන්න (Switch to Sinhala)',
    currency: (n) => `LKR ${fmtLKR(n)}`,

    logoSub: 'Kosnathota · Godakawela',
    nav: { why: 'Why Us', rooms: 'Rooms & Rates', gallery: 'Photos', faq: 'FAQ', contact: 'Contact' },
    bookNow: 'Book Now',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',

    hero: {
      badge: 'Guest House · Kosnathota',
      titleLead: 'A Peaceful ',
      titleTail: 'Getaway &',
      titleLine2: 'Highly Secure Stay',
      sub: 'Kosnathota, Godakawela | Your Safe and Relaxing River-side Retreat',
      bookWA: 'Book via WhatsApp',
      call: 'Call 071 630 4642',
      badges: ['On-site Security · CCTV coming soon', 'Spacious Secure Parking', 'Peaceful River-side Nature'],
      waMsg: 'Hello Tranquil Rest! I would like to make a booking.',
    },

    why: {
      eyebrow: 'Why Tranquil Rest',
      title: 'Peace of mind, by design',
      subtitle:
        "Away from congested Godakawela town, we offer what other stays don't: real security for you and your vehicle, and genuine calm.",
      corporate: {
        tag: 'For Corporate & Sales Reps',
        title: 'Rest easy, your vehicle is safe.',
        highlight: 'Spacious Concrete Parking for Large Lorries, with Our Team On Site',
        points: [
          'Our family team on site, with CCTV coming soon',
          'Concrete interlock parking for lorries & distribution vehicles',
          'Flexible day-use and short stays between routes',
        ],
        cta: 'Ask about lorry parking',
        ctaMsg:
          "Hello Tranquil Rest! I'm a sales rep travelling with a lorry / company vehicle. Do you have a room with secure parking available?",
      },
      family: {
        tag: 'For Couples & Families',
        title: 'Your private, peaceful escape.',
        highlight: '100% Privacy, Sanitized Rooms & Serene River-side Environment',
        points: [
          'Complete privacy in a quiet, family-run home',
          'Freshly sanitized, well-furnished rooms',
          'Away from the town bustle, beside the river',
        ],
        cta: 'Plan a family getaway',
        ctaMsg:
          "Hello Tranquil Rest! We're a family / couple looking for a peaceful stay. Do you have rooms available?",
      },
    },

    rooms: {
      eyebrow: 'Rooms & Rates',
      title: 'Simple, honest pricing',
      subtitle: 'Comfortable, well-furnished rooms at fair rates, with more on the way.',
      available: 'Available Now',
      standardTitle: 'Standard Non-AC Room',
      standardText: 'Clean, airy and comfortable, with a private attached bathroom and secure parking included.',
      amenitiesTitle: "What's in the room",
      amenities: ['Double bed', 'Attached bathroom', 'Fresh towels & linen', 'Dressing table & mirror', 'Fan', 'Free Wi-Fi'],
      rateLabels: { day: 'Day Use', night: 'Night', short: 'Short Stay' },
      checkAvail: 'Check Availability',
      comingSoon: 'Coming Soon',
      launching: 'Launching soon at Tranquil Rest',
      ac: {
        title: 'Premium AC Room',
        text: 'Upgraded, air-conditioned comfort for the warmest Godakawela days, with all the privacy and security you expect.',
        features: ['Air conditioning', 'Premium furnishings', 'Secure parking included'],
      },
      kitchen: {
        title: 'In-House Kitchen & Restaurant',
        text: 'Fresh, home-style meals without leaving the property. Perfect after a long day on the road.',
        features: ['Home-cooked meals', 'Breakfast & dinner', 'Riverside dining ambiance'],
      },
    },

    booking: {
      eyebrow: 'Instant Booking',
      title: 'Check availability in seconds',
      subtitle:
        "Choose your stay and dates. We'll open WhatsApp with your request ready to send. No sign-ups, no fees.",
      howTitle: 'How it works',
      steps: [
        'Choose your stay type and dates',
        'Tell us about guests and your vehicle',
        'Send the pre-filled WhatsApp message',
        'We reply to confirm availability',
      ],
      preferCall: 'Prefer to call?',
      stayLabel: 'Type of stay',
      stays: { night: 'Night Stay', day: 'Day Use', short: 'Short Stay' },
      stayHints: { night: 'per night', day: 'daytime', short: 'a few hours' },
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      date: 'Date',
      arrival: 'Arrival Time',
      room: 'Room Type',
      roomStandard: 'Standard Non-AC Room',
      roomAC: 'Premium AC Room – Coming Soon',
      roomsCount: 'Rooms',
      guests: 'Guests',
      vehicle: 'Vehicle',
      vehicles: { none: 'No vehicle', bike: 'Motorbike', car: 'Car / Van', lorry: 'Lorry / Large vehicle' },
      name: 'Your name (optional)',
      namePh: 'e.g. Nimal',
      estimate: 'Estimated total',
      breakdown: ({ rate, nights, rooms, stay }) =>
        stay === 'night'
          ? `LKR ${fmtLKR(rate)} × ${nights} night${nights > 1 ? 's' : ''} × ${rooms} room${rooms > 1 ? 's' : ''}`
          : `LKR ${fmtLKR(rate)} × ${rooms} room${rooms > 1 ? 's' : ''}`,
      estimatePending: 'Select your dates to see the price',
      estimateNote: 'Final price is confirmed on WhatsApp.',
      submit: 'Confirm Availability via WhatsApp',
      noWhatsApp: 'No WhatsApp?',
      call: 'Call',
      or: 'or',
      email: 'email us',
      privacy: 'Your details go straight to us on WhatsApp. Nothing is stored on this site.',
      errors: {
        dates: 'Please select your dates.',
        order: 'Check-out must be after the check-in date.',
        past: 'Please choose today or a future date.',
        time: 'Please select your arrival time.',
        invalid: 'Please check your details and try again.',
      },
      message: (d) =>
        [
          'Hello Tranquil Rest! I would like to check availability:',
          `• Stay: ${d.stayLabel}${d.stay === 'night' ? ` (${d.nights} night${d.nights > 1 ? 's' : ''})` : ''}`,
          `• Room: ${d.roomLabel} × ${d.rooms}`,
          ...(d.stay === 'night'
            ? [`• Check-in: ${d.checkIn}`, `• Check-out: ${d.checkOut}`]
            : [`• Date: ${d.date}`, `• Arrival time: ${d.time}`]),
          `• Guests: ${d.guests}`,
          `• Vehicle: ${d.vehicleLabel}`,
          `• Estimated total: LKR ${fmtLKR(d.total)}`,
          ...(d.name ? [`• Name: ${d.name}`] : []),
        ].join('\n'),
    },

    gallery: {
      eyebrow: 'Photos',
      title: 'Take a look around',
      subtitle: 'Real photos of Tranquil Rest in Kosnathota. Tap any photo to see it larger.',
      open: 'Open photo',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
      counter: (i, n) => `${i} of ${n}`,
      captions: {
        'exterior-driveway': 'The guest house and its concrete driveway, surrounded by tall trees',
        'front-entrance': 'Front entrance with timber doors and windows',
        'welcome-sign': 'Welcome to Tranquil Rest',
        'garden-path': 'A shaded path through the tropical garden',
      },
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Good to know',
      subtitle: 'Anything else? Just ask us on WhatsApp.',
      mapLink: 'Open in Google Maps',
      items: [
        {
          q: 'Can I park a lorry or large vehicle?',
          a: "Yes. Our spacious concrete interlock parking area is designed for lorries, vans and distribution vehicles, so you never have to leave your vehicle on the roadside.",
        },
        {
          q: 'Is the property secure?',
          a: 'Yes. Our family team is on site to handle check-ins and keep a close eye on the parking area. A CCTV system covering the premises and parking 24/7 is being installed soon.',
        },
        {
          q: "What's the difference between Night, Day Use and Short Stay?",
          a: 'Night Stay: LKR 2,500 per room per night. Day Use: a daytime rest for LKR 2,000. Short Stay: a few hours for LKR 1,500. Tell us your arrival time on WhatsApp and we will confirm.',
        },
        {
          q: 'Do the rooms have air conditioning?',
          a: 'Not yet. All 5 rooms are currently non-AC with fans. Two rooms are being upgraded to Premium AC rooms very soon.',
        },
        {
          q: 'Do the rooms have attached bathrooms?',
          a: 'Yes. Every room has its own private attached bathroom with a washbasin, mirror and western-style toilet.',
        },
        { q: 'Is there Wi-Fi?', a: 'Yes, free high-speed Wi-Fi for all guests.' },
        {
          q: 'Can I get food?',
          a: 'Our in-house kitchen & restaurant is coming soon. Until then, we can arrange food delivery from a partner family-run restaurant. Just ask on WhatsApp.',
        },
        {
          q: 'How clean are the rooms?',
          a: 'Every room is cleaned daily, and linens are washed in-house, so you always get fresh bedding.',
        },
        {
          q: 'How do I book? Are there any fees?',
          a: 'Book directly on WhatsApp or by phone (071 630 4642). There are no booking fees and no third-party commissions.',
        },
        {
          q: 'Where exactly are you?',
          a: 'On the Rathnapura–Embilipitiya main road at Kosnathota, just outside Godakawela town, beside the river.',
          map: true,
        },
      ],
    },

    footer: {
      desc: 'A family-run, highly secure river-side guest house in Kosnathota. Your home away from home, with peace of mind for you and your vehicle.',
      contact: 'Contact',
      location: 'Rathnapura-Embilipitiya Main Road, Kosnathota, Godakawela.',
      follow: 'Follow & Find Us',
      directions: 'Get directions on Google Maps',
      rights: 'All rights reserved.',
      country: 'Godakawela, Sri Lanka',
    },

    bar: { call: 'Call', whatsapp: 'WhatsApp' },
    chatAria: 'Chat on WhatsApp',
    waHello: 'Hello Tranquil Rest!',
  },

  si: {
    langName: 'සිංහල',
    formatDate: (iso) => {
      const d = isoToDate(iso)
      return `${d.getFullYear()} ${SI_MONTHS[d.getMonth()]} ${d.getDate()} (${SI_DAYS[d.getDay()]})`
    },
    switchTo: 'English',
    switchToShort: 'EN',
    switchToLabel: 'Switch to English (ඉංග්‍රීසියට මාරු වන්න)',
    currency: (n) => `රු. ${fmtLKR(n)}`,

    logoSub: 'කොස්නතොට · ගොඩකවෙල',
    nav: { why: 'ඇයි අප?', rooms: 'කාමර සහ ගාස්තු', gallery: 'ඡායාරූප', faq: 'ප්‍රශ්න', contact: 'සම්බන්ධ වන්න' },
    bookNow: 'දැන්ම වෙන්කරන්න',
    openMenu: 'මෙනුව විවෘත කරන්න',
    closeMenu: 'මෙනුව වසන්න',
    backToTop: 'ඉහළට',

    hero: {
      badge: 'නවාතැන්පොළ · කොස්නතොට',
      titleLead: 'සාමකාමී ',
      titleTail: 'විවේකයක් සහ',
      titleLine2: 'ඉහළම ආරක්ෂාව සහිත නවාතැනක්',
      sub: 'කොස්නතොට, ගොඩකවෙල | ඔබට ආරක්ෂිතව සහ සැහැල්ලුවෙන් ගත කළ හැකි ගං ඉවුරේ නවාතැන',
      bookWA: 'WhatsApp හරහා වෙන්කරන්න',
      call: 'අමතන්න 071 630 4642',
      badges: ['ස්ථානයේම ආරක්ෂාව · CCTV ළඟදීම', 'ඉඩකඩ සහිත ආරක්ෂිත වාහන නැවැත්වීම', 'ගං ඉවුරේ සාමකාමී පරිසරය'],
      waMsg: 'ආයුබෝවන් Tranquil Rest! මට කාමරයක් වෙන්කර ගැනීමට අවශ්‍යයි.',
    },

    why: {
      eyebrow: 'ඇයි Tranquil Rest?',
      title: 'ඔබේ සිතේ සැනසීම අපේ ප්‍රමුඛත්වයයි',
      subtitle:
        'කලබලකාරී ගොඩකවෙල නගරයෙන් ඈත්ව, අනෙක් නවාතැන් ලබා නොදෙන දේ අපි ඔබට ලබා දෙනවා: ඔබටත් ඔබේ වාහනයටත් සැබෑ ආරක්ෂාව සහ සැබෑ සන්සුන් බව.',
      corporate: {
        tag: 'ආයතන සහ විකුණුම් නියෝජිතයින් සඳහා',
        title: 'නිදහසේ විවේක ගන්න, ඔබේ වාහනය ආරක්ෂිතයි.',
        highlight: 'විශාල ලොරි සඳහා ඉඩකඩ සහිත කොන්ක්‍රීට් වාහන නැවැත්වීම, අපගේ කණ්ඩායම ස්ථානයේම',
        points: [
          'අපගේ පවුලේ කණ්ඩායම ස්ථානයේම සිටී, CCTV කැමරා ළඟදීම',
          'ලොරි සහ බෙදාහැරීමේ වාහන සඳහා කොන්ක්‍රීට් ඉන්ටර්ලොක් වාහන නැවැත්වීම',
          'ගමන් අතරතුර දිවා කාලීන සහ කෙටි කාලීන නවාතැන්',
        ],
        cta: 'ලොරි නැවැත්වීම ගැන විමසන්න',
        ctaMsg:
          'ආයුබෝවන් Tranquil Rest! මම ලොරියක් / ආයතන වාහනයක් සමඟ ගමන් කරන විකුණුම් නියෝජිතයෙක්. ආරක්ෂිත වාහන නැවැත්වීම සහිත කාමරයක් ලබා ගත හැකිද?',
      },
      family: {
        tag: 'යුවළයන් සහ පවුල් සඳහා',
        title: 'ඔබේම පෞද්ගලික, සාමකාමී නිවාඩුව.',
        highlight: '100% පෞද්ගලිකත්වය, පිරිසිදු කළ කාමර සහ සන්සුන් ගං ඉවුරේ පරිසරය',
        points: [
          'පවුලක් විසින් පවත්වාගෙන යන නිසංසල නිවසක සම්පූර්ණ පෞද්ගලිකත්වය',
          'නිතර පිරිසිදු කරන, හොඳින් සපයා ඇති කාමර',
          'නගරයේ කලබලයෙන් ඈත්ව, ගඟ අසල',
        ],
        cta: 'පවුලේ නිවාඩුවක් සැලසුම් කරන්න',
        ctaMsg:
          'ආයුබෝවන් Tranquil Rest! අපි පවුලක් / යුවළක් ලෙස සාමකාමී නවාතැනක් සොයනවා. කාමර ලබා ගත හැකිද?',
      },
    },

    rooms: {
      eyebrow: 'කාමර සහ ගාස්තු',
      title: 'සරල, අවංක මිල ගණන්',
      subtitle: 'සාධාරණ මිලට සුවපහසු, හොඳින් සපයා ඇති කාමර. තවත් පහසුකම් ළඟදීම.',
      available: 'දැන් ලබා ගත හැක',
      standardTitle: 'සාමාන්‍ය Non-AC කාමරය',
      standardText: 'පිරිසිදු, වාතාශ්‍රය සහිත සහ සුවපහසු. කාමරයටම අයත් පෞද්ගලික නාන කාමරයක් සහ ආරක්ෂිත වාහන නැවැත්වීම ද ඇතුළුව.',
      amenitiesTitle: 'කාමරයේ ඇති පහසුකම්',
      amenities: ['ඩබල් ඇඳ', 'කාමරයටම අයත් නාන කාමරය', 'නැවුම් තුවා සහ ඇඳ ඇතිරිලි', 'කැඩපත සහිත ඇඳුම් මේසය', 'විදුලි පංකාව', 'නොමිලේ Wi-Fi'],
      rateLabels: { day: 'දිවා කාලය', night: 'රාත්‍රිය', short: 'කෙටි කාලීන' },
      checkAvail: 'ලබා ගත හැකිදැයි බලන්න',
      comingSoon: 'ළඟදීම',
      launching: 'Tranquil Rest හි ළඟදීම',
      ac: {
        title: 'ප්‍රිමියම් AC කාමරය',
        text: 'ගොඩකවෙල උණුසුම් දිනවලට වායුසමීකරණ සහිත උසස් සුවපහසුව, ඔබ බලාපොරොත්තු වන පෞද්ගලිකත්වය හා ආරක්ෂාව සමඟම.',
        features: ['වායුසමීකරණය', 'උසස් ගෘහ භාණ්ඩ', 'ආරක්ෂිත වාහන නැවැත්වීම ඇතුළුව'],
      },
      kitchen: {
        title: 'නවාතැනේම මුළුතැන්ගෙය සහ අවන්හල',
        text: 'නවාතැනෙන් පිට නොගොස් නැවුම්, ගෙදර රසයේ ආහාර. දිගු ගමනකට පසු ඉතා සුදුසුයි.',
        features: ['ගෙදර හදන කෑම', 'උදේ සහ රාත්‍රී ආහාර', 'ගං ඉවුරේ ආහාර ගැනීමේ පරිසරය'],
      },
    },

    booking: {
      eyebrow: 'ඉක්මන් වෙන්කිරීම',
      title: 'තත්පර කිහිපයකින් ලබා ගත හැකිදැයි බලන්න',
      subtitle:
        'ඔබේ නවාතැන් වර්ගය සහ දින තෝරන්න. ඔබේ ඉල්ලීම සූදානම් කර WhatsApp විවෘත වේ. ලියාපදිංචියක් හෝ ගාස්තු නැත.',
      howTitle: 'වෙන්කරගන්නා ආකාරය',
      steps: [
        'නවාතැන් වර්ගය සහ දින තෝරන්න',
        'අමුත්තන් සහ ඔබේ වාහනය ගැන අපට කියන්න',
        'සූදානම් කළ WhatsApp පණිවිඩය යවන්න',
        'අපි පිළිතුරු දී ලබා ගත හැකි බව තහවුරු කරමු',
      ],
      preferCall: 'ඇමතීමට කැමතිද?',
      stayLabel: 'නවාතැන් වර්ගය',
      stays: { night: 'රාත්‍රී නවාතැන', day: 'දිවා කාලය', short: 'කෙටි කාලීන' },
      stayHints: { night: 'රාත්‍රියකට', day: 'දිවා කාලයට', short: 'පැය කිහිපයකට' },
      checkIn: 'පැමිණෙන දිනය',
      checkOut: 'පිටවන දිනය',
      date: 'දිනය',
      arrival: 'පැමිණෙන වේලාව',
      room: 'කාමර වර්ගය',
      roomStandard: 'සාමාන්‍ය Non-AC කාමරය',
      roomAC: 'ප්‍රිමියම් AC කාමරය – ළඟදීම',
      roomsCount: 'කාමර ගණන',
      guests: 'අමුත්තන් ගණන',
      vehicle: 'වාහනය',
      vehicles: { none: 'වාහනයක් නැත', bike: 'යතුරුපැදිය', car: 'කාර් / වෑන්', lorry: 'ලොරිය / විශාල වාහනය' },
      name: 'ඔබේ නම (අත්‍යවශ්‍ය නොවේ)',
      namePh: 'උදා: නිමල්',
      estimate: 'ඇස්තමේන්තුගත මුළු මුදල',
      breakdown: ({ rate, nights, rooms, stay }) =>
        stay === 'night'
          ? `රු. ${fmtLKR(rate)} × රාත්‍රී ${nights} × කාමර ${rooms}`
          : `රු. ${fmtLKR(rate)} × කාමර ${rooms}`,
      estimatePending: 'මිල බැලීමට දින තෝරන්න',
      estimateNote: 'අවසන් මිල WhatsApp හරහා තහවුරු කෙරේ.',
      submit: 'WhatsApp හරහා තහවුරු කරගන්න',
      noWhatsApp: 'WhatsApp නැද්ද?',
      call: 'අමතන්න',
      or: 'හෝ',
      email: 'ඊමේල් කරන්න',
      privacy: 'ඔබේ විස්තර කෙලින්ම WhatsApp හරහා අපට එවේ. මෙම වෙබ් අඩවියේ කිසිවක් ගබඩා නොවේ.',
      errors: {
        dates: 'කරුණාකර දින තෝරන්න.',
        order: 'පිටවන දිනය පැමිණෙන දිනයට පසුව විය යුතුය.',
        past: 'කරුණාකර අද හෝ ඉදිරි දිනයක් තෝරන්න.',
        time: 'කරුණාකර ඔබ පැමිණෙන වේලාව තෝරන්න.',
        invalid: 'කරුණාකර ඔබේ විස්තර පරීක්ෂා කර නැවත උත්සාහ කරන්න.',
      },
      message: (d) =>
        [
          'ආයුබෝවන් Tranquil Rest! කාමරයක් ලබා ගත හැකිදැයි දැනගැනීමට කැමතියි:',
          `• නවාතැන: ${d.stayLabel}${d.stay === 'night' ? ` (රාත්‍රී ${d.nights})` : ''}`,
          `• කාමරය: ${d.roomLabel} × ${d.rooms}`,
          ...(d.stay === 'night'
            ? [`• පැමිණීම: ${d.checkIn}`, `• පිටවීම: ${d.checkOut}`]
            : [`• දිනය: ${d.date}`, `• පැමිණෙන වේලාව: ${d.time}`]),
          `• අමුත්තන්: ${d.guests}`,
          `• වාහනය: ${d.vehicleLabel}`,
          `• ඇස්තමේන්තුගත මුදල: රු. ${fmtLKR(d.total)}`,
          ...(d.name ? [`• නම: ${d.name}`] : []),
        ].join('\n'),
    },

    gallery: {
      eyebrow: 'ඡායාරූප',
      title: 'අප වෙත එබී බලන්න',
      subtitle: 'කොස්නතොට Tranquil Rest හි සැබෑ ඡායාරූප. විශාල කර බැලීමට ඕනෑම ඡායාරූපයක් ඔබන්න.',
      open: 'ඡායාරූපය විවෘත කරන්න',
      close: 'වසන්න',
      prev: 'පෙර ඡායාරූපය',
      next: 'ඊළඟ ඡායාරූපය',
      counter: (i, n) => `${n} න් ${i}`,
      captions: {
        'exterior-driveway': 'උස් ගස්වලින් වට වූ නවාතැන සහ කොන්ක්‍රීට් වාහන මාර්‍ගය',
        'front-entrance': 'දැව දොර සහ ජනෙල් සහිත ප්‍රධාන දොරටුව',
        'welcome-sign': 'Tranquil Rest වෙත සාදරයෙන් පිළිගනිමු',
        'garden-path': 'ගස් සෙවණ සහිත උයන හරහා යන මඟ',
      },
    },

    faq: {
      eyebrow: 'නිතර අසන ප්‍රශ්න',
      title: 'දැනගත යුතු දේ',
      subtitle: 'තවත් ප්‍රශ්න තිබේද? WhatsApp හරහා අපෙන් අහන්න.',
      mapLink: 'Google Maps හි විවෘත කරන්න',
      items: [
        {
          q: 'මට ලොරියක් හෝ විශාල වාහනයක් නවත්වන්න පුළුවන්ද?',
          a: 'ඔව්. අපගේ ඉඩකඩ සහිත කොන්ක්‍රීට් ඉන්ටර්ලොක් වාහන නැවැත්වීමේ ප්‍රදේශය ලොරි, වෑන් සහ බෙදාහැරීමේ වාහන සඳහාම සකසා ඇත. ඔබේ වාහනය පාර අයිනේ නවත්වන්න අවශ්‍ය නැහැ.',
        },
        {
          q: 'නවාතැන ආරක්ෂිතද?',
          a: 'ඔව්. අපගේ පවුලේ කණ්ඩායම ස්ථානයේම සිට පැමිණීම් භාරව සිටින අතර වාහන නැවැත්වීමේ ප්‍රදේශය ගැන සමීපව සොයා බලයි. පරිශ්‍රය සහ වාහන නැවැත්වීම පැය 24 පුරා ආවරණය කරන CCTV පද්ධතියක් ළඟදීම සවි කෙරේ.',
        },
        {
          q: 'රාත්‍රී, දිවා කාලය සහ කෙටි කාලීන නවාතැන් අතර වෙනස කුමක්ද?',
          a: 'රාත්‍රී නවාතැන: කාමරයකට රාත්‍රියකට රු. 2,500. දිවා කාලය: දිවා විවේකය සඳහා රු. 2,000. කෙටි කාලීන: පැය කිහිපයක් සඳහා රු. 1,500. ඔබ පැමිණෙන වේලාව WhatsApp හරහා දන්වන්න, අපි තහවුරු කරන්නම්.',
        },
        {
          q: 'කාමරවල වායුසමීකරණ (AC) තිබේද?',
          a: 'තවම නැත. දැනට කාමර 5ම විදුලි පංකා සහිත Non-AC කාමර වේ. කාමර දෙකක් ළඟදීම ප්‍රිමියම් AC කාමර ලෙස උසස් කෙරේ.',
        },
        {
          q: 'කාමරවලට අයත් නාන කාමර තිබේද?',
          a: 'ඔව්. සෑම කාමරයකටම කැඩපත, අත් සෝදන බේසම සහ කොමඩ් වැසිකිළිය සහිත පෞද්ගලික නාන කාමරයක් ඇත.',
        },
        { q: 'Wi-Fi තිබේද?', a: 'ඔව්, සියලුම අමුත්තන්ට නොමිලේ අධිවේගී Wi-Fi.' },
        {
          q: 'කෑම ලබා ගත හැකිද?',
          a: 'අපගේ මුළුතැන්ගෙය සහ අවන්හල ළඟදීම විවෘත වේ. ඒ වන තුරු, හවුල්කාර පවුල් අවන්හලකින් ආහාර ගෙන්වා දිය හැක. WhatsApp හරහා අහන්න.',
        },
        {
          q: 'කාමර කොතරම් පිරිසිදුද?',
          a: 'සෑම කාමරයක්ම දිනපතා පිරිසිදු කරන අතර ඇඳ ඇතිරිලි අපේම රෙදි සේදීමේ පහසුකම්වල සෝදනු ලැබේ. ඔබට සැමවිටම නැවුම් ඇඳ ඇතිරිලි.',
        },
        {
          q: 'වෙන්කරගන්නේ කෙසේද? ගාස්තු තිබේද?',
          a: 'WhatsApp හෝ දුරකථනයෙන් (071 630 4642) කෙලින්ම වෙන්කරගන්න. වෙන්කිරීමේ ගාස්තු හෝ වෙනත් ආයතනවලට කොමිස් නැත.',
        },
        {
          q: 'ඔබ හරියටම කොහෙද?',
          a: 'රත්නපුර–ඇඹිලිපිටිය ප්‍රධාන මාර්‍ගයේ, ගොඩකවෙල නගරයෙන් මදක් ඔබ්බෙන්, කොස්නතොට ගඟ අසල.',
          map: true,
        },
      ],
    },

    footer: {
      desc: 'කොස්නතොට පිහිටි, පවුලක් විසින් පවත්වාගෙන යන, ඉහළ ආරක්ෂාවක් සහිත ගං ඉවුරේ නවාතැන්පොළක්. ඔබටත් ඔබේ වාහනයටත් සිතේ සැනසීම සමඟ ඔබේ දෙවන නිවස.',
      contact: 'සම්බන්ධ වන්න',
      location: 'රත්නපුර–ඇඹිලිපිටිය ප්‍රධාන මාර්‍ගය, කොස්නතොට, ගොඩකවෙල.',
      follow: 'අප හා එක්වන්න',
      directions: 'Google Maps හරහා මඟ පෙන්වීම්',
      rights: 'සියලු හිමිකම් ඇවිරිණි.',
      country: 'ගොඩකවෙල, ශ්‍රී ලංකාව',
    },

    bar: { call: 'අමතන්න', whatsapp: 'WhatsApp' },
    chatAria: 'WhatsApp හරහා කතා කරන්න',
    waHello: 'ආයුබෝවන් Tranquil Rest!',
  },
}
