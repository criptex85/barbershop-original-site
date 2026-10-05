'use client';

import { Fragment, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock3,
  Globe2,
  ImagePlus,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Scissors,
  Star,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { languageOptions, translations, type Language } from './i18n';

const BOOKSY_URL =
  'https://booksy.com/es-es/9658_barbershop-original_barberia_29270_mijas';
const WHATSAPP_URL = 'https://wa.me/34674636323';
const INSTAGRAM_URL = 'https://www.instagram.com/original___barber';
const TIKTOK_URL = 'https://www.tiktok.com/@barbershoporiginal';
const GOOGLE_URL =
  'https://www.google.com/maps/search/?api=1&query=Barbershop+ORIGINAL+Centro+Comercial+El+Zoco+Mijas';

const socials = [
  { label: 'WhatsApp', href: WHATSAPP_URL, icon: MessageCircle },
  { label: 'Instagram', href: INSTAGRAM_URL, icon: Camera },
  { label: 'TikTok', href: TIKTOK_URL, icon: Music2 },
  { label: 'Google', href: GOOGLE_URL, icon: MapPin },
  { label: 'Booksy', href: BOOKSY_URL, icon: CalendarDays },
];

const gallerySlots: Array<{
  number: string;
  src: string | null;
  title: Record<Language, string> | null;
}> = Array.from(
  { length: 8 },
  (_, index) => ({
    number: String(index + 1).padStart(2, '0'),
    src: index === 0
      ? '/images/gallery/textured-crop-fade-01.jpg'
      : index === 1
        ? '/images/gallery/classic-taper-fade-02.jpg'
        : index === 2
          ? '/images/gallery/classic-skin-mid-fade-03.jpg'
          : index === 3
            ? '/images/gallery/platinum-fade-04.jpg'
            : index === 4
              ? '/images/gallery/modern-classic-05.jpg'
              : index === 5
                ? '/images/gallery/higher-tattoo-06.jpg'
                : index === 6
                  ? '/images/gallery/beard-grey-blending-07.jpg'
                  : index === 7
                    ? '/images/gallery/textured-mid-fade-08.jpg'
                    : null,
    title: index === 0
      ? { ru: 'Бёрст-фейд маллет', es: 'Mullet con burst fade', en: 'Burst Fade Mullet' }
      : index === 1
        ? { ru: 'Классический тейпер-фейд', es: 'Taper fade clásico', en: 'Classic taper fade' }
        : index === 2
          ? { ru: 'Классический Skin Mid Fade', es: 'Skin mid fade clásico', en: 'Classic skin mid fade' }
          : index === 3
            ? { ru: 'Платиновое преображение', es: 'Transformación platino', en: 'Platinum transformation' }
            : index === 4
              ? { ru: 'Современная классика', es: 'Clásico moderno', en: 'Modern classic' }
              : index === 5
                ? { ru: 'Hair Tattoo', es: 'Hair Tattoo', en: 'Hair Tattoo' }
                : index === 6
                  ? { ru: 'Камуфляж седины бороды', es: 'Camuflaje de canas en barba', en: 'Beard grey blending' }
                  : index === 7
                    ? { ru: 'Бёрст-фейд маллет', es: 'Mullet con burst fade', en: 'Burst Fade Mullet' }
                    : null,
  }),
);

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const t = translations[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('barbershop-language');
    if (savedLanguage === 'ru' || savedLanguage === 'es' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  useEffect(() => {
    if (activeGalleryIndex === null) return;

    const handleGalleryKeys = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setActiveGalleryIndex((current) =>
          current === null ? null : (current - 1 + gallerySlots.length) % gallerySlots.length,
        );
      }

      if (event.key === 'ArrowRight') {
        setActiveGalleryIndex((current) =>
          current === null ? null : (current + 1) % gallerySlots.length,
        );
      }
    };

    window.addEventListener('keydown', handleGalleryKeys);
    return () => window.removeEventListener('keydown', handleGalleryKeys);
  }, [activeGalleryIndex]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem('barbershop-language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <main>
      <section className="hero" id="home">
        <header className="site-header">
          <a className="brand" href="#home" aria-label={t.homeAria}>
            <img src="/images/logo.png" alt="Barbershop Original" />
            <span className="brand-copy">
              <strong><span>Barbershop</span><em>Original</em></strong>
              <small>Mijas Costa</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label={t.navAria}>
            <a href="#services">{t.nav.services}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#team">{t.nav.team}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contacts">{t.nav.contacts}</a>
          </nav>

          <div className="header-actions">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="language-trigger"
                aria-label={`${t.changeLanguage}. ${t.languageName}`}
              >
                <Globe2 aria-hidden="true" size={15} />
                <span>{language.toUpperCase()}</span>
                <ChevronDown aria-hidden="true" size={13} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={10} className="language-menu">
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.code}
                    className="language-option"
                    onClick={() => changeLanguage(option.code)}
                  >
                    <span className="language-code">{option.short}</span>
                    <span>{option.label}</span>
                    {language === option.code ? <Check className="language-check" size={14} /> : null}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Mijas Costa · Málaga</p>
          <h1>
            {t.heroLineOne}
            <br />
            <em>{t.heroLineTwo}</em>
          </h1>
          <p className="hero-copy">{t.heroCopy}</p>
          <div className="hero-actions">
            <a className="primary-button" href={BOOKSY_URL} target="_blank" rel="noreferrer">
              {t.bookOnline} <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a className="text-link" href="#services">
              {t.viewServices} <ArrowDownRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className="hero-contact-panel" aria-label={t.contactsKicker}>
          <div className="hero-contact-grid">
            <a className="hero-contact-item" href={GOOGLE_URL} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <span><small>{t.address}</small>Calle Los Adarves<br />CC El Zoco, Local 80<br />29649 Calahonda, Mijas Costa</span>
            </a>
            <a className="hero-contact-item" href="tel:+34674636323">
              <Phone aria-hidden="true" />
              <span><small>{t.phone}</small>+34 674 636 323</span>
            </a>
            <div className="hero-contact-item">
              <Clock3 aria-hidden="true" />
              <span><small>{t.openingHours}</small>{t.hoursWeekdays}<br />{t.hoursSaturday}<br />{t.hoursSunday}</span>
            </div>
          </div>
        </div>

        <nav className="hero-social-strip" aria-label={t.socialAria}>
          {socials.map(({ label, href, icon: Icon }, index) => (
            <Fragment key={label}>
              {index > 0 ? <Scissors className="hero-social-divider" aria-hidden="true" /> : null}
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </a>
            </Fragment>
          ))}
        </nav>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-image reveal-frame">
          <img src="/images/interior.jpeg" alt={t.interiorAlt} />
          <div className="since"><strong>10+</strong><span className="since-copy">{t.yearsMastery}</span></div>
        </div>
        <div className="about-copy">
          <p className="section-kicker">{t.aboutKicker}</p>
          <h2>{t.aboutLineOne}<br /><em>{t.aboutLineTwo}</em></h2>
          <p className="lead">{t.aboutLead}</p>
          <p>{t.aboutBody}</p>
          <ul className="checks">
            {t.aboutChecks.map((item) => <li key={item}><Check size={15} /> {item}</li>)}
          </ul>
          <a className="underlined-link" href={BOOKSY_URL} target="_blank" rel="noreferrer">
            {t.chooseTime} <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{t.servicesKicker}</p>
              <h2>{t.servicesHeading} <em>Original</em></h2>
            </div>
            <p>{t.servicesIntro}</p>
          </div>

          <div className="service-grid">
            {t.services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className="service-meta">
                  <span>{service.time}</span>
                  <strong>{service.price}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="service-cta">
            <span>{t.serviceExtras}</span>
            <a href={BOOKSY_URL} target="_blank" rel="noreferrer">{t.allServices} <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="section-shell">
          <div className="section-heading gallery-heading">
            <div>
              <p className="section-kicker">{t.galleryKicker}</p>
              <h2>{t.galleryHeadingOne} <em>{t.galleryHeadingTwo}</em></h2>
            </div>
            <p>{t.galleryIntro}</p>
          </div>

          <div className="gallery-grid">
            {gallerySlots.map((item, index) => (
              <button
                type="button"
                className="gallery-card"
                key={item.number}
                onClick={() => setActiveGalleryIndex(index)}
                aria-label={`${t.galleryOpenAria} ${index + 1}`}
              >
                {item.src ? (
                  <img src={item.src} alt={item.title?.[language] ?? `${t.gallerySlot} ${index + 1}`} />
                ) : (
                  <span className="gallery-placeholder" aria-hidden="true">
                    <ImagePlus size={30} strokeWidth={1.25} />
                    <strong>{item.number}</strong>
                  </span>
                )}
                <span className="gallery-card-meta">
                  <span><small>{t.gallerySlot}</small>{item.title?.[language] ?? t.galleryPlaceholder}</span>
                  <ArrowUpRight size={18} />
                </span>
              </button>
            ))}
          </div>

          <div className="gallery-footer">
            <p>{t.galleryReadyNote}</p>
            <div className="gallery-actions">
              <a className="primary-button" href={BOOKSY_URL} target="_blank" rel="noreferrer">
                {t.galleryBook} <CalendarDays size={18} />
              </a>
              <a className="gallery-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Camera size={18} /> {t.moreOnInstagram} <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="team section-shell" id="team">
        <div className="section-heading team-heading">
          <div>
            <p className="section-kicker">{t.teamKicker}</p>
            <h2>{t.teamHeadingOne} <em>{t.teamHeadingTwo}</em></h2>
          </div>
          <div className="rating">
            <strong>4.8</strong>
            <div><span><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></span><small>{t.reviews}</small></div>
          </div>
        </div>

        <div className="team-grid">
          <article className="barber-card">
            <div className="barber-photo"><img src="/images/tim.jpeg" alt={t.timAlt} /></div>
            <div className="barber-info"><div><p>{t.seniorBarber}</p><h3>Tim</h3></div></div>
            <a className="barber-book" href="tel:+34674636323"><Phone size={15} /> +34 674 636 323</a>
          </article>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-intro">
          <p className="section-kicker">{t.bookingKicker}</p>
          <h2>{t.bookingLineOne}<br /><em>{t.bookingLineTwo}</em></h2>
          <p>{t.bookingBody}</p>
          <a className="primary-button" href={BOOKSY_URL} target="_blank" rel="noreferrer">
            {t.openBooksy} <CalendarDays size={18} />
          </a>
        </div>
        <div className="booksy-frame">
          <div className="frame-top"><span>{t.bookingFrame}</span><span>Booksy</span></div>
          <iframe
            title={t.bookingFrameTitle}
            src="https://booksy.com/widget/index.html?id=9658&lang=es&country=es&mode=embed&theme=dark&background=1A1A1A&color=FFFFFF&secondary_color=1E293B&accent_color=FF6B00"
            loading="lazy"
          />
        </div>
      </section>

      <section className="contacts section-shell" id="contacts">
        <div className="contact-copy">
          <p className="section-kicker">{t.contactsKicker}</p>
          <h2>{t.contactsLineOne}<br /><em>{t.contactsLineTwo}</em></h2>
        </div>
        <a className="map" href={GOOGLE_URL} target="_blank" rel="noreferrer" aria-label={t.mapAria}>
          <iframe
            title={t.mapAria}
            src="https://www.google.com/maps?q=Centro%20Comercial%20El%20Zoco%20Local%2080%2C%20Mijas%20Costa&output=embed"
            loading="lazy"
            tabIndex={-1}
          />
          <span>{t.mapOpen} <ArrowUpRight size={17} /></span>
        </a>
      </section>

      <footer>
        <div className="footer-top section-shell">
          <div className="footer-brand"><img src="/images/logo.png" alt="" /><div><strong>Barbershop Original</strong><span>{t.footerSlogan}</span></div></div>
          <a className="footer-book" href={BOOKSY_URL} target="_blank" rel="noreferrer">{t.footerBook} <ArrowUpRight /></a>
        </div>
        <div className="footer-bottom section-shell"><span>© 2026 Barbershop Original · Mijas Costa</span><a href="#home">{t.toTop}</a></div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={t.whatsappAria}>
        <MessageCircle size={25} />
      </a>

      <Dialog
        open={activeGalleryIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveGalleryIndex(null);
        }}
      >
        <DialogContent className="gallery-lightbox" showCloseButton>
          <DialogTitle className="gallery-lightbox-title">
            {t.gallerySlot} {activeGalleryIndex === null ? '' : gallerySlots[activeGalleryIndex].number}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t.galleryDialogDescription}
          </DialogDescription>
          <div className="gallery-lightbox-stage">
            {activeGalleryIndex !== null && gallerySlots[activeGalleryIndex].src ? (
              <img
                src={gallerySlots[activeGalleryIndex].src ?? undefined}
                alt={gallerySlots[activeGalleryIndex].title?.[language] ?? `${t.gallerySlot} ${activeGalleryIndex + 1}`}
              />
            ) : (
              <div className="gallery-lightbox-placeholder">
                <ImagePlus size={46} strokeWidth={1.1} />
                <strong>
                  {activeGalleryIndex === null ? '' : gallerySlots[activeGalleryIndex].number}
                </strong>
                <span>{t.galleryPlaceholder}</span>
              </div>
            )}
          </div>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-previous"
            onClick={() =>
              setActiveGalleryIndex((current) =>
                current === null ? null : (current - 1 + gallerySlots.length) % gallerySlots.length,
              )
            }
            aria-label={t.previousPhoto}
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-next"
            onClick={() =>
              setActiveGalleryIndex((current) =>
                current === null ? null : (current + 1) % gallerySlots.length,
              )
            }
            aria-label={t.nextPhoto}
          >
            <ChevronRight size={26} />
          </button>
        </DialogContent>
      </Dialog>
    </main>
  );
}
