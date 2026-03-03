'use client'

import { useState } from 'react'

const PRODUCTS = [
  {
    id: 'enterprise',
    name: 'Enterprise License',
    description: 'Full BlackRoad OS enterprise deployment with dedicated support, SLA guarantees, and unlimited agents.',
    price: '$4,999 / yr',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE ?? '',
    badge: 'Most Popular',
  },
  {
    id: 'quantum-api',
    name: 'Quantum API Access',
    description: 'Programmatic access to all BlackRoad OS quantum endpoints. Rate limits removed. Includes SDK.',
    price: '$999 / yr',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_QUANTUM_API ?? '',
    badge: null,
  },
  {
    id: 'developer',
    name: 'Developer Subscription',
    description: 'Individual developer access. Up to 5 repos, 2 domains, and ∞ agent deployments.',
    price: '$149 / mo',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_DEVELOPER ?? '',
    badge: null,
  },
]

function ProductCard({ product }: { product: typeof PRODUCTS[number] }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    if (!product.priceId) {
      setError('Checkout is not yet configured for this product. Contact sales@blackroad.io.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: product.priceId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error ?? 'Checkout failed. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      background: '#111',
      border: '1px solid #2a2a2a',
      borderRadius: '8px',
      padding: '34px',
      display: 'flex',
      flexDirection: 'column',
      gap: '13px',
      position: 'relative',
    }}>
      {product.badge && (
        <span style={{
          position: 'absolute',
          top: '-11px',
          left: '21px',
          fontFamily: 'SF Mono, monospace',
          fontSize: '10px',
          background: 'linear-gradient(135deg, #F5A623, #FF1D6C)',
          color: '#fff',
          padding: '3px 10px',
          borderRadius: '99px',
          fontWeight: 600,
        }}>{product.badge}</span>
      )}
      <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>{product.name}</h3>
      <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.618, margin: 0 }}>{product.description}</p>
      <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>{product.price}</div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '13px',
          padding: '13px 21px',
          borderRadius: '6px',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 600,
          background: loading ? '#333' : '#fff',
          color: loading ? '#777' : '#000',
          transition: 'background 0.15s',
        }}
      >
        {loading ? 'Redirecting…' : 'Purchase'}
      </button>
      {error && (
        <p style={{ fontSize: '12px', color: '#f87171', margin: 0, lineHeight: 1.5 }}>{error}</p>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav style={{
        background: '#0a0a0a',
        borderBottom: '1px solid #2a2a2a',
        padding: '0 34px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
          <a href="https://blackroad.io" style={{
            fontFamily: 'SF Mono, Fira Code, monospace',
            fontSize: '16px',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
          }}>BlackRoad OS</a>
          <span style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '10px',
            color: '#555',
            background: '#1a1a1a',
            padding: '2px 8px',
            borderRadius: '3px',
          }}>v2.0</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#4ade80',
          }} />
          <span style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '11px',
            color: '#555',
          }}>Operational</span>
        </div>
      </nav>

      {/* Main */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '89px 34px 55px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#555',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          padding: '5px 13px',
          borderRadius: '4px',
          marginBottom: '34px',
        }}>
          blackroadquantum.store
        </div>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          letterSpacing: '-1px',
          marginBottom: '21px',
          background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Quantum Store
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#777',
          maxWidth: '560px',
          lineHeight: 1.618,
          marginBottom: '55px',
        }}>
          Enterprise quantum solutions and licensing portal.
        </p>

        {/* Products */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '21px',
          maxWidth: '960px',
          width: '100%',
          marginBottom: '89px',
        }}>
          {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#2a2a2a',
          maxWidth: '600px',
          width: '100%',
        }}>
          {[
            { label: 'REPOS', value: '200+' },
            { label: 'DOMAINS', value: '20' },
            { label: 'AI AGENTS', value: '∞' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#111',
              padding: '34px',
              textAlign: 'left',
            }}>
              <div style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '11px',
                color: '#555',
                marginBottom: '8px',
              }}>{stat.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 600 }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a',
        borderTop: '1px solid #2a2a2a',
        padding: '21px 34px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#555',
        }}>© 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '21px' }}>
          {[
            { label: 'Privacy', href: 'https://blackroad.io/privacy' },
            { label: 'Terms', href: 'https://blackroad.io/terms' },
            { label: 'GitHub', href: 'https://github.com/BlackRoad-OS' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontFamily: 'SF Mono, monospace',
              fontSize: '11px',
              color: '#555',
              textDecoration: 'none',
            }}>{label}</a>
          ))}
        </div>
      </footer>
    </>
  )
}

