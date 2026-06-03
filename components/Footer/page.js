"use client"

import { useState, useEffect } from "react";

export default function Footer() {
    const [year, setYear] = useState('');

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

  return (
    <footer style={styles.footer}>
      <p>&copy; {year} Catálogo de Produtos. Todos os direitos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: '#1a1a1a',
    color: '#888',
    fontSize: '0.9rem',
    borderTop: '1px solid #333',
    marginTop: 'auto',
  }
};