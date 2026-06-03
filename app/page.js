import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.hero}>
      <div style={styles.card}>
        <h1 style={styles.title}>🛍️ Bem-vindo ao Catálogo</h1>
        <p style={styles.subtitle}>Encontre os melhores produtos com os melhores preços em um só lugar.</p>
        <Link href="/produtos" style={{ textDecoration: 'none' }}>
          <button style={styles.button}>
            Ver Produtos <span>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '75vh',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  card: {
    textAlign: 'center',
    maxWidth: '800px',
    padding: '40px 30px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
  },
  badge: {
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '0.8rem',
    fontWeight: '700',
    padding: '6px 14px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#f8faff',
    margin: '20px 0 12px 0',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#4b5563',
    lineHeight: '1.6',
    margin: '0 0 32px 0',
  },
  button: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 28px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
};