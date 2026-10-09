import { allServices } from '../data/services'
import en from '../i18n/locales/en'
import ar from '../i18n/locales/ar'

export interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
  type: 'service' | 'page'
}

/**
 * Searches across services and pages in the active language
 */
export function searchContent(query: string, lang: 'en' | 'ar' = 'en'): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const isArabic = lang === 'ar'
  const locale = isArabic ? ar : en
  const results: SearchResult[] = []

  // 1. Search services
  for (const service of allServices) {
    // Resolve name & description using the key
    const nameKeyParts = service.nameKey.split('.')
    
    // Safely extract from locale
    let title = ''
    let description = ''

    try {
      const serviceId = nameKeyParts[1]
      const serviceData = (locale.services as Record<string, any>)[serviceId]
      if (serviceData) {
        title = serviceData.name || ''
        description = serviceData.description || serviceData.intro || ''
      }
    } catch {
      // fallback
    }

    if (!title) {
      title = service.slug.replace(/-/g, ' ')
    }

    // Category name
    let categoryName = service.category
    try {
      categoryName = (locale.services.categories as Record<string, string>)[service.categoryKey] || service.category
    } catch {
      // fallback
    }

    const matchesTitle = title.toLowerCase().includes(q)
    const matchesDesc = description.toLowerCase().includes(q)
    const matchesCategory = categoryName.toLowerCase().includes(q)

    if (matchesTitle || matchesDesc || matchesCategory) {
      results.push({
        id: service.id,
        title,
        description,
        category: categoryName,
        url: `/services/${service.slug}`,
        type: 'service',
      })
    }
  }

  // 2. Search main pages
  const staticPages = [
    {
      id: 'about',
      title: isArabic ? 'عن الشركة' : 'About Us',
      description: isArabic
        ? 'تعرف على شركة أكتس للخدمات الفنية والتجديدات'
        : 'Learn about ACTS — UAE renovation and technical services',
      category: isArabic ? 'صفحة' : 'Page',
      url: '/about',
    },
    {
      id: 'services',
      title: isArabic ? 'الخدمات' : 'All Services',
      description: isArabic
        ? 'استكشف خدماتنا في التجديد والأعمال الكهروميكانيكية والتشطيبات'
        : 'Explore our comprehensive renovation, MEP, and civil services',
      category: isArabic ? 'صفحة' : 'Page',
      url: '/services',
    },
    {
      id: 'projects',
      title: isArabic ? 'المشاريع' : 'Projects Gallery',
      description: isArabic
        ? 'معرض مشاريع أكتس في التجديد والمناظر الطبيعية والمسابح'
        : 'ACTS portfolio of renovation, landscaping, and pool projects',
      category: isArabic ? 'صفحة' : 'Page',
      url: '/projects',
    },
    {
      id: 'contact',
      title: isArabic ? 'اتصل بنا' : 'Contact Us & RFQ',
      description: isArabic
        ? 'تواصل مع فريق أكتس لطلب عرض أسعار أو استشارة هندسية'
        : 'Contact ACTS team to request a quotation or consultation',
      category: isArabic ? 'صفحة' : 'Page',
      url: '/contact',
    },
  ]

  for (const page of staticPages) {
    if (
      page.title.toLowerCase().includes(q) ||
      page.description.toLowerCase().includes(q)
    ) {
      results.push({
        ...page,
        type: 'page',
      })
    }
  }

  return results
}
