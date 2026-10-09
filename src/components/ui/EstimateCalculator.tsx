import { useState, useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Calculator, ArrowRight, CheckCircle2, Info } from 'lucide-react'

interface EstimateCalculatorProps {
  onOpenRFQ?: (prefill: {
    propertyType: string
    serviceType: string
    area: number
    tier: string
    estimatedRange: string
  }) => void
}

export function EstimateCalculator({ onOpenRFQ }: EstimateCalculatorProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const calculatorId = useId()

  const [propertyType, setPropertyType] = useState<'villa' | 'apartment' | 'commercial' | 'office'>('villa')
  const [serviceType, setServiceType] = useState<string>('villa-renovation')
  const [area, setArea] = useState<number>(3500)
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('premium')

  // Base pricing rates in AED per sq ft
  const baseRates: Record<string, { standard: number; premium: number; luxury: number }> = {
    'villa-renovation': { standard: 130, premium: 210, luxury: 340 },
    'interior-fitout': { standard: 95, premium: 160, luxury: 270 },
    'swimming-pool': { standard: 150, premium: 240, luxury: 380 },
    'landscaping': { standard: 45, premium: 85, luxury: 150 },
    'mep-works': { standard: 60, premium: 110, luxury: 190 },
    'painting-finishing': { standard: 25, premium: 45, luxury: 80 },
  }

  const currentRates = baseRates[serviceType] || baseRates['villa-renovation']
  const rate = currentRates[tier]
  const baseTotal = Math.round(area * rate)
  const minEstimate = Math.round(baseTotal * 0.9)
  const maxEstimate = Math.round(baseTotal * 1.15)

  const formattedMin = minEstimate.toLocaleString()
  const formattedMax = maxEstimate.toLocaleString()
  const estimateString = `AED ${formattedMin} – ${formattedMax}`

  const handleRequestQuote = () => {
    if (onOpenRFQ) {
      onOpenRFQ({
        propertyType,
        serviceType,
        area,
        tier,
        estimatedRange: estimateString,
      })
    }
  }

  return (
    <div
      id={calculatorId}
      className="card"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-gold)',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '8px',
            background: 'hsla(38, 55%, 60%, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gold)',
          }}
        >
          <Calculator size={22} />
        </div>
        <div>
          <span className="section-label" style={{ marginBottom: 0 }}>
            {isArabic ? 'أداة تقدير التكلفة الفورية' : 'Instant Cost Estimator'}
          </span>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0 }}>
            {isArabic ? 'تقدير ميزانية مشروعك في الإمارات' : 'Estimate Your UAE Project Budget'}
          </h3>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '2rem' }}>
        {isArabic
          ? 'احصل على تقدير تقريبي فوري لمشروع التجديد أو الأعمال الكهروميكانيكية أو المسابح والمناظر الطبيعية وفق معايير السوق الإماراتي.'
          : 'Calculate an instant indicative budgetary estimate for villa renovation, MEP overhauls, pool construction, or landscaping across the UAE.'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
        {/* 1. Property Type */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {isArabic ? 'نوع العقار' : '1. Property Type'}
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {[
              { id: 'villa', labelEn: 'Villa / Townhouse', labelAr: 'فيلا / تاون هاوس' },
              { id: 'apartment', labelEn: 'Apartment / Penthouse', labelAr: 'شقة / بنتهاوس' },
              { id: 'commercial', labelEn: 'Commercial / Retail', labelAr: 'تجاري / تجزئة' },
              { id: 'office', labelEn: 'Corporate Office', labelAr: 'مكاتب وشركات' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPropertyType(item.id as any)}
                style={{
                  padding: '0.65rem 0.75rem',
                  borderRadius: '6px',
                  border: `1.5px solid ${propertyType === item.id ? 'var(--color-gold)' : 'var(--border-light)'}`,
                  background: propertyType === item.id ? 'hsla(38, 55%, 60%, 0.12)' : 'var(--bg-elevated)',
                  color: propertyType === item.id ? 'var(--color-gold)' : 'var(--text-secondary)',
                  fontSize: '0.825rem',
                  fontWeight: propertyType === item.id ? 600 : 400,
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                }}
              >
                {isArabic ? item.labelAr : item.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Service Scope */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {isArabic ? 'نطاق الخدمة الرئيسي' : '2. Primary Service Scope'}
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: '1px solid var(--input-border)',
              background: 'var(--input-bg)',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="villa-renovation">{isArabic ? 'تجديد وتأهيل الفلل الشامل' : 'Full Villa Renovation & Refurbishment'}</option>
            <option value="interior-fitout">{isArabic ? 'تشطيب وتصميم داخلي' : 'Interior Fit-Out & Partitions'}</option>
            <option value="swimming-pool">{isArabic ? 'بناء وتشطيب المسابح' : 'Swimming Pool Construction & Deck'}</option>
            <option value="landscaping">{isArabic ? 'تنسيق الحدائق والمساحات الخارجية' : 'Landscaping & Outdoor Living'}</option>
            <option value="mep-works">{isArabic ? 'أنظمة الكهروميكانيك والتكييف' : 'MEP, HVAC & Electrical Works'}</option>
            <option value="painting-finishing">{isArabic ? 'أعمال الدهان والتكسيات' : 'Interior & Exterior Painting'}</option>
          </select>
        </div>

        {/* 3. Approximate Area */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {isArabic ? 'المساحة التقريبية (قدم مربع)' : '3. Approximate Area (sq ft)'}
            </label>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-gold)' }}>
              {area.toLocaleString()} sq ft (~{Math.round(area * 0.0929)} m²)
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="12000"
            step="250"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: 'var(--color-gold)',
              cursor: 'pointer',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            <span>500 sq ft</span>
            <span>6,000 sq ft</span>
            <span>12,000+ sq ft</span>
          </div>
        </div>

        {/* 4. Finish Specification Tier */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {isArabic ? 'مستوى التشطيب والمواد' : '4. Finish Specification Tier'}
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {[
              { id: 'standard', labelEn: 'Standard', labelAr: 'قياسي', noteEn: 'Quality materials', noteAr: 'مواد موثوقة' },
              { id: 'premium', labelEn: 'Premium', labelAr: 'بريميوم', noteEn: 'Refined European / UAE', noteAr: 'أوروبي وإماراتي مميز' },
              { id: 'luxury', labelEn: 'Luxury', labelAr: 'فاخر', noteEn: 'Bespoke marble & brass', noteAr: 'رخام وتصاميم مخصصة' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTier(item.id as any)}
                style={{
                  padding: '0.65rem 0.5rem',
                  borderRadius: '6px',
                  border: `1.5px solid ${tier === item.id ? 'var(--color-gold)' : 'var(--border-light)'}`,
                  background: tier === item.id ? 'hsla(38, 55%, 60%, 0.12)' : 'var(--bg-elevated)',
                  color: tier === item.id ? 'var(--color-gold)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: '0.825rem', fontWeight: 700 }}>
                  {isArabic ? item.labelAr : item.labelEn}
                </div>
                <div style={{ fontSize: '0.68rem', opacity: 0.8, marginTop: '2px' }}>
                  {isArabic ? item.noteAr : item.noteEn}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Display Box */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-gold)',
          borderRadius: '10px',
          padding: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div>
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: 600 }}>
            {isArabic ? 'الميزانية التقديرية للمشروع' : 'Estimated Budgetary Range'}
          </span>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1.2, marginTop: '0.25rem' }}>
            {estimateString}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            <Info size={14} />
            <span>
              {isArabic
                ? 'تقدير تقريبي أولي خاضع للمعاينة الميدانية وتفاصيل المخططات.'
                : 'Indicative estimate subject to site survey and engineering drawings.'}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn--primary btn--lg"
          onClick={handleRequestQuote}
          style={{ cursor: 'pointer' }}
        >
          <span>{isArabic ? 'تواصل مباشرة لتأكيد التقدير' : 'Connect Directly for Assessment'}</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Feature checkmarks */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginTop: '1.5rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={15} style={{ color: 'var(--color-gold)' }} />
          {isArabic ? 'استشارة ومعاينة ميدانية أولية مجانية' : 'Complimentary initial site inspection'}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={15} style={{ color: 'var(--color-gold)' }} />
          {isArabic ? 'جدول كميات مفصل (BOQ)' : 'Detailed Bill of Quantities (BOQ)'}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <CheckCircle2 size={15} style={{ color: 'var(--color-gold)' }} />
          {isArabic ? 'إدارة متكاملة لجميع المقاولات' : 'Single turnkey contractor management'}
        </span>
      </div>
    </div>
  )
}
