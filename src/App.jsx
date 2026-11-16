import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { track } from '@vercel/analytics'
import {
  ArrowRight,
  BedDouble,
  Briefcase,
  Calculator,
  CalendarDays,
  Car,
  ChevronDown,
  Clock,
  HeartHandshake,
  Languages,
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
  User,
  Users,
  UtensilsCrossed,
  Waves,
  X,
} from 'lucide-react'

import { LanguageProvider, useLang } from './i18n.jsx'
import { RATES } from './content.js'

// Hero photo: self-hosted, optimised AVIF/WebP (see src/assets/hero).
// To use your own photo, replace these files (keep the same names) or update the imports.
import heroMobileAvif from './assets/hero/hero-mobile-750.avif'
import heroMobileWebp from './assets/hero/hero-mobile-750.webp'
import hero1280Avif from './assets/hero/hero-1280.avif'
import hero1280Webp from './assets/hero/hero-1280.webp'
import hero1920Avif from './assets/hero/hero-1920.avif'
import hero1920Webp from './assets/hero/hero-1920.webp'

/* ------------------------------------------------------------------ */
/*  Site configuration                                                 */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = '94742327807'

const CONTACT = {
  phoneDisplay: '0742327807',
  phoneHref: 'tel:+94742327807',
  email: 'tranquilrestkosnathota@gmail.com',
}

const LINKS = {
  facebook: 'https://web.facebook.com/people/Tranquil-Rest-Kosnathota/61594407407705/',
  instagram: 'https://www.instagram.com/tranquil_rest/',
  maps: 'https://maps.app.goo.gl/zrvxYwL6YupSsZNaA',
}

const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

// Vercel Web Analytics custom events (no-op if analytics is not enabled)
const trackEvent = (name, props) => {
  try {
    track(name, props)
  } catch {
    // never let analytics break a booking
  }
}

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

