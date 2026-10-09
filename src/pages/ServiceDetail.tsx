import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Wrench,
  Layers,
  Sparkles,
  ShieldCheck,
  Award,
  Clock,
  Activity,
} from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { NotFound } from './NotFound'
import { getServiceBySlug, allServices, getServiceImage } from '../data/services'
import { mediaManifest } from '../data/mediaManifest'
import { MediaLightbox, LightboxItem } from '../components/ui/MediaLightbox'
import { RFQModal } from '../components/ui/RFQModal'
import { siteConfig, toAbsoluteUrl } from '../config/site'
import { JsonLd } from '../components/ui/JsonLd'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const [rfqOpen, setRfqOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0)

  if (!slug) {
    return <NotFound />
  }

  const service = getServiceBySlug(slug)
  if (!service) {
    return <NotFound />
  }

  // Extract service data from i18n
  const serviceKey = service.nameKey.split('.')[1]
  const serviceData = (i18n.getResourceBundle(i18n.language, 'translation')?.services || {})[serviceKey] || {}

  const title = serviceData.name || t(service.nameKey)
  const intro = serviceData.intro || serviceData.description || t(service.descriptionKey)
  const body = serviceData.body || ''
  const workTypes: string[] = serviceData.workTypes || []
  const benefits: string[] = serviceData.benefits || []

  // Related services
  const related = (service.relatedSlugs || [])
    .map((s) => allServices.find((item) => item.slug === s))
    .filter(Boolean)

  // Matching project gallery photos from manifest
  const relatedPhotos = mediaManifest.filter(
    (m) =>
      m.page.includes(service.category) ||
      m.category.toLowerCase().includes(service.category.toLowerCase()) ||
      (service.slug.includes('pool') && m.category === 'pools') ||
      (service.slug.includes('landscap') && m.category === 'landscaping') ||
      (service.slug.includes('renovat') && m.category === 'renovation') ||
      (service.slug.includes('civil') && m.category === 'civil')
  )

  const lightboxItems: LightboxItem[] = relatedPhotos.map((p) => ({
    url: p.optimizedPath,
    title: isArabic ? p.altAr : p.alt,
    category: p.category.toUpperCase(),
  }))

  const handleOpenPhoto = (idx: number) => {
    setCurrentPhotoIdx(idx)
    setLightboxOpen(true)
  }

  const isRenovation = service.slug.includes('renovat')
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: intro,
    url: toAbsoluteUrl(`/services/${service.slug}`),
    provider: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      url: toAbsoluteUrl('/'),
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <SEOHead
        title={serviceData.pageTitle || `${title} — ACTS UAE`}
        description={serviceData.metaDescription || intro}
        canonicalUrl={`/services/${service.slug}`}
      />

      {/* Hero Header */}
      <div className="service-detail__hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: t('nav.home'), path: '/' },
              { label: t('nav.services'), path: '/services' },
              { label: title },
            ]}
          />

          <div className="service-detail__content">
            <span className="section-label reveal-badge" style={{ marginBottom: '0.5rem' }}>
              {service.category.toUpperCase()}
            </span>
            <h1 className="reveal-text delay-1" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, margin: '0.25rem 0 1rem', lineHeight: 1.15 }}>
              {title}
            </h1>
            <div className="gold-line reveal-text delay-2" />
            <p className="reveal-text delay-2" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '820px' }}>
              {intro}
            </p>

            {/* Credentials Badges */}
            <div className="reveal-on-scroll delay-3" style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="developer-pill">
                <ShieldCheck size={15} />
                <span>UAE-Wide Project Standards</span>
              </span>
              {isRenovation && (
                <span className="developer-pill" style={{ background: 'hsla(38, 55%, 60%, 0.2)', borderColor: 'var(--color-gold)' }}>
                  <Award size={15} />
                  <span>{isArabic ? 'ضمان 2-3 سنوات في دبي' : '2–3 Years Renovation Warranty (Dubai)'}</span>
                </span>
              )}
              <span className="developer-pill">
                <Clock size={15} />
                <span>{isArabic ? '10 سنوات شركة • 22 سنة خبرة' : '10 Yrs Company • 22 Yrs Exp'}</span>
              </span>
              <span className="developer-pill">
                <Activity size={15} />
                <span>{isArabic ? 'طوارئ 24/7 عبر الاتصال فقط' : '24/7 Emergency Call Only'}</span>
              </span>
            </div>

            <div className="reveal-on-scroll delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn--primary btn--lg"
                onClick={() => setRfqOpen(true)}
              >
                <span>{isArabic ? 'طلب استشارة فورية لهذه الخدمة' : 'Request Consultation For This Service'}</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/services" className="btn btn--outline btn--lg">
                <span>{t('common.backToServices')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body & Scope */}
      <div className="section">
        <div className="container">
          <div className="service-detail__layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left Column: Scope of Work, Technical Body, Benefits */}
            <div>
              {/* Featured photo if available */}
              {service.imageUrl && (
                <div
                  className="reveal-scale"
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '16 / 9',
                    marginBottom: '2.5rem',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <img
                    src={getServiceImage(service)}
                    alt={service.alt || title}
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* Body text */}
              {body && (
                <div className="reveal-text delay-1" style={{ marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                    {isArabic ? 'نظرة عامة على الخدمة والمعايير الهندسية' : 'Service Overview & Technical Specifications'}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1.05rem' }}>
                    {body}
                  </p>
                </div>
              )}

              {/* Scope of Work Types */}
              {workTypes.length > 0 && (
                <div className="reveal-card delay-2" style={{ marginBottom: '3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                    <Layers size={22} style={{ color: 'var(--color-gold)' }} />
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0 }}>
                      {isArabic ? 'نطاق الأعمال والمهام المشمولة' : 'Scope of Work & Capabilities'}
                    </h2>
                  </div>

                  <ul className="service-detail__work-types">
                    {workTypes.map((item, index) => (
                      <li key={index} className="service-detail__work-type">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Benefits */}
              {benefits.length > 0 && (
                <div className="reveal-card delay-3" style={{ marginBottom: '3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                    <Sparkles size={22} style={{ color: 'var(--color-gold)' }} />
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0 }}>
                      {isArabic ? 'المزايا ومعايير الجودة لشركة أكتس' : 'Key Advantages & Quality Standards'}
                    </h2>
                  </div>

                  <ul className="service-detail__benefits">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="service-detail__benefit">
                        <CheckCircle size={18} className="service-detail__check" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Matching Project Media Highlights */}
              {relatedPhotos.length > 0 && (
                <div className="reveal-on-scroll delay-2">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                    {isArabic ? 'صور من مواقع العمل المرتبطة' : 'Field Work Photographs'}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                    {relatedPhotos.map((photo, pIdx) => (
                      <div
                        key={photo.id}
                        className="gallery-item"
                        style={{ aspectRatio: '4/3', borderRadius: '6px' }}
                        onClick={() => handleOpenPhoto(pIdx)}
                        role="button"
                        tabIndex={0}
                        aria-label="View photo"
                      >
                        <img src={photo.optimizedPath} alt={isArabic ? photo.altAr : photo.alt} loading="lazy" decoding="async" />
                        <div className="gallery-item__overlay" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Quote Card & Related Services */}
            <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Direct Action Card */}
              <div
                className="card reveal-card delay-1"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FileText size={20} style={{ color: 'var(--color-gold)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    {isArabic ? 'استشارة ومعاينة فورية' : 'Direct Consultation'}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {isArabic
                    ? 'تواصل مباشرة مع المهندس المسؤول للحصول على تقييم هندسي فوري للموقع وجدول كميات (BOQ).'
                    : 'Connect directly with our senior project engineers for immediate on-site assessment and itemized BOQ.'}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                    style={{ width: '100%', justifyContent: 'center', background: '#25D366', borderColor: '#25D366' }}
                  >
                    <span>{isArabic ? 'محادثة واتساب سريعة' : 'Chat on WhatsApp'}</span>
                    <ArrowRight size={16} />
                  </a>
                  <button
                    type="button"
                    className="btn btn--outline"
                    onClick={() => setRfqOpen(true)}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{isArabic ? 'طلب استشارة' : 'Consultation Options'}</span>
                  </button>
                </div>
              </div>

              {/* Related Services */}
              {related.length > 0 && (
                <div
                  className="card reveal-card delay-2"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
                    {t('common.relatedServices')}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {related.map((rel: any) => (
                      <Link
                        key={rel.id}
                        to={`/services/${rel.slug}`}
                        className="related-service-link"
                      >
                        <Wrench size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {t(rel.nameKey)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <MediaLightbox
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={currentPhotoIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentPhotoIdx((prev) => (prev > 0 ? prev - 1 : lightboxItems.length - 1))}
        onNext={() => setCurrentPhotoIdx((prev) => (prev < lightboxItems.length - 1 ? prev + 1 : 0))}
      />

      <RFQModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        initialData={{ serviceType: service.slug }}
      />
    </>
  )
}
