import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = { title: 'Catálogo de Produtos' };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}