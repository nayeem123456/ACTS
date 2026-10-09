import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Home } from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'

export function NotFound() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <>
      <SEOHead
        title={t('common.pageNotFound')}
        description={t('common.pageNotFoundText')}
        robots="noindex,nofollow"
      />

      <div className="not-found">
        <div style={{ maxWidth: '500px' }}>
          <div className="not-found__code">404</div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            {t('common.pageNotFound')}
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {t('common.pageNotFoundText')}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">
              <Home size={18} />
              <span>{t('common.goHome')}</span>
            </Link>
            <Link to="/services" className="btn btn--outline">
              <ArrowLeft size={18} style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
              <span>{isArabic ? 'استكشف الخدمات' : 'Browse Services'}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
