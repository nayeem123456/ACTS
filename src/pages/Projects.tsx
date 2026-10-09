import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Eye, Award, Clock, Activity } from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { mediaManifest } from '../data/mediaManifest'
import { MediaLightbox, LightboxItem } from '../components/ui/MediaLightbox'
import { RFQModal } from '../components/ui/RFQModal'

export function Projects() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [rfqOpen, setRfqOpen] = useState(false)

  // Filter project photos (robust category matching)
  const filteredAssets = useMemo(() => {
    if (activeFilter === 'all') return mediaManifest
    return mediaManifest.filter((m) => {
      const cat = m.category.toLowerCase()
      if (activeFilter === 'pools') return cat.includes('pool')
      if (activeFilter === 'civil') return cat.includes('civil')
      if (activeFilter === 'renovation') return cat.includes('renovat') || cat.includes('carpentry')
      if (activeFilter === 'landscaping') return cat.includes('landscap')
      return cat === activeFilter
    })
  }, [activeFilter])

  const lightboxItems: LightboxItem[] = filteredAssets.map((asset) => ({
    url: asset.optimizedPath,
    title: isArabic ? asset.altAr : asset.alt,
    category: asset.category.toUpperCase(),
    note: isArabic
      ? 'مشروع معتمد تم تنفيذه في دولة الإمارات بواسطة أكتس (ACTS).'
      : 'Verified turnkey project delivered across the UAE by ACTS.',
  }))

  const handleOpenPhoto = (index: number) => {
    setCurrentIdx(index)
    setLightboxOpen(true)
  }

  const filters = [
    { key: 'all', label: t('projects.filterAll') },
    { key: 'renovation', label: t('projects.filterRenovation') },
    { key: 'landscaping', label: t('projects.filterLandscaping') },
    { key: 'pools', label: t('projects.filterPools') },
    { key: 'civil', label: t('projects.filterCivil') },
  ]

  return (
    <>
      <SEOHead
        title={isArabic ? 'معرض المشاريع (50+ مشروع) — أكتس الإمارات' : 'Projects Portfolio (50+ Projects) — ACTS UAE'}
        description={t('projects.metaDescription')}
        canonicalUrl="/projects"
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
              { label: t('nav.projects') },
            ]}
          />
          <span className="section-label reveal-badge">{t('nav.projects')}</span>
          <h1 className="reveal-text delay-1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            {t('projects.headline')}
          </h1>
          <p className="reveal-text delay-2" style={{ maxWidth: '780px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
            {t('projects.subheadline')}
          </p>

          {/* Credentials Pills */}
          <div className="reveal-on-scroll delay-3" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <span className="developer-pill">
              <Award size={16} />
              <span>{isArabic ? 'ضمان 2-3 سنوات على التجديد' : '2–3 Years Renovation Warranty'}</span>
            </span>
            <span className="developer-pill">
              <Clock size={16} />
              <span>{isArabic ? '10 سنوات شركة • 22 سنة خبرة' : '10 Yrs Company • 22 Yrs Experience'}</span>
            </span>
            <span className="developer-pill">
              <Activity size={16} />
              <span>{isArabic ? '50+ مشروعاً منجزاً • طوارئ 24/7 عبر الاتصال' : '50+ Projects Completed • 24/7 Emergency Call Support'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="gallery-filters reveal-on-scroll delay-1" style={{ marginBottom: '2.5rem' }}>
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`gallery-filter-btn ${activeFilter === f.key ? 'gallery-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Photo Count */}
          <div className="reveal-text delay-2" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            {isArabic
              ? `عرض ${filteredAssets.length} صورة من أصل 50+ مشروعاً منجزاً في الإمارات`
              : `Showing ${filteredAssets.length} verified photographs from 50+ delivered UAE projects`}
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredAssets.map((asset, index) => (
              <div
                key={asset.id}
                className={`gallery-card reveal-card delay-${(index % 4) + 1}`}
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
                    <Eye size={14} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: '4px' }} />
                    {isArabic ? 'انقر لتكبير الصورة' : 'Click to inspect photo'}
                  </span>
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__body-category">{asset.category.replace('-', ' ').toUpperCase()}</span>
                  <h3>{isArabic ? asset.altAr : asset.alt}</h3>
                  <span className="gallery-card__body-link"><Eye size={13} /> {isArabic ? 'عرض التفاصيل' : 'View project details'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom consultation prompt */}
          <div
            className="reveal-on-scroll delay-3"
            style={{
              marginTop: '4rem',
              textAlign: 'center',
              padding: '2.5rem',
              background: 'var(--bg-surface)',
              borderRadius: '12px',
              border: '1px solid var(--border-gold)',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
              {isArabic ? 'هل تخطط لمشروع تجديد أو مسبح أو حديقة؟' : 'Planning a Similar Project in Dubai or the UAE?'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              {isArabic
                ? 'جودة موثوقة ومواد عالية الجودة وتنفيذ all over UAE مع دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
                : 'Quality materials, genuine parts, and accountable project delivery all over the UAE with 24/7 active support only in emergency conditions via call only.'}
            </p>
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={() => setRfqOpen(true)}
            >
              <span>{isArabic ? 'طلب استشارة فورية للموقع' : 'Request Site Consultation'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <MediaLightbox
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={currentIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((p) => (p > 0 ? p - 1 : lightboxItems.length - 1))}
        onNext={() => setCurrentIdx((p) => (p < lightboxItems.length - 1 ? p + 1 : 0))}
      />

      <RFQModal isOpen={rfqOpen} onClose={() => setRfqOpen(false)} />
    </>
  )
}
