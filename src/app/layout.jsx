import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Rasindu Nethmina - Academic Portfolio',
  description: 'Academic Portfolio of Rasindu Nethmina',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="dark-mode">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
