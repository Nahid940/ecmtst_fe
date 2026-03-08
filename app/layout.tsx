import Navbar from './components/Navbar';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="bg-sky-50 text-gray-800 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}