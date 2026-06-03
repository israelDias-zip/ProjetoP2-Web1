import Header from '../components/Header/page';
import Footer from '../components/Footer/page';
import './globals.css';

export const metadata = { title: 'Catálogo de Produtos' };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}