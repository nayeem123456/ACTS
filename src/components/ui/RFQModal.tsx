import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { X, MessageCircle, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react'
import { siteConfig } from '../../config/site'

interface RFQModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: {
    serviceType?: string
    propertyType?: string
    area?: number
    estimatedRange?: string
  }
}

export function RFQModal({ isOpen, onClose, initialData }: RFQModalProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const waText = encodeURIComponent(
    initialData?.estimatedRange
      ? `Hello ACTS, I am inquiring about ${initialData.serviceType || 'a project'} (${initialData.propertyType || 'Villa'}, ~${initialData.area || 0} sq ft). Estimated budget: ${initialData.estimatedRange}.`
      : `Hello ACTS, I would like to inquire about your renovation and technical contracting services in the UAE.`
  )
  const waUrl = `${siteConfig.whatsappLink}?text=${waText}`

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        background: 'rgba(5, 13, 26, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 24px 70px rgba(0,0,0,0.6)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: isArabic ? 'auto' : '1.25rem',
            left: isArabic ? '1.25rem' : 'auto',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: 'var(--text-secondary)',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: '20px',
              background: 'rgba(212, 160, 23, 0.15)',
              color: 'var(--color-gold-light)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            {isArabic ? 'تواصل فوري مع المقاول' : 'Direct Vendor Contact'}
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
            {isArabic ? 'تواصل معنا مباشرة الآن' : 'Contact Us Directly'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
            {isArabic
              ? 'تواصل مباشرة مع المهندس المشرف عبر إحدى القنوات المباشرة التالية دون أي وسطاء:'
              : 'Choose your preferred channel below to speak directly with our senior site director:'}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* WhatsApp Direct Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0.05) 100%)',
              border: '1px solid rgba(37, 211, 102, 0.4)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#25D366',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={22} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem', color: '#25D366' }}>
                  {isArabic ? 'محادثة واتساب فورية' : 'Chat on WhatsApp'}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {isArabic ? 'الرد الفوري ومشاركة المخططات والصور' : 'Fastest response • Share photos & site location'}
                </span>
              </div>
            </div>
            <ArrowRight size={18} style={{ color: '#25D366' }} />
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={`tel:${siteConfig.phone}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(212, 160, 23, 0.08)',
              border: '1px solid rgba(212, 160, 23, 0.3)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--color-gold)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-gold-light)' }}>
                  {isArabic ? 'اتصال هاتفي مباشر' : 'Direct Call'}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: "'JetBrains Mono', monospace" }}>
                  {siteConfig.phoneDisplay}
                </span>
              </div>
            </div>
            <ArrowRight size={18} style={{ color: 'var(--color-gold)' }} />
          </a>

          {/* Official Email Button */}
          <a
            href={`mailto:${siteConfig.email}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#6366f1',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem', color: '#a5b4fc' }}>
                  {isArabic ? 'البريد الإلكتروني' : 'Official Email'}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {siteConfig.email}
                </span>
              </div>
            </div>
            <ArrowRight size={18} style={{ color: '#a5b4fc' }} />
          </a>
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
          }}
        >
          <ShieldCheck size={16} style={{ color: 'var(--color-gold)' }} />
          <span>{isArabic ? 'تعامل مباشر 100% مع إدارة المشروع بدون وسطاء' : '100% Direct vendor connection • Zero middlemen'}</span>
        </div>
      </div>
    </div>
  )
}
export default RFQModal
