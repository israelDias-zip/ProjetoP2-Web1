import Link from 'next/link';

export default function ProductCard({ product }) {
  const { title, price, category, image, rating } = product;

  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
  }).format(price);

  return (
    <div style={styles.card}>
      <span style={styles.badge}>{category}</span>
      
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>

      <div style={styles.content}>
        <h3 style={styles.title} title={title}>
          {title.length > 45 ? `${title.substring(0, 45)}...` : title}
        </h3>
        
        <div style={styles.ratingContainer}>
          <span style={styles.stars}>⭐ {rating?.rate}</span>
          <span style={styles.count}>({rating?.count} avaliações)</span>
        </div>

        <div style={styles.price}>{precoFormatado}</div>
        
        <Link href={`/produtos/${product.id}`} style={styles.button}>
            Ver Detalhes
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s, boxShadow 0.2s',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    fontSize: '0.75rem',
    padding: '4px 8px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  imageContainer: {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    marginTop: '16px',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 8px 0',
    height: '42px',
    overflow: 'hidden',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '12px',
    fontSize: '0.85rem',
  },
  stars: {
    color: '#fbbf24',
    fontWeight: 'bold',
  },
  count: {
    color: '#9ca3af',
  },
  price: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#059669',
    marginBottom: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: 'auto'
  },
};