import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '34px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '48px', marginBottom: '21px' }}>✅</div>
      <h1 style={{ fontSize: '34px', fontWeight: 700, marginBottom: '13px' }}>
        Order Confirmed
      </h1>
      <p style={{ fontSize: '16px', color: '#777', maxWidth: '480px', lineHeight: 1.618 }}>
        Thank you for your purchase. You will receive a confirmation email shortly.
        Access credentials and license keys will be delivered within 24 hours.
      </p>
      <Link href="/" style={{
        marginTop: '34px',
        fontFamily: 'SF Mono, monospace',
        fontSize: '13px',
        padding: '13px 34px',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: 500,
        background: '#fff',
        color: '#000',
      }}>
        ← Back to Store
      </Link>
    </main>
  )
}
