import { useState, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Chatbot } from '../chatbot/Chatbot'
import { RFQModal } from '../ui/RFQModal'
import { ScrollProgress } from '../ui/ScrollProgress'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation()
  const [rfqOpen, setRfqOpen] = useState(false)
  const [rfqPrefill, setRfqPrefill] = useState<any>(undefined)

  const handleOpenRFQ = (prefill?: any) => {
    setRfqPrefill(prefill)
    setRfqOpen(true)
  }

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollProgress />
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent')}
      </a>

      {/* Navbar */}
      <Navbar onOpenRFQ={() => handleOpenRFQ()} />

      {/* Main Content */}
      <main id="main-content" style={{ flex: 1 }}>
        {children}
      </main>

      {/* Chatbot Floating Widget */}
      <Chatbot onOpenRFQ={() => handleOpenRFQ()} />

      {/* Global RFQ Modal */}
      <RFQModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        initialData={rfqPrefill}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
