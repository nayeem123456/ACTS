/**
 * ACTS Website — Centralized Site Configuration
 * Configured business information; client verification is required before publication.
 */

export const siteConfig = {
  /** Company identity */
  companyName: 'ACTS',
  companyFullName: 'Aftab Chandio Technical Services and Landscape Gardening LLC',
  companyFullNameAr: 'شركة أفتاب تشانديو للخدمات الفنية وتنسيق الحدائق ذ.م.م',
  tagline: 'UAE Renovation, Refurbishment & Landscape Gardening Specialists',
  taglineAr: 'متخصصون في تجديد الفلل وتنسيق الحدائق والخدمات الفنية في الإمارات',

  /** Verified Credentials & Accreditations */
  yearsInCompany: 10,
  yearsExperience: 22,
  projectsCompleted: '50+',
  developerNetwork: 'UAE project partners',
  developerNetworkAr: 'شركاء مشاريع في الإمارات',
  qualityPromise: 'Genuine spare parts • High-quality materials • No compromise in quality',
  qualityPromiseAr: 'قطع غيار أصلية • مواد عالية الجودة • لا تنازل عن الجودة',
  warrantyYears: '2–3 Years',
  warrantyRenovation: '2–3 Years Warranty in Dubai for Renovation & Refurbishment',
  warrantyRenovationAr: 'ضمان من 2 إلى 3 سنوات في دبي لمشاريع التجديد والتأهيل',
  warrantyShort: '2–3 Years Warranty in Dubai',
  warrantyShortAr: 'ضمان 2-3 سنوات في دبي',
  availability: '24/7 active only in emergency conditions via call only',
  availabilityAr: 'نشاط 24/7 في حالات الطوارئ فقط وعن طريق الاتصال فقط',
  registrations: ['UAE project partners'],
  registrationsAr: ['شركاء مشاريع في الإمارات في الإمارات'],
  registrationSummary: 'Serving UAE project partners across the UAE',
  registrationSummaryAr: 'نخدم شركاء مشاريع في الإمارات في جميع أنحاء الإمارات',

  /** Contact Information */
  phone: '+971502960925',
  phoneDisplay: '+971 50 296 0925',
  whatsapp: '+971 50 296 0925',
  whatsappLink: 'https://wa.me/971502960925',
  email: 'aftabtechlandscapegarning@gmail.com',

  /** Physical Address & Operational Territory */
  address: 'ETA Star Tower, Muhaisnah, Dubai, UAE',
  addressAr: 'برج إي تي إيه ستار، المحيصنة، دبي، الإمارات العربية المتحدة',
  operatingTerritory: 'All over the UAE',
  operatingTerritoryAr: 'في جميع أنحاء الإمارات',

  /** SEO */
  domain: import.meta.env.VITE_SITE_DOMAIN || 'https://acts.ae',
  siteName: 'ACTS UAE — Aftab Chandio Technical Services',
  defaultTitle: 'ACTS UAE — Renovation, Swimming Pools & Landscape Gardening',
  defaultDescription:
    'Aftab Chandio Technical Services and Landscape Gardening LLC: serving projects across the UAE with genuine spare parts, high-quality materials, and no compromise in quality.',

  /** Analytics */
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || '',

  /** Social / other links */
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
} as const

export function toAbsoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  const normalizedDomain = siteConfig.domain.replace(/\/+$/, '')
  const normalizedPath = path ? `/${path.replace(/^\/+/, '')}` : '/'
  return normalizedPath === '/' ? `${normalizedDomain}/` : `${normalizedDomain}${normalizedPath}`
}

export default siteConfig
