import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollRevealManager
 * High-performance, disciplined scroll motion system using IntersectionObserver.
 * Observes elements with .reveal-on-scroll, .reveal-text, .reveal-card, .reveal-stat, .reveal-scale, .reveal-badge
 * and activates their .is-revealed state smoothly as the user scrolls into view.
 */
export function ScrollRevealManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document
        .querySelectorAll(
          '.reveal-on-scroll, .reveal-text, .reveal-card, .reveal-stat, .reveal-scale, .reveal-badge'
        )
        .forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    )

    const attachObservers = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-text, .reveal-card, .reveal-stat, .reveal-scale, .reveal-badge'
      )
      elements.forEach((el) => {
        // If element is already above or within the initial viewport, reveal smoothly
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 30) {
          el.classList.add('is-revealed')
        } else if (!el.classList.contains('is-revealed')) {
          observer.observe(el)
        }
      })
    }

    // Initial check after paint
    const timer = setTimeout(attachObservers, 60)

    // Secondary pass to account for image loads or late layout shifts
    const timer2 = setTimeout(attachObservers, 350)

    // MutationObserver to observe newly rendered dynamic components
    const mutObserver = new MutationObserver(() => {
      attachObservers()
    })

    mutObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      observer.disconnect()
      mutObserver.disconnect()
    }
  }, [pathname])

  return null
}
