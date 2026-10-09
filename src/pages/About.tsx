import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, Target, Award, ArrowRight, Clock, Compass, Activity, Building } from 'lucide-react'
import { SEOHead } from '../components/ui/SEOHead'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { RFQModal } from '../components/ui/RFQModal'

export function About() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const [rfqOpen, setRfqOpen] = useState(false)

  return (
    <>
      <SEOHead
        title={t('about.pageTitle')}
        description={t('about.metaDescription')}
        canonicalUrl="/about"
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
              { label: t('nav.about') },
            ]}
          />
          <span className="section-label reveal-badge">{t('nav.about')}</span>
          <h1 className="reveal-text delay-1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            {t('about.headline')}
          </h1>
          <p className="reveal-text delay-2" style={{ maxWidth: '780px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
            {t('about.overviewText')}
          </p>

          {/* Quick credentials strip */}
          <div className="reveal-on-scroll delay-3" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <span className="developer-pill">
              <ShieldCheck size={16} />
              <span>UAE Project Partners</span>
            </span>
            <span className="developer-pill">
              <Award size={16} />
              <span>{isArabic ? 'ضمان 2-3 سنوات على التجديد في دبي' : '2–3 Years Dubai Renovation Warranty'}</span>
            </span>
            <span className="developer-pill">
              <Clock size={16} />
              <span>{isArabic ? '10 سنوات تأسيس • 22 سنة خبرة' : '10 Yrs Company • 22 Yrs Experience'}</span>
            </span>
            <span className="developer-pill">
              <Activity size={16} />
              <span>{isArabic ? 'طوارئ 24/7 عبر الاتصال • 50+ مشروع' : '24/7 Emergency Call Support • 50+ Projects'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column: Story, Quality, Approach */}
            <div>
              <span className="section-label reveal-badge">{t('about.overviewTitle')}</span>
              <h2 className="section-title reveal-text delay-1">
                {isArabic ? 'هندسة متقنة وإدارة مشاريع مسؤولة' : 'Engineered Precision & Accountable Delivery'}
              </h2>
              <div className="gold-line reveal-text delay-2" />
              <p className="reveal-text delay-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {isArabic
                  ? 'تأسست شركة أفتاب تشانديو للخدمات الفنية وتنسيق الحدائق ذ.م.م (ACTS) في دولة الإمارات لتلبية الطلب المتزايد على مقاولات التجديد والتأهيل عالي الجودة. بمسيرة 10 سنوات كشركة مسجلة في دبي مدعومة بأكثر من 22 عاماً من الخبرة الهندسية والحرفية المباشرة، نمتلك سجلاً حافلاً بأكثر من 50 مشروعاً فاخراً تم إنجازه بنجاح تام.'
                  : 'Aftab Chandio Technical Services and Landscape Gardening LLC (ACTS) was established in the UAE to provide institutional-grade renovation, refurbishment, and multidisciplinary contracting. With 10 years as an established UAE company backed by over 22 years of senior technical engineering leadership, we have successfully delivered 50+ prestigious villa, pool, and commercial projects across the Emirates.'}
              </p>

              <p className="reveal-text delay-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {isArabic
                  ? 'بصفتنا مقاولاً معتمداً ومسجلاً رسمياً لدى شركاء مشاريع في الإمارات في الإمارات، نلتزم بأعلى معايير السلامة والجودة والاشتراطات الهندسية للمطورين. ونمنح عملاءنا في دبي ضماناً رسمياً يمتد من 2 إلى 3 سنوات على مشاريع التجديد والتأهيل، مع دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
                  : 'We operate with deep familiarity of project requirements, municipal NOC submissions, and rigorous quality benchmarks. For comprehensive renovation and refurbishment projects in Dubai, we provide an official 2 to 3 years warranty, supported by 24/7 active support only in emergency conditions via call only.'}
              </p>

              {/* Approach to Quality */}
              <div style={{ marginTop: '2.5rem' }}>
                <h3 className="reveal-text delay-1" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-gold)' }}>
                  {isArabic ? 'ركائز الجودة والمطابقة الهندسية' : 'Quality Governance & Engineering Standards'}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    className="reveal-card delay-1"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.25rem',
                      background: 'var(--bg-card)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <ShieldCheck size={22} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        {isArabic ? 'مقاول مسجل لدى شركاء مشاريع في الإمارات' : 'Registered with UAE Project Partners'}
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {isArabic
                          ? 'تنفيذ معتمد للأعمال الإنشائية والتشطيبات والكهرباء والمسابح والحدائق وفق اشتراطات كبار المطورين في الدولة.'
                          : 'Pre-qualified and accredited for turnkey civil modifications, MEP infrastructure, and luxury landscape execution across developer communities across the UAE.'}
                      </span>
                    </div>
                  </div>

                  <div
                    className="reveal-card delay-2"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.25rem',
                      background: 'var(--bg-card)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Award size={22} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        {isArabic ? 'ضمان رسمي 2-3 سنوات على التجديد في دبي' : '2–3 Years Renovation & Refurbishment Warranty'}
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {isArabic
                          ? 'ضمان حقيقي مكتوب يغطي الأعمال الإنشائية، تكسيات الرخام، التمديدات الكهروميكانيكية، وجودة المواد المركبة.'
                          : 'Comprehensive written warranty on Dubai renovation projects protecting your finishes, plumbing, electrical installations, and structural works.'}
                      </span>
                    </div>
                  </div>

                  <div
                    className="reveal-card delay-3"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.25rem',
                      background: 'var(--bg-card)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Compass size={22} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        {isArabic ? 'مواد معتمدة ومطابقة لكود البناء الإماراتي' : 'Certified UAE Building Materials'}
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {isArabic
                          ? 'استخدام الأسلاك والكابلات المسلحة، ومواسير السباكة، وتكسيات الرخام من مصادر وموردين معتمدين فقط.'
                          : 'Procurement exclusively from certified regional and European suppliers adhering strictly to UAE standards.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission, Vision, Background & Registrations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Developer Registration Card */}
              <div
                className="card reveal-card delay-1"
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Building size={22} style={{ color: 'var(--color-gold)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    {isArabic ? 'التسجيل والاعتماد الرسمي' : 'Official Developer Accreditations'}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {isArabic
                    ? 'شركة أكتس مقاول مسجل رسمياً لدى شركاء مشاريع في الإمارات في الإمارات، مما يتيح لنا سرعة تخليص التصاريح ومباشرة العمل وفق المعايير المعتمدة دون أي تأخير.'
                    : 'ACTS is qualified to execute structural, architectural, MEP, and landscaping works across the UAE.'}
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="developer-pill">UAE Project Partners</span>
                  <span className="developer-pill">UAE Property Partners</span>
                </div>
              </div>

              {/* Warranty Card */}
              <div
                className="card reveal-card delay-2"
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Award size={22} style={{ color: 'var(--color-gold)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    {isArabic ? 'ضمان التجديد والتأهيل (2 إلى 3 سنوات)' : '2–3 Years Renovation Warranty (Dubai)'}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {isArabic
                    ? 'نمنح عملاءنا في دبي ضماناً شاملاً يمتد من 2 إلى 3 سنوات على مشاريع التجديد والتأهيل والتشطيبات الكهروميكانيكية والإنشائية، مدعوماً بخدمة صيانة واستجابة نشطة 24/7.'
                    : 'For comprehensive villa renovation and refurbishment projects in Dubai, ACTS provides an official 2 to 3 years warranty on civil works, structural finishes, and integrated MEP systems.'}
                </p>
              </div>

              {/* Company Experience & Active Support Card */}
              <div
                className="card reveal-card delay-3"
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Clock size={20} style={{ color: 'var(--color-gold)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    {isArabic ? '10 سنوات شركة • 22 سنة خبرة • 50+ مشروع' : '10 Yrs Company • 22 Yrs Exp • 50+ Projects'}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {isArabic
                    ? 'تأسست الشركة منذ 10 سنوات ويقودها مهندسون وفنيون يمتلكون أكثر من 22 عاماً من الخبرة المتراكمة في سوق المقاولات بدبي، مع إنجاز أكثر من 50+ مشروعاً راقياً ودعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
                    : 'Founded a decade ago in the UAE and led by engineers with over 22 years of practical field experience, ACTS has completed 50+ luxury projects with 24/7 active support only in emergency conditions via call only.'}
                </p>
              </div>

              {/* Mission Card */}
              <div
                className="card reveal-card delay-4"
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <Target size={20} style={{ color: 'var(--color-gold)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>{t('about.missionTitle')}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {isArabic
                    ? 'تقديم خدمات مقاولات وتشطيب هندسي متكاملة ترتقي بالمساحات السكنية والتجارية في الإمارات، مع حماية استثمارات عملائنا عبر ضمانات حقيقية وأعلى معايير الإتقان والسلامة.'
                    : 'To deliver uncompromising contracting precision, timeless luxury craftsmanship, and dependable project management that elevates living spaces across the UAE while protecting client investments with guaranteed warranties.'}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div
            className="reveal-on-scroll delay-2"
            style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: 'var(--bg-elevated)',
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
                {isArabic ? 'هل ترغب في مناقشة تفاصيل مشروعك مع فريقنا؟' : 'Ready to Discuss Your Project with ACTS?'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                {isArabic
                  ? 'مقاول مسجل لدى شركاء مشاريع في الإمارات • ضمان 2-3 سنوات على التجديد في دبي • دعم للطوارئ فقط 24/7 وعن طريق الاتصال فقط.'
                  : 'UAE Project Partners • 2–3 Years Renovation Warranty • 24/7 Emergency Call Support Only.'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                className="btn btn--primary btn--lg"
                onClick={() => setRfqOpen(true)}
              >
                <span>{t('about.contactCta')}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <RFQModal isOpen={rfqOpen} onClose={() => setRfqOpen(false)} />
    </>
  )
}
