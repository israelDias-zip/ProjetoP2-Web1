import LikeButton from '../../../components/LikeButton';

export default async function Detalhe({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const p = await res.json();

  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <img src={p.image} alt={p.title} style={{ width: '200px' }} />
      <h1>{p.title}</h1>
      <p>{p.description}</p>
      <strong>R$ {p.price}</strong>
      <br /><br />
      <LikeButton />
    </div>
  );
}