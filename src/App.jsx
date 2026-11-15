import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BedDouble,
  Briefcase,
  CalendarDays,
  Cctv,
  Clock,
  HeartHandshake,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sun,
  Trees,
  Truck,
  UtensilsCrossed,
  Waves,
  X,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Site configuration                                                 */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = '94742327807'

const CONTACT = {
  location: 'Rathnapura-Embilipitiya Main Road, Kosnathota, Godakawela.',
  phoneDisplay: '0742327807',
  phoneHref: 'tel:+94742327807',
  email: 'tranquilrestkosnathota@gmail.com',
}

const LINKS = {
  facebook: 'https://web.facebook.com/people/Tranquil-Rest-Kosnathota/61594407407705/',
  instagram: 'https://www.instagram.com/tranquil_rest/',
  maps: 'https://share.google/wZ7eXf38suhNNJAWw',
}

// Replace with a real photo of the property, e.g. '/images/river.jpg' placed in /public
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2000&q=80'

const NAV_LINKS = [
  { id: 'why-us', label: 'Why Us' },
  { id: 'rooms', label: 'Rooms & Rates' },
  { id: 'booking', label: 'Booking' },
  { id: 'contact', label: 'Contact' },
]

const ROOM_OPTIONS = [
  { value: 'Standard Non-AC Room (Night Stay)', label: 'Standard Non-AC – Night (LKR 2,500)' },
  { value: 'Standard Non-AC Room (Day Use)', label: 'Standard Non-AC – Day Use (LKR 2,000)' },
  { value: 'Standard Non-AC Room (Short Stay)', label: 'Standard Non-AC – Short Stay (LKR 1,500)' },
  { value: 'Premium AC Room', label: 'Premium AC Room – Coming Soon', disabled: true },
]

const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

/* ------------------------------------------------------------------ */
/*  Brand mark                                                         */
/*  Vector recreation of the logo. To use the official file instead,  */
/*  put it in /public and swap the <svg> for:                          */
/*  <img src="/logo.png" alt="Tranquil Rest" className={className} />  */
/* ------------------------------------------------------------------ */

function LogoMark({ className = 'h-10 w-auto', color = '#0C7350' }) {
  return (
    <svg viewBox="0 0 160 200" className={className} role="img" aria-label="Tranquil Rest logo">
      <g fill={color}>
        <path
          fillRule="evenodd"
          d="M76.6 16.6a4 4 0 0 1 6.8 0l71.8 117.3a3 3 0 0 1-2.6 4.6H7.4a3 3 0 0 1-2.6-4.6Z
             M76.6 48.6a4 4 0 0 1 6.8 0l45.3 74.2a3 3 0 0 1-2.6 4.6H33.9a3 3 0 0 1-2.6-4.6Z"
        />
        <path d="M80 73c3.6 21 8 26.4 25.6 29.6C88 105.8 83.6 111 80 132.4c-3.6-21.4-8-26.6-25.6-29.8C72 99.4 76.4 94 80 73Z" />
        <rect x="2" y="146" width="156" height="10" rx="5" />
        <rect x="27" y="164" width="106" height="10" rx="5" />
        <rect x="52" y="182" width="56" height="10" rx="5" />
      </g>
    </svg>
  )
}

function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className="h-10 w-auto" color={light ? '#E9DFC7' : '#14936A'} />
      <div className="leading-tight">
        <p className="font-serif text-xl font-semibold tracking-wide text-[#F2ECDF]">Tranquil Rest</p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#BFB396]">Kosnathota · Godakawela</p>
      </div>
    </div>
  )
}

