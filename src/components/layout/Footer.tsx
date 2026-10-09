import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, MessageSquare, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { siteConfig } from '../../config/site'

export function Footer() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Col 1: Brand & Overview */}
          <div>
            <div className="footer__brand">
              <span>ACTS</span> UAE
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
              {isArabic ? siteConfig.companyFullNameAr : siteConfig.companyFullName}
            </div>
            <p className="footer__desc" style={{ maxWidth: '380px', lineHeight: 1.7 }}>
              {isArabic
                ? 'شركة أفتاب تشانديو للخدمات الفنية وتنسيق الحدائق ذ.م.م: نخدم شركاء مشاريع في الإمارات في جميع أنحاء الإمارات بقطع غيار أصلية ومواد عالية الجودة.'
                : 'ACTS serves projects all over the UAE with genuine spare parts, high-quality materials, landscaping, garden civil works, and joinery fit-outs.'}
            </p>
            
            {/* Verified Developer Registrations Badge */}
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '0.4rem',
                marginTop: '1.25rem',
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                background: 'hsla(38, 55%, 60%, 0.08)',
                border: '1px solid var(--border-gold)',
                fontSize: '0.78rem',
                color: 'var(--color-gold)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                <ShieldCheck size={16} />
                <span>UAE Project Partners • All over UAE</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.72rem' }}>
                {isArabic ? 'قطع أصلية • مواد عالية الجودة • لا تنازل عن الجودة' : 'Genuine Parts • Quality Materials • No Compromise'}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Verified Core Specializations */}
          <div>
            <div className="footer__title">{t('footer.navTitle')}</div>
            <ul className="footer__nav-links">
              <li>
                <Link to="/" className="footer__nav-link">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__nav-link">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer__nav-link">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/services/villa-renovation-refurbishment" className="footer__nav-link">
                  {isArabic ? 'تجديد وتأهيل الفلل' : 'Villa Renovation'}
                </Link>
              </li>
              <li>
                <Link to="/services/swimming-pool-construction" className="footer__nav-link">
                  {isArabic ? 'بناء المسابح الخرسانية' : 'Swimming Pools'}
                </Link>
              </li>
              <li>
                <Link to="/services/landscaping" className="footer__nav-link">
                  {isArabic ? 'المناظر الطبيعية والحدائق' : 'Landscape Gardening'}
                </Link>
              </li>
              <li>
                <Link to="/services/carpentry" className="footer__nav-link">
                  {isArabic ? 'أبواب المداخل وأعمال النجارة' : 'Architectural Joinery'}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer__nav-link">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__nav-link">
                  {isArabic ? 'اتصل بنا للطوارئ (24/7 عبر الاتصال)' : 'Emergency Contact (24/7 Call Only)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div>
            <div className="footer__title">{t('footer.contactTitle')}</div>

            {/* Direct Phone */}
            <div className="footer__contact-item">
              <Phone size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong>{t('footer.phone')}: </strong>
                <a
                  href={`tel:${siteConfig.phone}`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Direct WhatsApp */}
            <div className="footer__contact-item">
              <MessageSquare size={16} style={{ color: '#25D366', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong>{t('footer.whatsapp')}: </strong>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {siteConfig.whatsapp}
                </a>
              </div>
            </div>

            {/* Direct Email */}
            <div className="footer__contact-item">
              <Mail size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong>{t('footer.email')}: </strong>
                <a
                  href={`mailto:${siteConfig.email}`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none', wordBreak: 'break-all' }}
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Physical Address */}
            <div className="footer__contact-item">
              <MapPin size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong>{isArabic ? 'الموقع والمكتب' : 'Office Location'}: </strong>
                <span>{isArabic ? siteConfig.addressAr : siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} {isArabic ? siteConfig.companyFullNameAr : siteConfig.companyFullName}. {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
          <div className="footer__disclaimer">
            {isArabic
              ? 'مقاول مسجل ومعتمد لدى شركاء مشاريع في الإمارات في الإمارات • 10 سنوات شركة • 22 سنة خبرة • 50+ مشروعاً منجزاً • دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط • ضمان 2-3 سنوات على التجديد في دبي.'
              : 'Registered Contractor with UAE Project Partners • 10 Years Company • 22 Years Experience • 50+ Projects Completed • 24/7 active only in emergency conditions via call only • 2–3 Years Renovation Warranty in Dubai.'}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
