import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>🛍️ Bem-vindo ao Catálogo</h1>
      <p>Encontre os melhores produtos em um só lugar.</p>
      <Link href="/produtos">
        <button>Ver Produtos</button>
      </Link>
    </div>
  );
}