/* Brand icons (removed from lucide-react, so inline SVGs) */
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21.9v-7.7h2.6l.4-3h-3V9.3c0-.9.3-1.5 1.5-1.5h1.6V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6v7.7C5.6 21.1 2 17 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10c0 5-3.6 9.1-8.5 9.9Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Shared UI                                                          */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#3FB98A]">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold text-[#F2ECDF] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-[#BFB396]">{subtitle}</p>}
      <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#D8C9A3] to-transparent" />
    </div>
  )
}

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D8C9A3]/50 bg-[#D8C9A3]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9DFC7] shadow-[0_0_20px_-4px_rgba(216,201,163,0.5)]">
      <Sparkles className="h-3.5 w-3.5" />
      Coming Soon
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  1. Navigation                                                      */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-[#D8C9A3]/10 bg-[#10241C]/90 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" aria-label="Tranquil Rest – back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium tracking-wide text-[#E9DFC7]/80 transition hover:text-[#F2ECDF]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full bg-[#D8C9A3] px-5 py-2.5 text-sm font-semibold text-[#10241C] shadow-md transition hover:-translate-y-0.5 hover:bg-[#E9DFC7]"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[#F2ECDF] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#D8C9A3]/10 px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[#E9DFC7] hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[#D8C9A3] px-5 py-3 text-center font-semibold text-[#10241C]"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Hero                                                            */
/* ------------------------------------------------------------------ */

const TRUST_BADGES = [
  { icon: Cctv, label: '24/7 CCTV Security' },
  { icon: Truck, label: 'Spacious Secure Parking' },
  { icon: Waves, label: 'Peaceful River-side Nature' },
]

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#163A2C] via-[#10241C] to-[#0B1A14]">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        onError={(e) => (e.currentTarget.style.display = 'none')}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark forest overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1F18]/85 via-[#10241C]/70 to-[#10241C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(14,31,24,0.55)_75%)]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-20 pt-32 text-center lg:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8C9A3]/30 bg-[#10241C]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#E9DFC7] backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-[#3FB98A]" />
          Guest House · Kosnathota
        </p>

        <h1 className="font-serif text-4xl font-semibold leading-tight text-[#F7F2E7] sm:text-5xl lg:text-6xl">
          A Peaceful Getaway &amp;
          <span className="block text-[#D8C9A3]">Highly Secure Stay</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#E9DFC7]/85 sm:text-lg">
          Kosnathota, Godakawela | Your Safe and Relaxing River-side Retreat
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink('Hello Tranquil Rest! I would like to make a booking.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0C7350] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#0C7350]/30 ring-1 ring-[#3FB98A]/40 transition hover:-translate-y-0.5 hover:bg-[#0E8A60]"
          >
            <MessageCircle className="h-5 w-5" />
            Book via WhatsApp
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#rooms"
            className="rounded-full border border-[#D8C9A3]/40 px-8 py-4 text-base font-medium text-[#E9DFC7] transition hover:bg-[#D8C9A3]/10"
          >
            View Rooms &amp; Rates
          </a>
        </div>

        <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-[#D8C9A3]/15 bg-[#10241C]/55 px-4 py-4 backdrop-blur-md sm:flex-col sm:gap-2"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C7350]/30 text-[#3FB98A] ring-1 ring-[#3FB98A]/30">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-[#F2ECDF]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Value propositions                                              */
/* ------------------------------------------------------------------ */

const AUDIENCES = [
  {
    icon: Briefcase,
    tag: 'For Corporate & Sales Reps',
    title: 'Rest easy, your vehicle is safe.',
    highlight: '24/7 CCTV & Spacious Concrete Parking for Large Lorries',
    points: [
      { icon: Cctv, text: 'Round-the-clock CCTV covering the premises' },
      { icon: Truck, text: 'Concrete interlock parking for lorries & distribution vehicles' },
      { icon: Clock, text: 'Flexible day-use and short stays between routes' },
    ],
  },
  {
    icon: HeartHandshake,
    tag: 'For Couples & Families',
    title: 'Your private, peaceful escape.',
    highlight: '100% Privacy, Sanitized Rooms & Serene River-side Environment',
    points: [
      { icon: Lock, text: 'Complete privacy in a quiet, family-run home' },
      { icon: Sparkles, text: 'Freshly sanitized, well-furnished rooms' },
      { icon: Trees, text: 'Away from the town bustle, beside the river' },
    ],
  },
]

function ValueProps() {
  return (
    <section id="why-us" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Tranquil Rest"
          title="Peace of mind, by design"
          subtitle="Away from congested Godakawela town, we offer what other stays don't: real security for you and your vehicle, and genuine calm."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {AUDIENCES.map(({ icon: Icon, tag, title, highlight, points }) => (
            <article
              key={tag}
              className="group relative overflow-hidden rounded-3xl border border-[#D8C9A3]/12 bg-gradient-to-br from-[#1A3A2D] to-[#132C22] p-8 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#3FB98A]/40 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0C7350]/25 blur-3xl transition group-hover:bg-[#0C7350]/40" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0C7350] text-white shadow-lg shadow-[#0C7350]/30">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C9A3]">{tag}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#F2ECDF]">{title}</h3>
                <p className="mt-4 border-l-2 border-[#3FB98A] pl-4 text-lg font-medium leading-snug text-[#E9DFC7]">
                  {highlight}
                </p>
                <ul className="mt-6 space-y-3">
                  {points.map(({ icon: PIcon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-[#BFB396]">
                      <PIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#3FB98A]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  4. Rooms & rates                                                   */
/* ------------------------------------------------------------------ */

const STANDARD_RATES = [
  { icon: Sun, label: 'Day Use', price: '2,000' },
  { icon: Moon, label: 'Night', price: '2,500' },
  { icon: Clock, label: 'Short Stay', price: '1,500' },
]

function Rooms() {
  return (
    <section id="rooms" className="relative bg-[#0E1F18] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Rooms & Rates"
          title="Simple, honest pricing"
          subtitle="Comfortable, well-furnished rooms at fair rates, with more on the way."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Standard Non-AC – available */}
          <article className="relative flex flex-col rounded-3xl border border-[#3FB98A]/40 bg-gradient-to-b from-[#1A3A2D] to-[#132C22] p-8 shadow-2xl shadow-[#0C7350]/15 lg:col-span-1">
            <span className="absolute -top-3 left-8 rounded-full bg-[#0C7350] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Available Now
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C7350]/30 text-[#3FB98A] ring-1 ring-[#3FB98A]/30">
              <BedDouble className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#F2ECDF]">Standard Non-AC Room</h3>
            <p className="mt-2 text-sm text-[#BFB396]">Clean, airy and comfortable, with secure parking included.</p>

            <ul className="mt-6 flex-1 divide-y divide-[#D8C9A3]/10 rounded-2xl border border-[#D8C9A3]/10 bg-[#10241C]/50">
              {STANDARD_RATES.map(({ icon: Icon, label, price }) => (
                <li key={label} className="flex items-center justify-between px-5 py-4">
                  <span className="flex items-center gap-3 text-[#E9DFC7]">
                    <Icon className="h-4 w-4 text-[#D8C9A3]" />
                    {label}
                  </span>
                  <span className="text-right">
                    <span className="text-xs text-[#BFB396]">LKR </span>
                    <span className="font-serif text-2xl font-semibold text-[#F7F2E7]">{price}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#booking"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0C7350] px-6 py-3 font-semibold text-white transition hover:bg-[#0E8A60]"
            >
              Check Availability <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          {/* Premium AC – coming soon */}
          <ComingSoonCard
            icon={Snowflake}
            title="Premium AC Room"
            text="Upgraded, air-conditioned comfort for the warmest Godakawela days, with all the privacy and security you expect."
            features={['Air conditioning', 'Premium furnishings', 'Secure parking included']}
          />

          {/* Kitchen & Restaurant – coming soon */}
          <ComingSoonCard
            icon={UtensilsCrossed}
            title="In-House Kitchen & Restaurant"
            text="Fresh, home-style meals without leaving the property. Perfect after a long day on the road."
            features={['Home-cooked meals', 'Breakfast & dinner', 'Riverside dining ambiance']}
          />
        </div>
      </div>
    </section>
  )
}

function ComingSoonCard({ icon: Icon, title, text, features }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-3xl border border-[#D8C9A3]/15 bg-[#132C22]/70 p-8">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_18px,rgba(216,201,163,0.025)_18px_36px)]" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D8C9A3]/10 text-[#D8C9A3] ring-1 ring-[#D8C9A3]/25">
          <Icon className="h-6 w-6" />
        </span>
        <ComingSoonBadge />
      </div>
      <h3 className="relative mt-5 font-serif text-2xl font-semibold text-[#F2ECDF]/90">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-[#BFB396]">{text}</p>
      <ul className="relative mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-[#E9DFC7]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D8C9A3]/60" />
            {f}
          </li>
        ))}
      </ul>
      <p className="relative mt-6 rounded-full border border-dashed border-[#D8C9A3]/25 px-6 py-3 text-center text-sm text-[#BFB396]">
        Launching soon at Tranquil Rest
      </p>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/*  5. WhatsApp booking engine                                         */
/* ------------------------------------------------------------------ */

const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

const prettyDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

function BookingEngine() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [roomType, setRoomType] = useState(ROOM_OPTIONS[0].value)
  const [error, setError] = useState('')

  const today = todayISO()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!checkIn || !checkOut) {
      setError('Please select both check-in and check-out dates.')
      return
    }
    if (checkOut < checkIn) {
      setError('Check-out date cannot be before the check-in date.')
      return
    }
    setError('')
    const message = `Hello Tranquil Rest! I would like to check availability for a ${roomType} from ${prettyDate(
      checkIn,
    )} to ${prettyDate(checkOut)}.`
    window.open(waLink(message), '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full rounded-xl border border-[#D8C9A3]/20 bg-[#0E1F18] px-4 py-3.5 text-[#F2ECDF] outline-none transition placeholder:text-[#BFB396]/60 focus:border-[#3FB98A] focus:ring-2 focus:ring-[#3FB98A]/30 [color-scheme:dark]'

  return (
    <section id="booking" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Instant Booking"
          title="Check availability in seconds"
          subtitle="Pick your dates and room. We'll open WhatsApp with your request ready to send. No sign-ups, no fees."
        />

        <div className="grid overflow-hidden rounded-3xl border border-[#D8C9A3]/12 shadow-2xl shadow-black/30 lg:grid-cols-5">
          {/* Info panel */}
          <div className="relative bg-[#0C7350] p-8 text-white sm:p-10 lg:col-span-2">
            <LogoMark className="absolute -bottom-6 -right-6 h-48 w-auto opacity-10" color="#ffffff" />
            <h3 className="relative font-serif text-2xl font-semibold">How it works</h3>
            <ol className="relative mt-6 space-y-5">
              {[
                'Choose your check-in & check-out dates',
                'Select the room type that suits you',
                'Send the pre-filled WhatsApp message',
                'We confirm availability right away',
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-white/90">{step}</span>
                </li>
              ))}
            </ol>
            <a
              href={CONTACT.phoneHref}
              className="relative mt-8 inline-flex items-center gap-2 text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              <Phone className="h-4 w-4" /> Prefer to call? {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="bg-[#1A3A2D] p-8 sm:p-10 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-[#E9DFC7]">
                  <CalendarDays className="h-4 w-4 text-[#3FB98A]" /> Check-in Date
                </span>
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value)
                    if (checkOut && e.target.value > checkOut) setCheckOut(e.target.value)
                  }}
                  className={fieldClass}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-[#E9DFC7]">
                  <CalendarDays className="h-4 w-4 text-[#3FB98A]" /> Check-out Date
                </span>
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={fieldClass}
                  required
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-[#E9DFC7]">
                  <BedDouble className="h-4 w-4 text-[#3FB98A]" /> Room Type
                </span>
                <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className={fieldClass}>
                  {ROOM_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} disabled={o.disabled}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {error && (
              <p role="alert" className="mt-5 rounded-xl border border-[#E8A87C]/30 bg-[#E8A87C]/10 px-4 py-3 text-sm text-[#F3C9A8]">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-[#0E1F18] shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#3EE07A]"
            >
              <MessageCircle className="h-5 w-5" />
              Confirm Availability via WhatsApp
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#BFB396]">
              <ShieldCheck className="h-4 w-4 text-[#3FB98A]" />
              Your details go straight to us on WhatsApp. Nothing is stored on this site.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. Footer                                                          */
/* ------------------------------------------------------------------ */

const SOCIALS = [
  { href: LINKS.facebook, label: 'Facebook', icon: FacebookIcon },
  { href: LINKS.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: LINKS.maps, label: 'Google Maps', icon: MapPin },
  { href: waLink('Hello Tranquil Rest!'), label: 'WhatsApp', icon: MessageCircle },
]

function Footer() {
  return (
    <footer id="contact" className="border-t border-[#D8C9A3]/10 bg-[#0B1A14] px-5 pt-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 pb-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#BFB396]">
            A family-run, highly secure river-side guest house in Kosnathota. Your home away from home, with
            peace of mind for you and your vehicle.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C9A3]">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3 text-[#E9DFC7]/85">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#3FB98A]" />
              <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2ECDF]">
                {CONTACT.location}
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#E9DFC7]/85">
              <Phone className="h-5 w-5 shrink-0 text-[#3FB98A]" />
              <a href={CONTACT.phoneHref} className="hover:text-[#F2ECDF]">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#E9DFC7]/85">
              <Mail className="h-5 w-5 shrink-0 text-[#3FB98A]" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-[#F2ECDF]">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C9A3]">Follow &amp; Find Us</h3>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8C9A3]/20 text-[#E9DFC7] transition hover:-translate-y-0.5 hover:border-[#3FB98A] hover:bg-[#0C7350] hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#3FB98A] hover:text-[#5FD3A4]"
          >
            Get directions on Google Maps <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-[#D8C9A3]/10 py-6 text-xs text-[#BFB396]/70 sm:flex-row">
        <p>© {new Date().getFullYear()} Tranquil Rest – Kosnathota. All rights reserved.</p>
        <p>Godakawela, Sri Lanka</p>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Floating WhatsApp button (mobile convenience)                      */
/* ------------------------------------------------------------------ */

function FloatingWhatsApp() {
  return (
    <a
      href={waLink('Hello Tranquil Rest! I would like to make a booking.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0E1F18] shadow-xl shadow-black/30 transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="min-h-screen bg-[#10241C] font-sans text-[#F2ECDF] selection:bg-[#0C7350] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Rooms />
        <BookingEngine />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
