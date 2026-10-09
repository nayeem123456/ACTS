import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MessageCircle, X, Send, RotateCcw } from 'lucide-react'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  actionLink?: {
    text: string
    url: string
  }
}

interface ChatbotProps {
  onOpenRFQ?: () => void
}

export function Chatbot({ onOpenRFQ }: ChatbotProps) {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const [isOpen, setIsOpen] = useState(false)
  const [unreadDot, setUnreadDot] = useState(true)
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const messagesRef = useRef<HTMLDivElement>(null)

  const initialBotMessage: Message = {
    id: 'welcome',
    sender: 'bot',
    text: t('chat.welcome'),
  }

  const [messages, setMessages] = useState<Message[]>([initialBotMessage])

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      const messagesContainer = messagesRef.current
      if (messagesContainer) {
        messagesContainer.scrollTo({
          top: messagesContainer.scrollHeight,
          behavior: 'auto',
        })
      }
    }
  }, [messages, isTyping, isOpen])

  // Quick suggestion chips
  const quickQuestions = isArabic
    ? [
        'ما هي خدمات تجديد الفلل؟',
        'هل تقومون ببناء المسابح والحدائق؟',
        'كيف أحصل على عرض أسعار؟',
        'أين تقع مشاريعكم في الإمارات؟',
      ]
    : [
        'What is included in villa renovation?',
        'Do you build swimming pools & landscaping?',
        'How can I get an engineering quote?',
        'What UAE areas do you serve?',
      ]

  const handleOpen = () => {
    setIsOpen(true)
    setUnreadDot(false)
  }

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'bot',
        text: t('chat.welcome'),
      },
    ])
  }

  const generateBotReply = (userQuery: string): Message => {
    const q = userQuery.toLowerCase()

    if (q.includes('villa') || q.includes('renovat') || q.includes('تجديد') || q.includes('فيلا')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'تقدم أكتس خدمات تجديد وتأهيل متكاملة للفلل في الإمارات، تشمل الأعمال المدنية، التكسيات، التشطيب الداخلي والخارجي، وتحديث أنظمة الكهروميكانيك والتكييف.'
          : 'ACTS delivers complete turnkey villa renovation across the UAE — managing structural works, interior fit-outs, MEP upgrades, flooring, bathrooms, and exterior finishes under a single contract.',
        actionLink: {
          text: isArabic ? 'استكشف تجديد الفلل' : 'View Villa Renovation',
          url: '/services/villa-renovation-refurbishment',
        },
      }
    }

    if (q.includes('pool') || q.includes('مسبح') || q.includes('مسابح') || q.includes('swim')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'نحن متخصصون في تصميم وبناء المسابح الخرسانية، وتركيب بلاط الموزاييك، وأنظمة الفلترة والإضاءة، وشلالات المياه وتنسيق الأرضيات المحيطة.'
          : 'We design and construct reinforced concrete swimming pools, complete with mosaic tiling, filtration systems, LED underwater lighting, coping stones, and pool decks.',
        actionLink: {
          text: isArabic ? 'خدمات بناء المسابح' : 'View Pool Construction',
          url: '/services/swimming-pool-construction',
        },
      }
    }

    if (q.includes('landscap') || q.includes('حديق') || q.includes('حدائق') || q.includes('garden')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'تشمل خدماتنا للمساحات الخارجية: العشب الصناعي الممتاز، الممرات الحجرية، البرجولات الخشبية والألمنيوم، الإضاءة الهندسية وشبكات الري.'
          : 'Our outdoor landscaping services include premium artificial grass installation, stone steppers, pergolas, landscape lighting, and irrigation works.',
        actionLink: {
          text: isArabic ? 'تنسيق الحدائق' : 'View Landscaping Services',
          url: '/services/landscaping',
        },
      }
    }

    if (q.includes('mep') || q.includes('electr') || q.includes('ac') || q.includes('hvac') || q.includes('كهرباء') || q.includes('تكييف')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'تغطي خدمات الكهروميكانيك (MEP): الأعمال الكهربائية، لوحات التوزيع، التمديدات الأرضية المسلحة، أنظمة التكييف والتهوية، والتمديدات الصحية.'
          : 'Our MEP engineering services cover complete electrical installations, distribution boards, armoured cabling, HVAC servicing and replacement, and plumbing systems.',
        actionLink: {
          text: isArabic ? 'خدمات الكهروميكانيك' : 'View MEP Services',
          url: '/services/electrical-works',
        },
      }
    }

    if (q.includes('pest') || q.includes('fumig') || q.includes('insect') || q.includes('مكافحة') || q.includes('تبخير')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'نقدم خدمات مكافحة الآفات والتبخير والتعقيم للمنازل والمكاتب والمستودعات والمنشآت التجارية في جميع أنحاء الإمارات.'
          : 'ACTS provides professional pest control and fumigation services for villas, offices, warehouses, and commercial properties across the UAE.',
        actionLink: {
          text: isArabic ? 'خدمات مكافحة الآفات والتبخير' : 'View Pest Control & Fumigation',
          url: '/services/pest-control',
        },
      }
    }

    if (q.includes('quote') || q.includes('cost') || q.includes('price') || q.includes('سعر') || q.includes('تكلف') || q.includes('عرض أسعار')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'يمكنك استخدام حاسبة التكلفة التفاعلية في الصفحة الرئيسية للحصول على تقدير فوري، أو النقر على "طلب عرض أسعار" لترتيب زيارة معاينة هندسية مجانية.'
          : 'You can use our interactive budget calculator on the homepage for an instant estimate, or click below to submit an RFQ for a complimentary engineering site consultation.',
        actionLink: {
          text: isArabic ? 'طلب عرض أسعار رسمي' : 'Submit RFQ Request',
          url: '/contact',
        },
      }
    }

    if (q.includes('where') || q.includes('location') || q.includes('area') || q.includes('أين') || q.includes('موقع') || q.includes('دبي')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'تعمل أكتس في جميع أنحاء دولة الإمارات العربية المتحدة، مع تركيز رئيسي على المشاريع السكنية والتجارية في دبي وأبوظبي والشارقة.'
          : 'ACTS operates across the UAE, delivering projects in Dubai, Abu Dhabi, Sharjah, and other emirates for both private villas and commercial developments.',
      }
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('هاتف') || q.includes('ايميل') || q.includes('واتساب')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isArabic
          ? 'تنويه: أرقام الهواتف والبريد الإلكتروني المباشر تخضع لتأكيد العميل قبل الإطلاق النهائي. يُرجى استخدام نموذج طلب عرض الأسعار في الموقع للتواصل الفوري مع الفريق.'
          : 'Please note: Official direct telephone numbers and emails are pending final client confirmation. You can use our online RFQ form to get in touch with the engineering team immediately.',
        actionLink: {
          text: isArabic ? 'صفحة التواصل وطلب الأسعار' : 'Contact / RFQ Page',
          url: '/contact',
        },
      }
    }

    // Default fallback
    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: t('chat.fallback'),
      actionLink: {
        text: isArabic ? 'عرض جميع الخدمات' : 'Browse All Services',
        url: '/services',
      },
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim()
    if (!query) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate realistic response delay
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = generateBotReply(query)
      setMessages((prev) => [...prev, botResponse])
    }, 600)
  }

  return (
    <div className="chatbot-launcher">
      {/* Floating launcher trigger */}
      <button
        type="button"
        className="chatbot-launcher__btn"
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        aria-label={isOpen ? t('chat.closeButton') : t('chat.openButton')}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {unreadDot && !isOpen && <span className="chatbot-dot" />}
      </button>

      <span className="chatbot-tooltip">{t('chat.tooltip')}</span>

      {/* Chatbot Popup Window */}
      {isOpen && (
        <div className="chatbot-popup" role="dialog" aria-label="ACTS Virtual Assistant">
          {/* Header */}
          <div className="chatbot-popup__header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <span className="chatbot-popup__title">
                {isArabic ? 'مساعد أكتس الهندسي' : 'ACTS Virtual Assistant'}
              </span>
            </div>
            <div className="chatbot-popup__header-controls">
              <button
                type="button"
                className="chatbot-icon-btn"
                onClick={handleClear}
                aria-label={t('chat.clearButton')}
                title={t('chat.clearButton')}
              >
                <RotateCcw size={14} />
              </button>
              <button
                type="button"
                className="chatbot-icon-btn"
                onClick={() => setIsOpen(false)}
                aria-label={t('chat.closeButton')}
                title={t('chat.closeButton')}
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div ref={messagesRef} className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.sender}`}>
                <div>{msg.text}</div>
                {msg.actionLink && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <a
                      href={msg.actionLink.url}
                      onClick={(e) => {
                        if (msg.actionLink?.url === '/contact' && onOpenRFQ) {
                          e.preventDefault()
                          onOpenRFQ()
                        }
                      }}
                      style={{
                        display: 'inline-block',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        textDecoration: 'underline',
                      }}
                    >
                      {msg.actionLink.text} →
                    </a>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-typing">
                <span className="chatbot-typing__dot" />
                <span className="chatbot-typing__dot" />
                <span className="chatbot-typing__dot" />
              </div>
            )}

            {/* Quick suggested pills */}
            {messages.length === 1 && !isTyping && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {isArabic ? 'أسئلة مقترحة:' : 'Suggested questions:'}
                </span>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '0.4rem 0.65rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'start',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input field */}
          <form
            className="chatbot-popup__input"
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
          >
            <input
              type="text"
              className="chatbot-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('chat.inputPlaceholder')}
              aria-label={t('chat.inputPlaceholder')}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={!inputText.trim()}
              aria-label={t('chat.sendButton')}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