function Logo() {
  const { t } = useLang()
  return (
    <div className="flex items-center gap-3">
      <LogoMark className="h-10 w-auto" color="#14936A" />
      <div className="leading-tight">
        <p className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-[#F2ECDF] min-[360px]:text-xl">
          Tranquil Rest
        </p>
        <p className="whitespace-nowrap text-[9px] uppercase tracking-[0.12em] text-[#BFB396] min-[400px]:text-[10px] sm:tracking-[0.25em]">
          {t.logoSub}
        </p>
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
  const { t } = useLang()
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#D8C9A3]/50 bg-[#D8C9A3]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9DFC7] shadow-[0_0_20px_-4px_rgba(216,201,163,0.5)]">
      <Sparkles className="h-3.5 w-3.5" />
      {t.rooms.comingSoon}
    </span>
  )
}

function LangToggle({ className = '' }) {
  const { t, lang, toggle } = useLang()
  return (
    <button
      type="button"
      onClick={() => {
        trackEvent('language_switch', { to: lang === 'en' ? 'si' : 'en' })
        toggle()
      }}
      aria-label={t.switchToLabel}
      lang={lang === 'en' ? 'si' : 'en'}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#D8C9A3]/30 px-2.5 py-1.5 sm:px-3 text-sm font-medium text-[#E9DFC7] transition hover:border-[#D8C9A3]/60 hover:bg-[#D8C9A3]/10 ${className}`}
    >
      <Languages className="h-4 w-4 text-[#3FB98A]" aria-hidden="true" />
      <span className="sm:hidden">{t.switchToShort}</span>
      <span className="hidden sm:inline">{t.switchTo}</span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  1. Navigation                                                      */
/* ------------------------------------------------------------------ */

function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { id: 'why-us', label: t.nav.why },
    { id: 'rooms', label: t.nav.rooms },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-[#D8C9A3]/10 bg-[#10241C]/90 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5 lg:px-8">
        <a href="#top" title={t.backToTop} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="flex items-center gap-3 lg:gap-7">
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="whitespace-nowrap text-sm font-medium tracking-wide text-[#E9DFC7]/80 transition hover:text-[#F2ECDF]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <LangToggle />

          <a
            href="#booking"
            className="hidden whitespace-nowrap rounded-full bg-[#D8C9A3] px-5 py-2.5 text-sm font-semibold text-[#10241C] shadow-md transition hover:-translate-y-0.5 hover:bg-[#E9DFC7] lg:inline-block"
          >
            {t.bookNow}
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-[#F2ECDF] lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[#D8C9A3]/10 px-5 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
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
              {t.bookNow}
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

const TRUST_ICONS = [ShieldCheck, Truck, Waves]

function Hero() {
  const { t } = useLang()
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden bg-gradient-to-br from-[#163A2C] via-[#10241C] to-[#0B1A14]"
    >
      {/* Portrait crop on phones, landscape on larger screens. fetchPriority=high: this is the LCP image. */}
      <picture>
        <source media="(max-width: 767px)" type="image/avif" srcSet={heroMobileAvif} />
        <source media="(max-width: 767px)" type="image/webp" srcSet={heroMobileWebp} />
        <source type="image/avif" srcSet={`${hero1280Avif} 1280w, ${hero1920Avif} 1920w`} sizes="100vw" />
        <img
          src={hero1280Webp}
          srcSet={`${hero1280Webp} 1280w, ${hero1920Webp} 1920w`}
          sizes="100vw"
          width="1920"
          height="1080"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      {/* Dark forest overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1F18]/85 via-[#10241C]/70 to-[#10241C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(14,31,24,0.55)_75%)]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-20 pt-32 text-center lg:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8C9A3]/30 bg-[#10241C]/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#E9DFC7] backdrop-blur sm:text-xs sm:tracking-[0.25em]">
          <ShieldCheck className="h-4 w-4 text-[#3FB98A]" />
          {t.hero.badge}
        </p>

        <h1 className="font-serif text-[clamp(1.6rem,8.2vw,2.25rem)] font-semibold leading-tight text-[#F7F2E7] sm:text-5xl lg:text-6xl">
          {t.hero.titleLead}
          <span className="whitespace-nowrap">{t.hero.titleTail}</span>
          <span className="block text-[#D8C9A3]">{t.hero.titleLine2}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#E9DFC7]/85 sm:text-lg">{t.hero.sub}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink(t.hero.waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'hero' })}
            className="group inline-flex items-center gap-3 rounded-full bg-[#0C7350] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#0C7350]/30 ring-1 ring-[#3FB98A]/40 transition hover:-translate-y-0.5 hover:bg-[#0E8A60]"
          >
            <MessageCircle className="h-5 w-5" />
            {t.hero.bookWA}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#rooms"
            className="rounded-full border border-[#D8C9A3]/40 px-8 py-4 text-base font-medium text-[#E9DFC7] transition hover:bg-[#D8C9A3]/10"
          >
            {t.hero.viewRooms}
          </a>
        </div>

        <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {t.hero.badges.map((label, i) => {
            const Icon = TRUST_ICONS[i]
            return (
              <li
                key={label}
                className="flex items-center justify-center gap-3 rounded-2xl border border-[#D8C9A3]/15 bg-[#10241C]/55 px-4 py-4 backdrop-blur-md sm:flex-col sm:gap-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C7350]/30 text-[#3FB98A] ring-1 ring-[#3FB98A]/30">
                  <Icon className="h-5 w-5" />
                </span>
                {/* "Main · note" renders the note as a smaller second line */}
                <span className="flex flex-col text-sm font-medium text-[#F2ECDF]">
                  {label.split(' · ')[0]}
                  {label.includes(' · ') && (
                    <span className="text-xs font-normal text-[#BFB396]">{label.split(' · ')[1]}</span>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Value propositions (with audience-specific WhatsApp CTAs)       */
/* ------------------------------------------------------------------ */

const AUDIENCES = [
  { key: 'corporate', icon: Briefcase, pointIcons: [ShieldCheck, Truck, Clock] },
  { key: 'family', icon: HeartHandshake, pointIcons: [Lock, Sparkles, Trees] },
]

function ValueProps() {
  const { t } = useLang()
  return (
    <section id="why-us" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />

        <div className="grid gap-8 md:grid-cols-2">
          {AUDIENCES.map(({ key, icon: Icon, pointIcons }) => {
            const a = t.why[key]
            return (
              <article
                key={key}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#D8C9A3]/12 bg-gradient-to-br from-[#1A3A2D] to-[#132C22] p-8 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#3FB98A]/40 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0C7350]/25 blur-3xl transition group-hover:bg-[#0C7350]/40" />
                <div className="relative flex flex-1 flex-col">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0C7350] text-white shadow-lg shadow-[#0C7350]/30">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C9A3]">{a.tag}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#F2ECDF]">{a.title}</h3>
                  <p className="mt-4 border-l-2 border-[#3FB98A] pl-4 text-lg font-medium leading-snug text-[#E9DFC7]">
                    {a.highlight}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {a.points.map((text, i) => {
                      const PIcon = pointIcons[i]
                      return (
                        <li key={text} className="flex items-start gap-3 text-[#BFB396]">
                          <PIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#3FB98A]" />
                          <span>{text}</span>
                        </li>
                      )
                    })}
                  </ul>
                  <a
                    href={waLink(a.ctaMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_click', { source: `audience_${key}` })}
                    className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full border border-[#3FB98A]/50 px-6 py-3 text-sm font-semibold text-[#E9DFC7] transition hover:border-[#3FB98A] hover:bg-[#0C7350] hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {a.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  4. Rooms & rates                                                   */
/* ------------------------------------------------------------------ */

const RATE_ROWS = [
  { key: 'day', icon: Sun },
  { key: 'night', icon: Moon },
  { key: 'short', icon: Clock },
]

function Rooms() {
  const { t } = useLang()
  return (
    <section id="rooms" className="relative bg-[#0E1F18] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.rooms.eyebrow} title={t.rooms.title} subtitle={t.rooms.subtitle} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Standard Non-AC – available */}
          <article className="relative flex flex-col rounded-3xl border border-[#3FB98A]/40 bg-gradient-to-b from-[#1A3A2D] to-[#132C22] p-8 shadow-2xl shadow-[#0C7350]/15 md:col-span-2 lg:col-span-1">
            <span className="absolute -top-3 left-8 rounded-full bg-[#0C7350] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              {t.rooms.available}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C7350]/30 text-[#3FB98A] ring-1 ring-[#3FB98A]/30">
              <BedDouble className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#F2ECDF]">{t.rooms.standardTitle}</h3>
            <p className="mt-2 text-sm text-[#BFB396]">{t.rooms.standardText}</p>

            <ul className="mt-6 flex-1 divide-y divide-[#D8C9A3]/10 rounded-2xl border border-[#D8C9A3]/10 bg-[#10241C]/50">
              {RATE_ROWS.map(({ key, icon: Icon }) => (
                <li key={key} className="flex items-center justify-between gap-3 px-5 py-4">
                  <span className="flex items-center gap-3 text-[#E9DFC7]">
                    <Icon className="h-4 w-4 shrink-0 text-[#D8C9A3]" />
                    {t.rooms.rateLabels[key]}
                  </span>
                  <span className="whitespace-nowrap text-right">
                    <span className="text-xs text-[#BFB396]">LKR </span>
                    <span className="font-serif text-2xl font-semibold text-[#F7F2E7]">
                      {RATES[key].toLocaleString('en-LK')}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#booking"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0C7350] px-6 py-3 font-semibold text-white transition hover:bg-[#0E8A60]"
            >
              {t.rooms.checkAvail} <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <ComingSoonCard icon={Snowflake} {...t.rooms.ac} />
          <ComingSoonCard icon={UtensilsCrossed} {...t.rooms.kitchen} />
        </div>
      </div>
    </section>
  )
}

function ComingSoonCard({ icon: Icon, title, text, features }) {
  const { t } = useLang()
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
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8C9A3]/60" />
            {f}
          </li>
        ))}
      </ul>
      <p className="relative mt-6 rounded-full border border-dashed border-[#D8C9A3]/25 px-6 py-3 text-center text-sm text-[#BFB396]">
        {t.rooms.launching}
      </p>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/*  5. WhatsApp booking engine                                         */
/* ------------------------------------------------------------------ */

const STAYS = ['night', 'day', 'short']
const VEHICLES = ['none', 'bike', 'car', 'lorry']
const ROOM_COUNTS = [1, 2, 3, 4, 5]
const GUEST_COUNTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const TIME = /^\d{2}:\d{2}$/
const DAY_MS = 86_400_000

const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

const nightsBetween = (a, b) =>
  ISO_DATE.test(a) && ISO_DATE.test(b) ? Math.round((new Date(`${b}T00:00:00`) - new Date(`${a}T00:00:00`)) / DAY_MS) : 0

function BookingEngine() {
  const { t } = useLang()
  const b = t.booking

  const [stay, setStay] = useState('night')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [rooms, setRooms] = useState(1)
  const [guests, setGuests] = useState(2)
  const [vehicle, setVehicle] = useState('none')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const today = todayISO()
  const rate = RATES[stay]
  const nights = stay === 'night' ? Math.max(0, nightsBetween(checkIn, checkOut)) : 0
  const total = stay === 'night' ? (nights > 0 ? rate * nights * rooms : null) : rate * rooms

  const handleSubmit = (e) => {
    e.preventDefault()

    // Allow-list every value before it goes into the message (defence in depth)
    if (
      !STAYS.includes(stay) ||
      !VEHICLES.includes(vehicle) ||
      !ROOM_COUNTS.includes(rooms) ||
      !GUEST_COUNTS.includes(guests)
    ) {
      setError(b.errors.invalid)
      return
    }

    if (stay === 'night') {
      if (!ISO_DATE.test(checkIn) || !ISO_DATE.test(checkOut)) return setError(b.errors.dates)
      if (checkIn < today) return setError(b.errors.past)
      if (nightsBetween(checkIn, checkOut) < 1) return setError(b.errors.order)
    } else {
      if (!ISO_DATE.test(date)) return setError(b.errors.dates)
      if (date < today) return setError(b.errors.past)
      if (!TIME.test(time)) return setError(b.errors.time)
    }
    setError('')

    const message = b.message({
      stay,
      stayLabel: b.stays[stay],
      nights,
      roomLabel: b.roomStandard,
      rooms,
      checkIn: stay === 'night' ? t.formatDate(checkIn) : '',
      checkOut: stay === 'night' ? t.formatDate(checkOut) : '',
      date: stay !== 'night' ? t.formatDate(date) : '',
      time,
      guests,
      vehicleLabel: b.vehicles[vehicle],
      total,
      name: name.trim().slice(0, 60),
    })

    trackEvent('whatsapp_booking', { stay, vehicle, rooms })
    window.open(waLink(message), '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full rounded-xl border border-[#D8C9A3]/20 bg-[#0E1F18] px-4 py-3.5 text-[#F2ECDF] outline-none transition placeholder:text-[#BFB396]/60 focus:border-[#3FB98A] focus:ring-2 focus:ring-[#3FB98A]/30 [color-scheme:dark]'
  const labelClass = 'mb-2 flex items-center gap-2 text-sm font-medium text-[#E9DFC7]'
  const errProps = error ? { 'aria-invalid': true, 'aria-describedby': 'booking-error' } : {}

  return (
    <section id="booking" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} />

        <div className="grid overflow-hidden rounded-3xl border border-[#D8C9A3]/12 shadow-2xl shadow-black/30 lg:grid-cols-5">
          {/* Info panel */}
          <div className="relative bg-[#0C7350] p-8 text-white sm:p-10 lg:col-span-2">
            <LogoMark className="absolute -bottom-6 -right-6 h-48 w-auto opacity-10" color="#ffffff" />
            <h3 className="relative font-serif text-2xl font-semibold">{b.howTitle}</h3>
            <ol className="relative mt-6 space-y-5">
              {b.steps.map((step, i) => (
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
              onClick={() => trackEvent('call_click', { source: 'booking_panel' })}
              className="relative mt-8 inline-flex items-center gap-2 text-sm text-white underline underline-offset-4 hover:no-underline"
            >
              <Phone className="h-4 w-4" /> {b.preferCall} {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="bg-[#1A3A2D] p-6 sm:p-10 lg:col-span-3">
            {/* Stay type */}
            <fieldset>
              <legend className={labelClass}>
                <Clock className="h-4 w-4 text-[#3FB98A]" /> {b.stayLabel}
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {STAYS.map((s) => (
                  <label
                    key={s}
                    className={`cursor-pointer rounded-xl border px-2 py-3 text-center transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#3FB98A]/50 ${
                      stay === s
                        ? 'border-[#3FB98A] bg-[#0C7350]/40 text-white'
                        : 'border-[#D8C9A3]/20 bg-[#0E1F18] text-[#E9DFC7] hover:border-[#D8C9A3]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="stay"
                      value={s}
                      checked={stay === s}
                      onChange={() => {
                        setStay(s)
                        setError('')
                      }}
                      className="sr-only"
                    />
                    <span className="block text-sm font-semibold leading-tight">{b.stays[s]}</span>
                    <span className={`mt-1 block text-xs ${stay === s ? 'text-[#E9DFC7]' : 'text-[#BFB396]'}`}>
                      {t.currency(RATES[s])} · {b.stayHints[s]}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {stay === 'night' ? (
                <>
                  <label className="block">
                    <span className={labelClass}>
                      <CalendarDays className="h-4 w-4 text-[#3FB98A]" /> {b.checkIn}
                    </span>
                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value)
                        if (checkOut && e.target.value >= checkOut) setCheckOut('')
                      }}
                      className={fieldClass}
                      required
                      {...errProps}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>
                      <CalendarDays className="h-4 w-4 text-[#3FB98A]" /> {b.checkOut}
                    </span>
                    <input
                      type="date"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className={fieldClass}
                      required
                      {...errProps}
                    />
                  </label>
                </>
              ) : (
                <>
                  <label className="block">
                    <span className={labelClass}>
                      <CalendarDays className="h-4 w-4 text-[#3FB98A]" /> {b.date}
                    </span>
                    <input
                      type="date"
                      min={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={fieldClass}
                      required
                      {...errProps}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>
                      <Clock className="h-4 w-4 text-[#3FB98A]" /> {b.arrival}
                    </span>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={fieldClass}
                      required
                      {...errProps}
                    />
                  </label>
                </>
              )}

              <label className="block sm:col-span-2">
                <span className={labelClass}>
                  <BedDouble className="h-4 w-4 text-[#3FB98A]" /> {b.room}
                </span>
                <select className={fieldClass} defaultValue="standard">
                  <option value="standard">{b.roomStandard}</option>
                  <option value="ac" disabled>
                    {b.roomAC}
                  </option>
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>
                  <BedDouble className="h-4 w-4 text-[#3FB98A]" /> {b.roomsCount}
                </span>
                <select value={rooms} onChange={(e) => setRooms(Number(e.target.value))} className={fieldClass}>
                  {ROOM_COUNTS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>
                  <Users className="h-4 w-4 text-[#3FB98A]" /> {b.guests}
                </span>
                <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={fieldClass}>
                  {GUEST_COUNTS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>
                  <Car className="h-4 w-4 text-[#3FB98A]" /> {b.vehicle}
                </span>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className={fieldClass}>
                  {VEHICLES.map((v) => (
                    <option key={v} value={v}>
                      {b.vehicles[v]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className={labelClass}>
                  <User className="h-4 w-4 text-[#3FB98A]" /> {b.name}
                </span>
                <input
                  type="text"
                  value={name}
                  maxLength={60}
                  autoComplete="name"
                  placeholder={b.namePh}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>

            {/* Live price estimate */}
            <div
              className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-[#3FB98A]/30 bg-[#0E1F18] px-5 py-4"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-[#3FB98A]" />
                <div>
                  <p className="text-sm font-medium text-[#E9DFC7]">{b.estimate}</p>
                  <p className="text-xs text-[#BFB396]">
                    {total ? b.breakdown({ rate, nights, rooms, stay }) : b.estimatePending}
                  </p>
                </div>
              </div>
              <p className="whitespace-nowrap font-serif text-2xl font-semibold text-[#F7F2E7]">
                {total ? t.currency(total) : '—'}
              </p>
            </div>
            <p className="mt-2 text-xs text-[#BFB396]">{b.estimateNote}</p>

            {error && (
              <p
                id="booking-error"
                role="alert"
                className="mt-5 rounded-xl border border-[#E8A87C]/30 bg-[#E8A87C]/10 px-4 py-3 text-sm text-[#F3C9A8]"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-[#0E1F18] shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#3EE07A]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              {b.submit}
            </button>

            <p className="mt-4 text-center text-sm text-[#E9DFC7]">
              {b.noWhatsApp}{' '}
              <a
                href={CONTACT.phoneHref}
                onClick={() => trackEvent('call_click', { source: 'booking_fallback' })}
                className="font-semibold text-[#3FB98A] underline underline-offset-4 hover:text-[#5FD3A4]"
              >
                {b.call} {CONTACT.phoneDisplay}
              </a>{' '}
              {b.or}{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-[#3FB98A] underline underline-offset-4 hover:text-[#5FD3A4]"
              >
                {b.email}
              </a>
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-[#BFB396]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#3FB98A]" />
              {b.privacy}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. FAQ                                                             */
/* ------------------------------------------------------------------ */

function Faq() {
  const { t } = useLang()
  return (
    <section id="faq" className="relative bg-[#0E1F18] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
        <div className="space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[#D8C9A3]/12 bg-[#132C22]/70 transition open:border-[#3FB98A]/40 open:bg-[#1A3A2D]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-[#F2ECDF] [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-[#3FB98A] transition group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-[#BFB396]">
                <p>{item.a}</p>
                {item.map && (
                  <a
                    href={LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 font-medium text-[#3FB98A] hover:text-[#5FD3A4]"
                  >
                    <MapPin className="h-4 w-4" /> {t.faq.mapLink}
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  7. Footer                                                          */
/* ------------------------------------------------------------------ */

function Footer() {
  const { t } = useLang()
  const socials = [
    { href: LINKS.facebook, label: 'Facebook', icon: FacebookIcon },
    { href: LINKS.instagram, label: 'Instagram', icon: InstagramIcon },
    { href: LINKS.maps, label: 'Google Maps', icon: MapPin },
    { href: waLink(t.waHello), label: 'WhatsApp', icon: MessageCircle },
  ]

  return (
    <footer id="contact" className="border-t border-[#D8C9A3]/10 bg-[#0B1A14] px-5 pb-20 pt-16 md:pb-0 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 pb-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#BFB396]">{t.footer.desc}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C9A3]">{t.footer.contact}</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3 text-[#E9DFC7]/85">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#3FB98A]" />
              <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2ECDF]">
                {t.footer.location}
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#E9DFC7]/85">
              <Phone className="h-5 w-5 shrink-0 text-[#3FB98A]" />
              <a
                href={CONTACT.phoneHref}
                onClick={() => trackEvent('call_click', { source: 'footer' })}
                className="hover:text-[#F2ECDF]"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#E9DFC7]/85">
              <Mail className="h-5 w-5 shrink-0 text-[#3FB98A]" />
              <a href={`mailto:${CONTACT.email}`} className="break-words hover:text-[#F2ECDF]">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C9A3]">{t.footer.follow}</h3>
          <div className="mt-5 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                onClick={() => label === 'WhatsApp' && trackEvent('whatsapp_click', { source: 'footer' })}
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
            {t.footer.directions} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-[#D8C9A3]/10 py-6 text-xs text-[#BFB396]/70 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Tranquil Rest – Kosnathota. {t.footer.rights}
        </p>
        <p>{t.footer.country}</p>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Quick contact: sticky Call / WhatsApp bar on phones,               */
/*  floating WhatsApp button on tablets and desktops                   */
/* ------------------------------------------------------------------ */

function MobileActionBar() {
  const { t } = useLang()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-[#D8C9A3]/15 bg-[#10241C]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <a
        href={CONTACT.phoneHref}
        onClick={() => trackEvent('call_click', { source: 'mobile_bar' })}
        className="flex items-center justify-center gap-2 rounded-full border border-[#D8C9A3]/40 py-3 font-semibold text-[#E9DFC7] active:bg-[#D8C9A3]/10"
      >
        <Phone className="h-4 w-4" /> {t.bar.call}
      </a>
      <a
        href={waLink(t.hero.waMsg)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { source: 'mobile_bar' })}
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-[#0E1F18] active:bg-[#3EE07A]"
      >
        <MessageCircle className="h-4 w-4" /> {t.bar.whatsapp}
      </a>
    </div>
  )
}

function FloatingWhatsApp() {
  const { t } = useLang()
  return (
    <a
      href={waLink(t.hero.waMsg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.chatAria}
      onClick={() => trackEvent('whatsapp_click', { source: 'floating' })}
      className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0E1F18] shadow-xl shadow-black/30 transition hover:scale-105 md:flex"
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
    <LanguageProvider>
      <div className="min-h-screen bg-[#10241C] font-sans text-[#F2ECDF] selection:bg-[#0C7350] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <ValueProps />
          <Rooms />
          <BookingEngine />
          <Faq />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileActionBar />
      </div>
      <Analytics />
    </LanguageProvider>
  )
}
