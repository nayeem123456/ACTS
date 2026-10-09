import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Search, ArrowRight, ShieldCheck, Award, Clock, Activity, Layers3, HardHat, Ruler } from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'
import { siteConfig } from '../config/site'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { serviceCategories, allServices, ServiceItem, getServiceImage } from '../data/services'

export function Services() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter services by category and query
  const filteredServices = useMemo(() => {
    let list: ServiceItem[] = []

    if (activeCategory === 'all') {
      list = allServices
    } else {
      const cat = serviceCategories.find((c) => c.key === activeCategory)
      list = cat ? cat.services : allServices
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter((s) => {
        const title = t(s.nameKey).toLowerCase()
        const desc = t(s.descriptionKey).toLowerCase()
        return title.includes(q) || desc.includes(q) || s.slug.includes(q)
      })
    }

    return list
  }, [activeCategory, searchQuery, t])

  const categories = [
    { key: 'all', labelEn: 'All Specializations', labelAr: 'جميع التخصصات' },
    { key: 'renovation', labelEn: 'Renovation & Refurbishment', labelAr: 'التجديد والتأهيل' },
    { key: 'mep', labelEn: 'MEP & Building Systems', labelAr: 'الكهروميكانيك وأنظمة المباني' },
    { key: 'outdoor', labelEn: 'Outdoor & Construction', labelAr: 'الأعمال الخارجية والإنشاءات' },
    { key: 'civil', labelEn: 'Civil, Interior & Fit-Out', labelAr: 'الأعمال المدنية والتشطيبات' },
    { key: 'specialist', labelEn: 'Specialist Works', labelAr: 'الأعمال المتخصصة' },
    { key: 'maintenance', labelEn: 'Maintenance & Other Services', labelAr: 'الصيانة والخدمات الأخرى' },
  ]

  return (
    <>
      <SEOHead
        title={isArabic ? 'دليل الخدمات الشامل — أكتس الإمارات' : 'Comprehensive Services Directory — ACTS UAE'}
        description={
          isArabic
            ? 'دليل خدمات شركة أكتس: مقاول معتمد لدى شركاء مشاريع في الإمارات، 10 سنوات شركة، 22 سنة خبرة، وضمان 2-3 سنوات على التجديد في دبي.'
            : 'Explore ACTS comprehensive inventory: Quality-first UAE project delivery. 10 years company, 22 years experience, 2–3 years renovation warranty in Dubai.'
        }
        canonicalUrl="/services"
      />

      {/* Header Banner */}
      <div
        style={{
          background: 'var(--bg-surface)',
          padding: '6rem 0 3rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <Breadcrumbs
            items={[
              { label: t('nav.home'), path: '/' },
              { label: t('nav.services') },
            ]}
          />
          <span className="section-label reveal-badge">{t('nav.services')}</span>
          <h1 className="reveal-text delay-1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            {isArabic ? 'خدمات المقاولات والتجديد والحلول الفنية' : 'Technical Contracting & Renovation Services'}
          </h1>
          <p className="reveal-text delay-2" style={{ maxWidth: '780px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
            {isArabic
              ? 'حلول هندسية متكاملة تغطي كافة تخصصات التجديد، والأعمال الكهروميكانيكية، والتشطيبات الداخلية، والمسابح والمساحات الخارجية في دولة الإمارات — مع ضمان من 2 إلى 3 سنوات على التجديد في دبي ودعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
              : 'Complete multi-disciplinary engineering solutions covering villa renovation, building systems, interior fit-outs, swimming pools, and facilities maintenance — backed by a 2–3 years renovation warranty in Dubai and 24/7 active support only in emergency conditions via call only.'}
          </p>

          {/* Credentials Pills */}
          <div className="reveal-on-scroll delay-3" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <span className="developer-pill">
              <ShieldCheck size={16} />
              <span>UAE Project Partners</span>
            </span>
            <span className="developer-pill">
              <Award size={16} />
              <span>{isArabic ? 'ضمان 2-3 سنوات على التجديد في دبي' : '2–3 Years Renovation Warranty (Dubai)'}</span>
            </span>
            <span className="developer-pill">
              <Clock size={16} />
              <span>{isArabic ? '10 سنوات شركة • 22 سنة خبرة' : '10 Yrs Company • 22 Yrs Experience'}</span>
            </span>
            <span className="developer-pill">
              <Activity size={16} />
              <span>{isArabic ? 'طوارئ 24/7 عبر الاتصال • 50+ مشروع' : '24/7 Emergency Call Support • 50+ Projects'}</span>
            </span>
          </div>

          {/* Search bar inside header */}
          <div className="reveal-on-scroll delay-4" style={{ maxWidth: '500px', marginTop: '2rem' }}>
            <div className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder={isArabic ? 'ابحث في الخدمات (مثال: مسبح، عشب، تكييف، تجديد...)' : 'Search services (e.g. villa, pool, HVAC, electrical)...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="search-submit" aria-label="Search">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        <section className="services-scope-band reveal-on-scroll" aria-label={isArabic ? 'نطاق الخدمات' : 'Service scope'}>
          <div className="container services-scope-band__inner">
            <div className="services-scope-band__intro">
              <span className="section-label">{isArabic ? 'نطاق تنفيذ متكامل' : 'One accountable delivery team'}</span>
              <h2>{isArabic ? 'كل تخصصات مشروعك. مقاول واحد.' : 'Every trade your project needs. One accountable contractor.'}</h2>
            </div>
            <div className="services-scope-band__stats">
              <div><Layers3 size={22} /><strong>{allServices.length}+</strong><span>{isArabic ? 'تخصصاً' : 'service scopes'}</span></div>
              <div><HardHat size={22} /><strong>24/7</strong><span>{isArabic ? 'طوارئ عبر الاتصال' : 'emergency call only'}</span></div>
              <div><Ruler size={22} /><strong>360°</strong><span>{isArabic ? 'إدارة المشروع' : 'project delivery'}</span></div>
            </div>
          </div>
        </section>
      </div>

      {/* Services List and Category Filters */}
      <div className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="gallery-filters reveal-on-scroll delay-1" style={{ marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {isArabic ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          {filteredServices.length > 0 ? (
            <div className="services-grid">
              {filteredServices.map((service, index) => {
                const title = t(service.nameKey)
                const desc = t(service.descriptionKey)

                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className={`service-card reveal-card delay-${(index % 3) + 1}`}
                  >
                    <div className="service-card__img-wrap">
                      <img
                        src={getServiceImage(service)}
                        alt={service.alt || title}
                        className="service-card__img"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="service-card__badge">
                        {service.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="service-card__body">
                      <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
                      <div className="service-card__category">
                        {service.category.toUpperCase()}
                      </div>
                      <h3 className="service-card__title">{title}</h3>
                      <p className="service-card__desc">{desc}</p>
                      <div className="service-card__link">
                        <span>{t('common.learnMore')}</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div
              className="reveal-on-scroll"
              style={{
                padding: '3rem',
                textAlign: 'center',
                background: 'var(--bg-elevated)',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
              }}
            >
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                {t('search.noResults')} "{searchQuery}"
              </p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
              >
                {isArabic ? 'إعادة ضبط البحث' : 'Reset Filters'}
              </button>
            </div>
          )}

          {/* Bottom Banner */}
          <div
            className="reveal-on-scroll delay-2"
            style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: 'var(--bg-surface)',
              borderRadius: '12px',
              border: '1px solid var(--border-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                {isArabic ? 'هل تحتاج إلى استشارة مخصصة لمتطلبات مشروعك؟' : 'Need a Customized Engineering Scope?'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                {isArabic
                  ? 'حلول متكاملة all over UAE مع 10 سنوات شركة، 22 سنة خبرة، ومواد عالية الجودة. دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
                  : 'Quality-first service delivery all over the UAE, backed by 10 years as a company, 22 years of experience, and 24/7 active support only in emergency conditions via call only.'}
              </p>
            </div>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              <span>{isArabic ? 'واتساب لأي استفسار' : 'WhatsApp us for any query'}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
