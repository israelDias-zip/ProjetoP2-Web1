"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={styles.aviso}>Carregando detalhes do produto...</div>;
  if (!product) return <div style={styles.aviso}>Produto não encontrado.</div>;

  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const urlGoogleSearch = `https://www.google.com/search?q=${encodeURIComponent(product.title)}`;

  return (
    <div style={styles.container}>
      <button onClick={() => router.back()} style={styles.backButton}>
        ← Voltar para Produtos
      </button>

      <div style={styles.detailCard}>
        <div style={styles.imageSection}>
          <span style={styles.badge}>{product.category}</span>
          <img src={product.image} alt={product.title} style={styles.image} />
        </div>

        <div style={styles.infoSection}>
          <h1 style={styles.title}>{product.title}</h1>
          
          <div style={styles.ratingContainer}>
            <span style={styles.stars}>⭐ {product.rating?.rate}</span>
            <span style={styles.count}>({product.rating?.count} avaliações de clientes)</span>
          </div>

          <div style={styles.price}>{precoFormatado}</div>

          <div style={styles.descriptionContainer}>
            <h3 style={styles.descriptionTitle}>Descrição do Produto</h3>
            <p style={styles.description}>{product.description}</p>
          </div>

          <a 
            href={urlGoogleSearch} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.googleButton}
          >
            Buscar este produto no Google 🌐
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#2563eb',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '24px',
  },
  detailCard: {
    display: 'flex',
    gap: '40px',
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
    flexWrap: 'wrap', 
  },
  imageSection: {
    flex: '1 1 400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #f3f4f6',
    borderRadius: '12px',
    position: 'relative',
    minHeight: '400px',
  },
  badge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    padding: '6px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    objectFit: 'contain',
  },
  infoSection: {
    flex: '1 2 500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 16px 0',
    lineHeight: '1.2',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  stars: {
    color: '#fbbf24',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  count: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#059669',
    marginBottom: '24px',
  },
  descriptionTitle: {
    color: '#000000'
  },
  descriptionContainer: {
    borderTop: '1px solid #4f6186',
    paddingTop: '20px',
    marginBottom: '32px',
  },
  description: {
    color: '#4b5563',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  googleButton: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '14px 24px',
    backgroundColor: '#ea4335', 
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1.1rem',
    boxShadow: '0 4px 6px rgba(234, 67, 53, 0.2)',
    transition: 'background-color 0.2s',
  },
  aviso: {
    textAlign: 'center',
    padding: '100px 20px',
    fontSize: '1.2rem',
    color: '#6b7280',
  }
};