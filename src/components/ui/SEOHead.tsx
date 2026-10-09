import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig, toAbsoluteUrl } from '../../config/site'

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  robots?: string
  structuredData?: Record<string, unknown>
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = '/hero-uae-skyline.jpg',
  ogType = 'website',
  robots = 'index,follow',
  structuredData,
}: SEOHeadProps) {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  useEffect(() => {
    // 1. Title
    const formattedTitle = title
      ? `${title} | ${siteConfig.companyName} UAE`
      : siteConfig.defaultTitle
    document.title = formattedTitle

    // 2. Standard metadata
    const descContent = description || siteConfig.defaultDescription
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMetaTag('name', 'description', descContent)
    setMetaTag('name', 'robots', robots)

    // 3. OpenGraph tags
    const absoluteImageUrl = toAbsoluteUrl(ogImage)
    const absoluteCanonicalUrl = canonicalUrl ? toAbsoluteUrl(canonicalUrl) : toAbsoluteUrl(window.location.pathname)
    setMetaTag('property', 'og:title', formattedTitle)
    setMetaTag('property', 'og:description', descContent)
    setMetaTag('property', 'og:image', absoluteImageUrl)
    setMetaTag('property', 'og:url', absoluteCanonicalUrl)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:locale', currentLang === 'ar' ? 'ar_AE' : 'en_AE')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', formattedTitle)
    setMetaTag('name', 'twitter:description', descContent)
    setMetaTag('name', 'twitter:image', absoluteImageUrl)

    // 4. Canonical link
    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (robots.includes('noindex')) {
      canonicalLink?.remove()
    } else {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute('href', absoluteCanonicalUrl)
    }

    // 5. JSON-LD
    const existingJsonLd = document.head.querySelector('script[data-seo-json-ld="true"]')
    existingJsonLd?.remove()
    if (structuredData) {
      const jsonLd = document.createElement('script')
      jsonLd.type = 'application/ld+json'
      jsonLd.dataset.seoJsonLd = 'true'
      jsonLd.textContent = JSON.stringify(structuredData)
      document.head.appendChild(jsonLd)
    }
  }, [title, description, canonicalUrl, ogImage, ogType, robots, structuredData, currentLang])

  return null
}
