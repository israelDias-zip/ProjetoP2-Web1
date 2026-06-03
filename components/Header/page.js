import Link from 'next/link';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>🛍️ Meu Catálogo</h1>
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
    padding: '1rem 2rem',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderBottom: '1px solid #333',
  },
  navList: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};