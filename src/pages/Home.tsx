import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Award,
  Clock,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'
import { MediaLightbox, LightboxItem } from '../components/ui/MediaLightbox'
import { RFQModal } from '../components/ui/RFQModal'
import { siteConfig } from '../config/site'
import { mediaManifest } from '../data/mediaManifest'
import { walkthroughVideos } from '../data/videos'

export function Home() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  // Lightbox state for project highlights
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0)

  // RFQ modal state
  const [rfqOpen, setRfqOpen] = useState(false)

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Select verified highlight images from manifest with exact valid IDs
  const highlightAssets = mediaManifest.filter((m) =>
    ['renovation-04', 'pool-02', 'landscaping-02', 'renovation-01', 'civil-01', 'landscaping-04'].includes(m.id)
  )

  const lightboxItems: LightboxItem[] = highlightAssets.map((asset) => ({
    url: asset.optimizedPath,
    title: isArabic ? asset.altAr : asset.alt,
    category: asset.category.toUpperCase(),
    note: isArabic
      ? 'صورة أصلية من مكتبة مشاريع أكتس المنجزة في الإمارات.'
      : 'Authentic project photograph from ACTS UAE portfolio.',
  }))

  const handleOpenPhoto = (index: number) => {
    setCurrentPhotoIdx(index)
    setLightboxOpen(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // FAQ Data with confirmed UAE contractor credentials & regulations
  const faqs = isArabic
    ? [
        {
          q: 'هل شركة أكتس مسجلة ومعتمدة لدى المطورين الرئيسيين في دبي؟',
          a: 'نعم، شركة أكتس (ACTS) مقاول مسجل ومعتمد رسمياً لدى شركاء مشاريع في الإمارات في الإمارات، ونقوم بالتنسيق المباشر مع بلدية دبي وتراخيص وكافة المطورين لاستخراج تصاريح التجديد والتعديلات الهندسية.',
        },
        {
          q: 'ما هي فترة الضمان المقدمة على مشاريع التجديد والتأهيل؟',
          a: 'نقدم ضماناً رسمياً يمتد من سنتين إلى 3 سنوات (2-3 Years) على كافة أعمال التجديد والتأهيل والتشطيبات الكهروميكانيكية والإنشائية في دبي، مما يمنح عملاءنا راحة بال تامة وجودة تدوم طويلاً.',
        },
        {
          q: 'كم تبلغ خبرة الشركة وسجل مشاريعها في الإمارات؟',
          a: 'تمتلك الشركة سجلاً مؤسسياً يمتد لـ 10 سنوات كشركة مسجلة في الدولة، مدعوماً بأكثر من 22 عاماً من الخبرة الهندسية والحرفية لكوادرنا الإدارية والميدانية، وأنجزنا بنجاح أكثر من 50+ مشروعاً راقياً في الدولة.',
        },
        {
          q: 'هل يتوفر فريق دعم ميداني وطوارئ على مدار الساعة؟',
          a: 'نعم، يتوفر دعمنا 24/7 في حالات الطوارئ فقط وعن طريق الاتصال فقط للاستجابة السريعة عند الحاجة.',
        },
      ]
    : [
        {
          q: 'Can ACTS coordinate permits and project requirements?',
          a: 'Yes, our team coordinates with project stakeholders and Dubai Municipality to secure mandatory permits and NOCs before work begins.',
        },
        {
          q: 'What warranty is provided for renovation and refurbishment projects?',
          a: 'For comprehensive renovation and refurbishment projects in Dubai, ACTS provides an official 2 to 3 years warranty covering structural finishes, architectural joinery, plumbing, and integrated MEP systems.',
        },
        {
          q: 'What is ACTS company track record and industry experience?',
          a: 'ACTS has 10 years of established corporate history in the UAE, backed by 22 years of hands-on engineering and technical craftsmanship. We have completed over 50+ prestigious villa, pool, and commercial projects across the Emirates.',
        },
        {
          q: 'How does your 24/7 active support and site management operate?',
          a: 'Our dedicated project managers and technical dispatch are 24/7 active only in emergency conditions, and only via call, for urgent response across Dubai and the UAE.',
        },
      ]

  return (
    <>
      <SEOHead
        title={t('hero.headline').split('\n')[0]}
        description={t('hero.subheadline')}
        canonicalUrl="/"
      />

      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/hero-uae-skyline.jpg"
            alt={t('hero.imageAlt')}
            className="hero__img"
            width={1376}
            height={768}
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <span
            className="section-label"
            style={{
              color: 'var(--color-gold-light)',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            {isArabic
              ? 'مقاول مسجل لدى شركاء مشاريع في الإمارات • 10 سنوات شركة • 22 سنة خبرة'
              : 'UAE Project Partners • 10 Years Company • 22 Years Experience'}
          </span>

          <h1 className="hero__headline">
            {isArabic ? (
              <>
                نُحوّل المساحات. <em>نرتقي بالمعايير.</em>
              </>
            ) : (
              <>
                Transforming Spaces. <br />
                <em>Elevating Standards.</em>
              </>
            )}
          </h1>

          <p className="hero__sub">{t('hero.subheadline')}</p>

          <div className="hero__cta">
            <Link to="/services" className="btn btn--primary btn--lg">
              <span>{isArabic ? 'استكشف الخدمات' : 'Explore Services'}</span>
              <ArrowRight size={18} />
            </Link>

            <button
              type="button"
              className="btn btn--outline btn--lg"
              onClick={() => setRfqOpen(true)}
              style={{ color: '#fff', borderColor: 'var(--color-gold)' }}
            >
              <span>{isArabic ? 'طلب استشارة فورية' : 'Request Consultation'}</span>
            </button>

            <a
              href={`tel:${siteConfig.phone}`}
              className="btn btn--ghost btn--lg"
              aria-label={t('hero.callNowAriaLabel')}
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              <Phone size={18} />
              <span>{t('hero.callNow')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Verified Client Credentials Trust Strip ──────────────── */}
      <section className="trust-credentials-bar reveal-on-scroll">
        <div className="trust-badge-item">
          <div className="trust-badge-item__icon">
            <ShieldCheck size={22} />
          </div>
          <div>
            <span className="trust-badge-item__highlight">
              {isArabic ? 'مقاول مسجل ومعتمد' : 'Registered Contractor'}
            </span>
            <span>UAE Project Partners</span>
          </div>
        </div>

        <div className="trust-badge-item">
          <div className="trust-badge-item__icon">
            <Award size={22} />
          </div>
          <div>
            <span className="trust-badge-item__highlight">
              {isArabic ? 'ضمان التجديد والتأهيل' : 'Renovation Warranty'}
            </span>
            <span>{isArabic ? 'ضمان موثوق وجودة ثابتة' : 'Trusted quality warranty'}</span>
          </div>
        </div>

        <div className="trust-badge-item">
          <div className="trust-badge-item__icon">
            <Clock size={22} />
          </div>
          <div>
            <span className="trust-badge-item__highlight">
              {isArabic ? 'الخبرة والتأسيس' : 'Track Record'}
            </span>
            <span>{isArabic ? '10 سنوات شركة • 22 سنة خبرة' : '10 Yrs Company • 22 Yrs Exp'}</span>
          </div>
        </div>

        <div className="trust-badge-item">
          <div className="trust-badge-item__icon">
            <Activity size={22} />
          </div>
          <div>
            <span className="trust-badge-item__highlight">
              {isArabic ? 'دعم وجاهزية' : 'Response & Scale'}
            </span>
            <span>{isArabic ? 'طوارئ 24/7 عبر الاتصال • 50+ مشروع' : '24/7 Emergency Call Support • 50+ Projects'}</span>
          </div>
        </div>
      </section>

      <section className="quality-promise reveal-on-scroll" aria-label={isArabic ? 'التزام الجودة' : 'Quality promise'}>
        <div className="container quality-promise__inner">
          <div>
            <span className="section-label">{isArabic ? 'وعد أكتس' : 'The ACTS quality promise'}</span>
            <h2>{isArabic ? 'جودة واضحة في كل قطعة وكل مرحلة.' : 'Quality you can see in every part and every phase.'}</h2>
          </div>
          <div className="quality-promise__items">
            <span>{isArabic ? 'قطع غيار أصلية' : 'Genuine spare parts'}</span>
            <span>{isArabic ? 'مواد عالية الجودة' : 'High-quality materials'}</span>
            <span>{isArabic ? 'لا تنازل عن الجودة' : 'No compromise in quality'}</span>
          </div>
        </div>
      </section>

      {/* ─── Company Overview Section ───────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="company-intro">
            <div>
              <span className="section-label reveal-badge">{t('home.introTitle')}</span>
              <h2 className="section-title reveal-text delay-1">
                {isArabic
                  ? 'شريكك الموثوق في مقاولات التجديد والتأهيل الهندسي'
                  : 'Your Turnkey Partner for Renovation & Technical Excellence'}
              </h2>
              <div className="gold-line reveal-text delay-2" />
              <p className="company-intro__text reveal-text delay-2" style={{ marginBottom: '1.25rem' }}>
                {t('home.introText')}
              </p>
              <p className="company-intro__text reveal-text delay-3">
                {isArabic
                  ? 'نحن ندمج بين الحرفية العالية، والإدارة الهندسية الصارمة للمشاريع، والالتزام بالمواعيد المحددة لنقدم حلولاً متكاملة ترفع من قيمة عقارك وجودة معيشتك في دولة الإمارات، مع تقديم ضمان رسمي يمتد من سنتين إلى ثلاث سنوات على التجديد في دبي.'
                  : 'We blend master craftsmanship, disciplined engineering management, and transparent budgeting to deliver enduring spaces that exceed the exacting standards of UAE homeowners and property investors — backed by an official 2 to 3 years warranty on Dubai renovation projects.'}
              </p>

              {/* Developer registration pill tag */}
              <div className="reveal-text delay-4" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="developer-pill">
                  <CheckCircle2 size={15} />
                  <span>{isArabic ? 'شركاء مشاريع في الإمارات' : 'UAE Project Partners'}</span>
                </span>
                <span className="developer-pill">
                  <CheckCircle2 size={15} />
                  <span>{isArabic ? 'في جميع أنحاء الإمارات' : 'All over the UAE'}</span>
                </span>
                <span className="developer-pill">
                  <Activity size={15} />
                  <span>{isArabic ? 'قطع أصلية ومواد عالية الجودة' : 'Genuine Parts & Quality Materials'}</span>
                </span>
              </div>
            </div>

            {/* 6 Key Verified Stats Grid */}
            <div className="company-intro__stats">
              <div className="stat-item reveal-stat delay-1">
                <div className="stat-item__number">10</div>
                <div className="stat-item__label">
                  {isArabic ? 'سنوات كشركة إماراتية معتمدة' : 'Years Established Company'}
                </div>
              </div>
              <div className="stat-item reveal-stat delay-2">
                <div className="stat-item__number">22</div>
                <div className="stat-item__label">
                  {isArabic ? 'عاماً من الخبرة الهندسية والحرفية' : 'Years Industry Experience'}
                </div>
              </div>
              <div className="stat-item reveal-stat delay-3">
                <div className="stat-item__number">50+</div>
                <div className="stat-item__label">
                  {isArabic ? 'مشروعاً منجزاً بنجاح في الدولة' : 'Projects Completed Across UAE'}
                </div>
              </div>
              <div className="stat-item reveal-stat delay-4">
                <div className="stat-item__number">2–3</div>
                <div className="stat-item__label">
                  {isArabic ? 'سنوات ضمان على التجديد في دبي' : 'Years Renovation Warranty (Dubai)'}
                </div>
              </div>
              <div className="stat-item reveal-stat delay-5">
                <div className="stat-item__number">24/7</div>
                <div className="stat-item__label">
                  {isArabic ? 'استجابة وإشراف ميداني متواصل' : 'Active Field & Site Support'}
                </div>
              </div>
              <div className="stat-item reveal-stat delay-6">
                <div className="stat-item__number" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
                  UAE-Wide Coverage
                </div>
                <div className="stat-item__label">
                  {isArabic ? 'مقاول مسجل لدى كبار المطورين' : 'Registered Master Contractor'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Renovation & Refurbishment Showcase ─────────────────── */}
      <section className="section renovation-feature">
        <div className="container">
          <div className="renovation-feature__grid">
            <div className="renovation-feature__img-wrap reveal-scale">
              <img
                src="/media/images/renovation-refurbishment/villa-exterior-marble-tiling.jpg"
                alt={isArabic ? 'مشروع تجديد فيلا مع درج رخامي وتكسيات حجرية في دبي' : 'ACTS luxury villa renovation with illuminated marble entrance steps and stone cladding in Dubai'}
                loading="lazy"
              />
              <span className="renovation-feature__badge">
                <ShieldCheck size={14} style={{ flexShrink: 0 }} />
                <span>{isArabic ? 'ضمان 2–3 سنوات في دبي' : '2–3 Years Dubai Warranty'}</span>
              </span>
            </div>

            <div>
              <span className="section-label reveal-badge">{t('home.renovationSubtitle')}</span>
              <h2 className="section-title reveal-text delay-1">{t('home.renovationTitle')}</h2>
              <div className="gold-line reveal-text delay-2" />
              <p className="reveal-text delay-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {t('home.renovationText')}
              </p>

              <ul className="renovation-feature__list reveal-on-scroll delay-3">
                <li className="renovation-feature__list-item">
                  <span>
                    <strong>{isArabic ? 'التجديد الإنشائي والداخلي:' : 'Structural & Interior Remodeling:'}</strong>{' '}
                    {isArabic
                      ? 'إعادة توزيع المساحات، الجدران، الأسقف المعلقة، وتكسيات الرخام والبورسلين.'
                      : 'Layout reconfiguration, structural adjustments, gypsum ceilings, and bespoke marble tiling.'}
                  </span>
                </li>
                <li className="renovation-feature__list-item">
                  <span>
                    <strong>{isArabic ? 'الأنظمة الكهروميكانيكية والتكييف:' : 'Integrated MEP & Climate Control:'}</strong>{' '}
                    {isArabic
                      ? 'تحديث التمديدات الكهربائية، لوحات التوزيع، وحدات التكييف المركزي، وتمديدات السباكة.'
                      : 'High-efficiency AC upgrades, automated smart lighting, DB boards, and concealed plumbing.'}
                  </span>
                </li>
                <li className="renovation-feature__list-item">
                  <span>
                    <strong>{isArabic ? 'المسابح والمساحات الخارجية:' : 'Swimming Pools & Outdoor Living:'}</strong>{' '}
                    {isArabic
                      ? 'بناء المسابح، المطابخ الخارجية، البرجولات، والعشب الصناعي وأنظمة الإنارة الليلية.'
                      : 'Custom concrete pools, water features, luxury pergolas, artificial turf, and landscape lighting.'}
                  </span>
                </li>
                <li className="renovation-feature__list-item">
                  <span>
                    <strong>{isArabic ? 'الضمان والموافقات الرسمية:' : 'Warranty & Approvals:'}</strong>{' '}
                    {isArabic
                      ? 'ضمان رسمي من 2 إلى 3 سنوات على التجديد في دبي مع إجراءات مرخصة لدى شركاء مشاريع في الإمارات والبلدية.'
                      : 'For renovation and refurbishment, we normally provide a 2–3 years warranty in Dubai, with work delivered to high UAE project standards.'}
                  </span>
                </li>
              </ul>

              <div className="reveal-on-scroll delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/services/villa-renovation-refurbishment" className="btn btn--primary">
                  <span>{t('home.renovationCta')}</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setRfqOpen(true)}
                >
                  {isArabic ? 'طلب استشارة للموقع' : 'Book Site Consultation'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Pillars Grid (6 Disciplined & Framed Cards) ──── */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="section-label reveal-badge">{isArabic ? 'خدماتنا الشاملة' : 'Our Capabilities'}</span>
            <h2 className="section-title reveal-text delay-1">
              {isArabic ? 'حلول هندسية متكاملة تحت سقف واحد' : 'Comprehensive Technical & Contracting Services'}
            </h2>
            <div className="gold-line reveal-text delay-2" style={{ margin: '0.75rem auto 1.25rem' }} />
            <p className="section-intro reveal-text delay-3" style={{ margin: '0 auto' }}>
              {isArabic
                ? 'نقدم منظومة خدمات شاملة تغطي جميع مراحل البناء والتشطيب والصيانة في دولة الإمارات.'
                : 'From private luxury residences to commercial facilities, we provide multi-disciplinary engineering and contracting solutions.'}
            </p>
          </div>

          <div className="services-grid">
            {/* 1. Renovation */}
            <Link to="/services/villa-renovation-refurbishment" className="service-card reveal-card delay-1">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/renovation-refurbishment/villa-exterior-pool-garden.jpg"
                  alt="ACTS luxury villa renovation with pool, garden, and marble finishes in Dubai"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'ضمان 2-3 سنوات' : '2–3 Yrs Warranty'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'تجديد وتأهيل' : 'Renovation & Fit-Out'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'تجديد وتأهيل الفلل السكنية' : 'Villa Renovation & Refurbishment'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'إدارة شاملة لمشاريع تجديد الفلل من الأعمال الإنشائية وتكسيات الرخام والأسقف الجبسية حتى التشطيب الكامل.'
                    : 'Turnkey villa transformations covering structural changes, bespoke marble, gypsum, MEP, and finishes.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* 2. Swimming Pools */}
            <Link to="/services/swimming-pool-construction" className="service-card reveal-card delay-2">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/swimming-pools/pool-completed-with-garden.jpg"
                  alt="Completed mosaic swimming pool with artificial turf and landscaped garden"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'مسابح وشلالات' : 'Custom Pools'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'مسابح وهندسة مائية' : 'Swimming Pools'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'بناء وتجهيز المسابح الخرسانية' : 'Swimming Pool Construction'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'تصميم وتنفيذ المسابح بنظام الخرسانة المقذوفة (Shotcrete)، أنظمة الفلترة المتقدمة، وتدفئة وتبريد المياه.'
                    : 'Shotcrete pools, luxury mosaic finishes, pump filtration rooms, chillers, and underwater lighting.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* 3. Landscape */}
            <Link to="/services/landscaping" className="service-card reveal-card delay-3">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/landscaping-outdoor/landscaping-garden-steppers.jpg"
                  alt="Stepping stone garden path with artificial grass and outdoor living area"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'حدائق ومساحات خارجية' : 'Landscaping'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'حدائق ومناظر طبيعية' : 'Landscaping & Outdoors'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'تنسيق الحدائق والمناظر الطبيعية' : 'Landscape Gardening & Hardscaping'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'تصميم الحدائق المتكاملة، زراعة النخيل والأشجار، شبكات الري الأوتوماتيكية، البرجولات الخشبية، والممرات.'
                    : 'Bespoke garden architecture, automated irrigation, palm curation, pergolas, and natural stone paving.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* 4. Joinery */}
            <Link to="/services/carpentry" className="service-card reveal-card delay-1">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/renovation-refurbishment/villa-entrance-carpentry-door.jpg"
                  alt="Premium arched hardwood entrance door with decorative glass panels"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'أخشاب صلبة' : 'Hardwood Joinery'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'نجارة وتشطيبات خشبية' : 'Joinery & Woodwork'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'أبواب المداخل وأعمال النجارة المخصصة' : 'Entrance Doors & Architectural Joinery'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'أبواب مداخل رئيسية مصنعة من الأخشاب الصلبة المقاومة للطقس، خزائن مدمجة، وتكسيات جدارية راقية.'
                    : 'Weather-resistant solid hardwood main entrance doors, luxury wardrobes, and wall paneling.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* 5. Tiling & Stone Cladding */}
            <Link to="/services/civil-works" className="service-card reveal-card delay-2">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/renovation-refurbishment/stone-cladding-water-feature.jpg"
                  alt="Stone cladding water feature with ambient LED lighting in villa"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'أعمال مدنية' : 'Civil Works'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'أعمال مدنية وإنشائية' : 'Civil & Stone Works'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'تكسيات الحجر الطبيعي والأعمال المدنية' : 'Civil Works & Exterior Stone Cladding'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'أعمال البناء، الجدران الاستنادية، تكسيات الواجهات بالحجر الطبيعي، والشلالات الجدارية بدقة هندسية عالية.'
                    : 'Structural blockwork, boundary walls, luxury exterior stone cladding, and architectural water features.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* 6. Parking Sheds */}
            <Link to="/services/parking-sheds" className="service-card reveal-card delay-3">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/civil-works/parking-shed-construction.jpg"
                  alt="Steel frame parking shed under construction at UAE villa"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'هياكل فولاذية' : 'Tensile Shades'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'إنشاءات خارجية ومظلات' : 'Outdoor Structures'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'مظلات السيارات والبرجولات' : 'Car Parking & Pergolas'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'تصنيع وتركيب مظلات السيارات من أقمشة PTFE/PVC المعالجة ضد الأشعة فوق البنفسجية وهياكل فولاذية معتمدة.'
                    : 'High-grade cantilever tensile shade structures engineered for extreme UAE weather and UV resistance.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* 7. Home Automation */}
            <Link to="/services/home-automation" className="service-card reveal-card delay-1">
              <div className="service-card__img-wrap">
                <img
                  src="/media/images/client-services/home-automation.png"
                  alt="Modern home automation and integrated smart controls for a UAE residence"
                  className="service-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-card__badge">
                  {isArabic ? 'حلول ذكية' : 'Smart Living'}
                </span>
              </div>
              <div className="service-card__body">
                <div className="service-card__category">{isArabic ? 'أتمتة المنازل' : 'Home Automation'}</div>
                <h3 className="service-card__title">
                  {isArabic ? 'أتمتة منزلية عصرية ومتكاملة' : 'Modern Home Automation Solutions'}
                </h3>
                <p className="service-card__desc">
                  {isArabic
                    ? 'حلول احترافية للتحكم الذكي بالإضاءة والمناخ والأمان، مصممة لتتكامل بسلاسة مع أنظمة المنزل.'
                    : 'Modern, professional smart-home solutions integrating lighting, climate, and security controls for effortless daily living.'}
                </p>
                <div className="service-card__link">
                  <span>{isArabic ? 'تفاصيل الخدمة' : 'View Specialization'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>

          <div className="reveal-on-scroll delay-2" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn--outline btn--lg">
              <span>{isArabic ? 'عرض جميع التخصصات والخدمات' : 'Explore All Specializations'}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Project Highlights Gallery ─────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label reveal-badge">{t('home.featuredProjectsTitle')}</span>
              <h2 className="section-title reveal-text delay-1">
                {isArabic ? 'أبرز مشاريعنا المنجزة في الإمارات' : 'Selected Project Highlights Across the UAE'}
              </h2>
              <div className="gold-line reveal-text delay-2" />
            </div>

            <Link to="/projects" className="btn btn--ghost reveal-on-scroll delay-2" style={{ color: 'var(--color-gold)' }}>
              <span>{isArabic ? 'عرض معرض المشاريع (50+ مشروع)' : 'View Full Portfolio (50+ Projects)'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gallery-grid">
            {highlightAssets.map((asset, index) => (
              <div
                key={asset.id}
                className={`gallery-card reveal-card delay-${(index % 3) + 1}`}
                onClick={() => handleOpenPhoto(index)}
                style={{ cursor: 'pointer' }}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && handleOpenPhoto(index)}
                aria-label={`View ${asset.alt}`}
              >
                <img
                  src={asset.optimizedPath}
                  alt={isArabic ? asset.altAr : asset.alt}
                  className="gallery-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-card__overlay">
                  <span className="gallery-card__cat">{asset.category.toUpperCase()}</span>
                  <p className="gallery-card__title">{isArabic ? asset.altAr : asset.alt}</p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', display: 'block', marginTop: '0.25rem' }}>
                    {isArabic ? 'انقر لتكبير الصورة ومعاينة التفاصيل' : 'Click to enlarge and inspect detail'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: '2rem' }}>
            <span className="section-label reveal-badge">{isArabic ? 'جولات الموقع' : 'Site Walkthroughs'}</span>
            <h2 className="section-title reveal-text delay-1">{isArabic ? 'شاهد جودة التنفيذ' : 'See the Work in Motion'}</h2>
            <div className="gold-line reveal-text delay-2" />
            <p className="section-intro reveal-text delay-3">
              {isArabic
                ? 'جولات فيديو حقيقية من أعمال ACTS الفنية ومواقع المشاريع.'
                : 'Real walkthrough footage from ACTS technical work and project sites.'}
            </p>
          </div>
          <div className="video-grid">
            {walkthroughVideos.map((video, index) => (
              <article key={video.id} className={`video-card reveal-card delay-${index + 1}`}>
                <video
                  autoPlay
                  loop
                  muted
                  preload="none"
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  aria-label={isArabic ? video.titleAr : video.title}
                  poster={video.poster || undefined}
                  style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="video-card__body">
                  <span className="gallery-card__body-category">{isArabic ? 'جولة ميدانية' : 'FIELD WALKTHROUGH'}</span>
                  <h3>{isArabic ? video.titleAr : video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us: 4 Verified Client Pillars ─────────────── */}
      <section className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="section-label reveal-badge">{isArabic ? 'مميزات أكتس' : 'The ACTS Distinction'}</span>
            <h2 className="section-title reveal-text delay-1">{t('home.whyChooseTitle')}</h2>
            <div className="gold-line reveal-text delay-2" style={{ margin: '0.75rem auto 1.25rem' }} />
            <p className="section-intro reveal-text delay-3" style={{ margin: '0 auto' }}>
              {isArabic
                ? 'نقدم معايير مقاولات مؤسسية تجمع بين الاعتمادات الرسمية لدى كبار المطورين وضمانات التنفيذ الحقيقية.'
                : 'Institutional-grade contracting combining master developer pre-qualification with guaranteed warranty standards.'}
            </p>
          </div>

          <div className="why-grid">
            {/* Pillar 1: UAE-Wide Coverage */}
            <div className="why-card reveal-card delay-1">
              <div className="why-card__icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="why-card__title">
                {isArabic ? 'مقاول مسجل لدى شركاء مشاريع في الإمارات' : 'Registered with UAE-Wide Coverage'}
              </h3>
              <p className="why-card__text">
                {isArabic
                  ? 'شركة مقاولات معتمدة ومسجلة رسمياً لدى شركاء مشاريع في الإمارات في الإمارات، مما يضمن استخراج التصاريح وانسيابية العمل في أرقى المجمعات.'
                  : 'Officially accredited contractor with UAE project partners, qualified to execute structural, architectural, MEP, and landscaping works.'}
              </p>
            </div>

            {/* Pillar 2: 2-3 Years Warranty */}
            <div className="why-card reveal-card delay-2">
              <div className="why-card__icon">
                <Award size={24} />
              </div>
              <h3 className="why-card__title">
                {isArabic ? 'ضمان 2-3 سنوات على التجديد' : '2–3 Years Renovation Warranty'}
              </h3>
              <p className="why-card__text">
                {isArabic
                  ? 'نمنح ضماناً رسمياً موثقاً من سنتين إلى 3 سنوات على مشاريع تجديد وتأهيل الفلل في دبي يغطي الأعمال المدنية والتشطيبات والسباكة والكهرباء.'
                  : 'Comprehensive 2 to 3 years warranty on all villa renovation and refurbishment projects across Dubai, safeguarding your real estate investment.'}
              </p>
            </div>

            {/* Pillar 3: 10 Years Company & 22 Years Experience */}
            <div className="why-card reveal-card delay-3">
              <div className="why-card__icon">
                <Clock size={24} />
              </div>
              <h3 className="why-card__title">
                {isArabic ? '10 سنوات تأسيس و22 سنة خبرة' : '10 Yrs Company • 22 Yrs Experience'}
              </h3>
              <p className="why-card__text">
                {isArabic
                  ? 'عقد كامل من التواجد المؤسسي الراسخ في الإمارات مدعوماً بأكثر من 22 عاماً من الحرفية الهندسية الميدانية في المشاريع السكنية والتجارية.'
                  : 'A 10-year corporate track record in Dubai anchored by over 22 years of senior hands-on engineering, contracting, and site execution.'}
              </p>
            </div>

            {/* Pillar 4: 50+ Projects & Emergency Call Support */}
            <div className="why-card reveal-card delay-4">
              <div className="why-card__icon">
                <Activity size={24} />
              </div>
              <h3 className="why-card__title">
                {isArabic ? '50+ مشروعاً منجزاً • طوارئ 24/7 عبر الاتصال' : '50+ Projects • 24/7 Emergency Call Support'}
              </h3>
              <p className="why-card__text">
                {isArabic
                  ? 'محفظة تضم أكثر من 50 مشروعاً منجزاً في كافة إمارات الدولة مع دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
                  : 'Proven delivery of 50+ luxury projects across the UAE, with 24/7 active support only in emergency conditions and via call only.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACTS Emergency Response ───────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <span className="section-label reveal-badge">{isArabic ? 'استجابة الطوارئ' : 'Emergency Response'}</span>
            <h2 className="section-title reveal-text delay-1">
              {isArabic ? 'دعم فني وميداني متاح على مدار الساعة' : '24/7 Emergency Support When You Need It'}
            </h2>
            <div className="gold-line reveal-text delay-2" style={{ margin: '0.75rem auto 1.25rem' }} />
            <p className="section-intro reveal-text delay-3" style={{ margin: '0 auto' }}>
              {isArabic
                ? 'فريق ACTS مستعد للتحرك بسرعة عند حدوث أي طارئ، مع دعم فني وميداني منسق.'
                : 'ACTS coordinates fast technical and on-site support whenever an urgent situation occurs.'}
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal-card delay-1">
              <div className="why-card__icon"><Activity size={24} /></div>
              <h3 className="why-card__title">{isArabic ? 'دعم طوارئ MEP على مدار الساعة' : '24/7 MEP Emergency Support'}</h3>
              <p className="why-card__text">
                {isArabic
                  ? 'فريق MEP لدينا متاح 24/7 لحالات الطوارئ ويمكنه الاستجابة كلما دعت الحاجة إلى دعم فني عاجل.'
                  : 'Our MEP team is 24/7 active only in emergency conditions and via call only, responding whenever urgent technical support is required.'}
              </p>
            </div>
            <div className="why-card reveal-card delay-3">
              <div className="why-card__icon"><Phone size={24} /></div>
              <h3 className="why-card__title">{isArabic ? 'ACTS — فريق الاستجابة للطوارئ' : 'ACTS – Emergency Response Team'}</h3>
              <p className="why-card__text">
                {isArabic
                  ? 'اسم ACTS يعكس مهمتنا: نتحرك بسرعة عند تلقي الاتصال. فريقنا سريع الاستجابة ويتخذ إجراءً فورياً عند وقوع أي طارئ.'
                  : 'Our emergency support team is called ACTS because we act quickly on a call basis during emergencies—a fast-response team that takes immediate action whenever an urgent situation occurs.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (FAQ) ──────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="section-label reveal-badge">{isArabic ? 'الأسئلة الشائعة' : 'Client FAQ'}</span>
            <h2 className="section-title reveal-text delay-1">
              {isArabic ? 'إجابات حول الاعتمادات والضمانات والمشاريع' : 'Answers on Accreditations, Warranties & Scope'}
            </h2>
            <div className="gold-line reveal-text delay-2" style={{ margin: '0.75rem auto 1.25rem' }} />
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className={`card reveal-card delay-${index + 1}`}
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${isOpen ? 'var(--border-gold)' : 'var(--border-subtle)'}`,
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'start',
                      gap: '1rem',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <HelpCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        color: 'var(--color-gold)',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.25rem 3.25rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.925rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Banner ─────────────────────────────────── */}
      <section
        className="section reveal-on-scroll"
        style={{
          background: 'linear-gradient(135deg, hsl(220, 20%, 11%) 0%, hsl(220, 25%, 7%) 100%)',
          borderTop: '1px solid var(--border-gold)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-label reveal-badge">{isArabic ? 'ابدأ مشروعك الآن' : 'Ready to Transform Your Space?'}</span>
          <h2 className="reveal-text delay-1" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            {isArabic
              ? 'تواصل مع فريق أكتس الهندسي لترتيب معاينة فورية للموقع'
              : 'Consult with ACTS Engineering Team for a Site Survey'}
          </h2>
          <p className="reveal-text delay-2" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {isArabic
              ? 'مقاول معتمد لدى شركاء مشاريع في الإمارات، 10 سنوات تأسيس، 22 عاماً خبرة، وضمان من 2 إلى 3 سنوات على التجديد في دبي. دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
              : 'Quality-first UAE project delivery. 10 years established company, 22 years experience, 50+ completed projects, and 24/7 active support only in emergency conditions via call only, plus a 2–3 years renovation warranty in Dubai.'}
          </p>

          <div className="reveal-on-scroll delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={() => setRfqOpen(true)}
            >
              <span>{isArabic ? 'طلب استشارة فورية' : 'Request Consultation'}</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn--outline btn--lg">
              <span>{isArabic ? 'معلومات التواصل المباشر' : 'Contact Information'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox for Project Gallery */}
      <MediaLightbox
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={currentPhotoIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentPhotoIdx((prev) => (prev > 0 ? prev - 1 : lightboxItems.length - 1))}
        onNext={() => setCurrentPhotoIdx((prev) => (prev < lightboxItems.length - 1 ? prev + 1 : 0))}
      />

      {/* RFQ Modal */}
      <RFQModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
      />
    </>
  )
}
