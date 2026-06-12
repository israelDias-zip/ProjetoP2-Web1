import Link from 'next/link';

export default function Header() {
  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.logoTitle}>🛍️ Meu Catálogo</h1>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li>
            <Link href="/" style={styles.link}>Home</Link>
          </li>
          <li>
            <Link href="/produtos" style={styles.link}>Produtos</Link>
          </li>
          <li>
            <Link href="/sobre" style={styles.link}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderBottom: '1px solid #333',
  },
  logoTitle: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    margin: 0,
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 'clamp(0.8rem, 3vw, 1rem)',
  },
};
