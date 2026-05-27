"use client";
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import styles from './produtos.module.css';

export default function Produtos() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(r => r.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  function handleSearch(query) {
    setFiltered(
      products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.grid}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}