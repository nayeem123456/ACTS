import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Activity } from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { siteConfig } from '../config/site'

export function Contact() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <>
      <SEOHead
        title={isArabic ? 'اتصل بنا مباشرة للطوارئ (24/7 عبر الاتصال) — أكتس الإمارات' : 'Contact Us Directly for Emergencies (24/7 Call Only) — ACTS UAE'}
        description={
          isArabic
            ? 'تواصل مباشرة مع أكتس (24/7): مقاول مسجل لدى شركاء مشاريع في الإمارات، 10 سنوات شركة، 22 سنة خبرة، وضمان 2-3 سنوات على التجديد في دبي.'
            : 'Connect directly with ACTS for emergencies (24/7 active only in emergency conditions via call only): Quality-first UAE project delivery. 10 years company, 22 years experience, and 2–3 years warranty in Dubai.'
        }
        canonicalUrl="/contact"
      />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: t('nav.home'), path: '/' },
              { label: isArabic ? 'اتصل بنا' : 'Direct Contact' },
            ]}
          />
          <span className="section-label reveal-badge">{isArabic ? 'استجابة الطوارئ 24/7 عبر الاتصال فقط' : '24/7 Emergency Call Support Only'}</span>
          <h1 className="page-header__title reveal-text delay-1">
            {isArabic ? 'تواصل معنا مباشرة' : 'Direct Client Communication'}
          </h1>
          <p className="page-header__subtitle reveal-text delay-2">
            {isArabic
              ? 'تواصل بشكل فوري ومباشر مع المهندس المختص عبر واتساب أو الاتصال الهاتفي أو البريد الإلكتروني — استجابة سريعة 24/7 دون أي وسطاء أو نماذج معقدة.'
              : 'Connect with our senior project engineers by phone for emergencies — 24/7 active only in emergency conditions via call only, with direct contractor accountability.'}
          </p>

          {/* Credentials Pills */}
          <div className="reveal-on-scroll delay-3" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <span className="developer-pill">
              <ShieldCheck size={16} />
              <span>UAE Project Partners</span>
            </span>
            <span className="developer-pill">
              <Award size={16} />
              <span>{isArabic ? 'ضمان 2-3 سنوات على التجديد' : '2–3 Years Renovation Warranty (Dubai)'}</span>
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
        </div>
      </div>

      {/* Direct Contact Cards Section */}
      <div className="section" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          {/* Top 3 Quick-Action Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* WhatsApp Card (Primary) */}
            <div
              className="reveal-card delay-1"
              style={{
                background: 'linear-gradient(145deg, rgba(37, 211, 102, 0.08) 0%, var(--bg-surface) 100%)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    marginBottom: '1.25rem',
                    boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <MessageCircle size={28} />
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    background: 'rgba(37, 211, 102, 0.15)',
                    color: '#25D366',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  {isArabic ? 'القناة الأسرع للرد (24/7)' : 'Fastest Response (24/7)'}
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                  {isArabic ? 'محادثة واتساب فورية' : 'WhatsApp Instant Chat'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                  {isArabic
                    ? 'أرسل تفاصيل مشروعك أو صور الموقع أو مخططات الفيلا مباشرة للحصول على مراجعة فورية.'
                    : 'Send project details, site photos, or drawings directly to our senior project lead for instant feedback.'}
                </p>
              </div>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  background: '#25D366',
                  color: '#fff',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{isArabic ? 'محادثة واتساب مباشرة' : 'Chat on WhatsApp'}</span>
                <span style={{ direction: 'ltr', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', opacity: 0.95 }}>
                  {siteConfig.whatsapp}
                </span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div
              className="reveal-card delay-2"
              style={{
                background: 'linear-gradient(145deg, rgba(212, 160, 23, 0.08) 0%, var(--bg-surface) 100%)',
                border: '1px solid var(--border-gold)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    marginBottom: '1.25rem',
                    boxShadow: '0 8px 20px rgba(212, 160, 23, 0.3)',
                  }}
                >
                  <Phone size={28} />
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    background: 'rgba(212, 160, 23, 0.15)',
                    color: 'var(--color-gold-light)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  {isArabic ? 'اتصال هاتفي مباشر' : 'Direct Phone Call'}
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                  {isArabic ? 'تحدث مع المهندس المسؤول' : 'Speak with an Engineer'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                  {isArabic
                    ? 'اتصل مباشرة لمناقشة مواعيد المعاينة الميدانية واستخراج تصاريح شركاء مشاريع في الإمارات والبلدية.'
                    : 'Call directly to discuss on-site engineering surveys, developer approvals, and project feasibility.'}
                </p>
              </div>

              <a
                href={`tel:${siteConfig.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  background: 'var(--color-gold)',
                  color: 'var(--text-on-gold)',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(212, 160, 23, 0.35)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
                <span style={{ direction: 'ltr', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>
                  {siteConfig.phoneDisplay}
                </span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Direct Email Card */}
            <div
              className="reveal-card delay-3"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Mail size={28} />
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  {isArabic ? 'المراسلات الرسمية' : 'Formal Documents'}
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                  {isArabic ? 'البريد الإلكتروني المباشر' : 'Official Email Inquiries'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                  {isArabic
                    ? 'أرسل جداول الكميات (BOQ)، والمناقصات، والملفات الهندسية مباشرة إلى بريدنا الرسمي.'
                    : 'Submit tenders, detailed Bill of Quantities (BOQ), and architectural blueprints for formal appraisal.'}
                </p>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  wordBreak: 'break-all',
                }}
              >
                <span>{isArabic ? 'إرسال بريد إلكتروني' : 'Send Email'}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Operational Details & Field Coverage */}
          <div
            className="reveal-on-scroll delay-2"
            style={{
              background: 'var(--bg-surface)',
              borderRadius: '16px',
              border: '1px solid var(--border-gold)',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Office & UAE Operational Scope */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(212, 160, 23, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    {isArabic ? 'مقر الشركة ونطاق العمليات' : 'Office & Operating Territory'}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-gold-light)', fontWeight: 600, marginTop: '2px' }}>
                    {isArabic ? siteConfig.addressAr : siteConfig.address}
                  </div>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {isArabic
                  ? 'يقع مكتبنا في دبي، وتغطي فِرقنا الهندسية والتنفيذية جميع إمارات الدولة السبع ومشاريع شركاء مشاريع في الإمارات:'
                  : 'Based in Dubai, our technical teams mobilize across residential and commercial developments in all over the UAE:'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  isArabic ? 'مشاريع شركاء مشاريع في الإمارات (المطورين هيلز، المرابع العربية، دبي هيلز، تلال الإمارات)' : 'UAE-Wide Coverage Communities (residential, commercial, and developer communities across the UAE)',
                  isArabic ? 'دبي وأبوظبي (نخلة جميرا، مدينة خليفة، شاطئ الراحة، جزيرة السعديات)' : 'Dubai & Abu Dhabi (Palm Jumeirah, Saadiyat, Al Raha, Khalifa City)',
                  isArabic ? 'الشارقة وعجمان ورأس الخيمة وأم القيوين والفجيرة' : 'Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain & Fujairah',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-gold)', marginTop: '3px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency call support only */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(212, 160, 23, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                  }}
                >
                  <Activity size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {isArabic ? 'دعم طوارئ 24/7 عبر الاتصال' : '24/7 Emergency Call Support'}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {isArabic
                  ? 'نوفر دعماً متواصلاً على مدار الساعة لخدمة عملائنا ومشاريعنا الميدانية في الدولة:'
                  : 'We maintain round-the-clock coordination and active field support for client satisfaction:'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-elevated)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {isArabic ? 'المعاينات والاستشارات الهندسية' : 'Engineering Consultations & Surveys'}
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {isArabic ? 'متاحة يومياً ومجدولة بما يلائم وقت العميل' : 'Scheduled at client convenience across Dubai & UAE'}
                  </span>
                </div>
                <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-elevated)', borderRadius: '8px', border: '1px solid var(--border-gold)' }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {isArabic ? 'دعم ميداني للطوارئ عبر الاتصال' : 'Emergency Call Support Only'}
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {isArabic ? 'فريق مخصص للطوارئ عبر الاتصال فقط' : 'Dedicated team active only for emergency conditions via call'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Vendor & Developer Guarantee */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(212, 160, 23, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                  }}
                >
                  <ShieldCheck size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {isArabic ? 'ضمان المقاول المسجل' : 'Accredited Contractor'}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {isArabic
                  ? 'مقاول معتمد لدى شركاء مشاريع في الإمارات، مع 10 سنوات كشركة في الإمارات و22 عاماً من الخبرة، وضمان 2-3 سنوات على التجديد في دبي.'
                  : 'Quality-first UAE project delivery, with 10 years corporate standing, 22 years experience, and 2–3 years warranty on Dubai renovations.'}
              </p>
              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} />
                <span>{isArabic ? '50+ مشروعاً منجزاً بنجاح' : '50+ Successfully Delivered Projects'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
