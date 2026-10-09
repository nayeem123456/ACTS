import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, Search, ChevronDown, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useScrolled } from '../../hooks/useScrolled'
import { serviceCategories } from '../../data/services'
import { searchContent, SearchResult } from '../../utils/searchIndex'

interface NavbarProps {
  onOpenRFQ?: () => void
}

export function Navbar({ onOpenRFQ }: NavbarProps) {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language as 'en' | 'ar') || 'en'
  const isArabic = currentLang === 'ar'
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrolled(50)
  const location = useLocation()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchWrapRef = useRef<HTMLDivElement>(null)

  // Toggle Language
  const toggleLanguage = () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(nextLang)
  }

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
  }, [location.pathname])

  // Search query handler
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = searchContent(searchQuery, currentLang)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery, currentLang])

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="ACTS Home">
          <span className="navbar__logo-acts">ACTS</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            UAE
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="navbar__links">
            <li>
              <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
                {t('nav.about')}
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="navbar__dropdown-wrap">
              <NavLink
                to="/services"
                className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                <span>{t('nav.services')}</span>
                <ChevronDown size={14} />
              </NavLink>

              <div className="navbar__dropdown">
                {serviceCategories.map((cat) => (
                  <div key={cat.id} className="navbar__dropdown-category">
                    <div className="navbar__dropdown-category-title">
                      {t(cat.nameKey)}
                    </div>
                    {cat.services.slice(0, 4).map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="navbar__dropdown-item"
                      >
                        {t(service.nameKey)}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>

            <li>
              <NavLink to="/projects" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
                {t('nav.projects')}
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
                {isArabic ? 'اتصل بنا' : 'Contact'}
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Controls (Search, Theme, Language, RFQ button, Hamburger) */}
        <div className="navbar__controls">
          {/* Search Trigger */}
          <div ref={searchWrapRef} style={{ position: 'relative' }}>
            <button
              type="button"
              className="nav-control-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={t('search.label')}
              title={t('search.label')}
            >
              <Search size={18} />
            </button>

            {/* Live Search Popup */}
            {searchOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  right: isArabic ? 'auto' : 0,
                  left: isArabic ? 0 : 'auto',
                  width: '320px',
                  background: 'var(--dropdown-bg)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '0.75rem',
                  zIndex: 1300,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('search.placeholder')}
                    style={{
                      flex: 1,
                      padding: '0.5rem 0.75rem',
                      borderRadius: '6px',
                      border: '1px solid var(--input-border)',
                      background: 'var(--input-bg)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(false)
                      setSearchQuery('')
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Results List */}
                {searchQuery.trim().length > 1 && (
                  <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
                    {searchResults.length > 0 ? (
                      searchResults.map((res) => (
                        <Link
                          key={res.id}
                          to={res.url}
                          style={{
                            display: 'block',
                            padding: '0.5rem 0.65rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            borderBottom: '1px solid var(--border-subtle)',
                            transition: 'background 0.15s',
                          }}
                          className="search-item"
                        >
                          <span
                            style={{
                              fontSize: '0.68rem',
                              textTransform: 'uppercase',
                              color: 'var(--color-gold)',
                              fontWeight: 700,
                              display: 'block',
                            }}
                          >
                            {res.category}
                          </span>
                          <span
                            style={{
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              display: 'block',
                            }}
                          >
                            {res.title}
                          </span>
                        </Link>
                      ))
                    ) : (
                      <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                        {t('search.noResults')} "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="nav-control-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
            title={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            className="nav-control-btn lang-btn"
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Arabic"
            title={isArabic ? 'English' : 'العربية'}
          >
            {isArabic ? 'EN' : 'عربي'}
          </button>

          {/* Quote Button (Desktop) */}
          {onOpenRFQ && (
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={onOpenRFQ}
              style={{ marginInlineStart: '0.25rem' }}
              id="desktop-rfq-btn"
            >
              {isArabic ? 'طلب عرض أسعار' : 'Get a Quote'}
            </button>
          )}

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            type="button"
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>
        </div>
      </div>

      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu__header">
          <button
            type="button"
            className="mobile-menu__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label={t('nav.closeMenu')}
            title={t('nav.closeMenu')}
          >
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu__inner">
          <NavLink to="/" end className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.about')}
          </NavLink>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              className="mobile-menu__link"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{t('nav.services')}</span>
              <ChevronDown
                size={16}
                style={{
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {mobileServicesOpen && (
              <div style={{ paddingInlineStart: '1rem', marginTop: '0.25rem' }}>
                <Link
                  to="/services"
                  className="mobile-menu__service"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontWeight: 600, color: 'var(--color-gold)' }}
                >
                  {isArabic ? 'عرض جميع الخدمات ←' : 'View All Services →'}
                </Link>
                {serviceCategories.map((cat) => (
                  <div key={cat.id}>
                    <div className="mobile-menu__category">{t(cat.nameKey)}</div>
                    {cat.services.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="mobile-menu__service"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t(s.nameKey)}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/projects" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.projects')}
          </NavLink>

          <NavLink to="/contact" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
            {isArabic ? 'اتصل بنا' : 'Contact'}
          </NavLink>

          <div className="mobile-menu__divider" />

          {onOpenRFQ && (
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenRFQ()
              }}
              style={{ width: '100%', justifyContent: 'center', margin: '0.75rem 0' }}
            >
              {isArabic ? 'طلب عرض أسعار رسمي' : 'Request Official RFQ'}
            </button>
          )}

          <div className="mobile-menu__controls">
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={toggleTheme}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={toggleLanguage}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <span>{isArabic ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
