"use client"; 

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleChange(event) {
    const textoDigitado = event.target.value;
    setQuery(textoDigitado);
    
    onSearch(textoDigitado);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputWrapper}>
        <span style={styles.icon}>🔍</span>
        <input
          type="text"
          placeholder="Buscar produtos por nome..."
          value={query}
          onChange={handleChange}
          style={styles.input}
        />
        {query && (
          <button 
            type="button" 
            onClick={() => { setQuery(''); onSearch(''); }} 
            style={styles.clearButton}
          >
            ✕
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: {
    marginBottom: '24px',
    width: '100%',
    maxWidth: '500px',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    padding: '0 0 0 12px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  icon: {
    fontSize: '1.1rem',
    color: '#9ca3af',
    marginRight: '8px',
  },
  input: {
    width: '100%',
    padding: '12px 0 12px 6px',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
  },
  clearButton: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    fontSize: '0.9rem',
    padding: '4px',
  }
};