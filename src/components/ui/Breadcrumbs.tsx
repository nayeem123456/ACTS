import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from './JsonLd'
import { toAbsoluteUrl } from '../../config/site'

export interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: toAbsoluteUrl(item.path) } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <nav aria-label="Breadcrumb" className="breadcrumbs-nav" style={{ margin: '1rem 0 1.5rem' }}>
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          fontSize: '0.85rem',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <li aria-hidden="true" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                  <ChevronRight size={14} />
                </li>
              )}
              <li style={{ display: 'flex', alignItems: 'center' }}>
                {isLast || !item.path ? (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    style={{ color: isLast ? 'var(--color-gold)' : 'var(--text-secondary)', fontWeight: isLast ? 600 : 400 }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    className="breadcrumb-link"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
      </nav>
    </>
  )
}
