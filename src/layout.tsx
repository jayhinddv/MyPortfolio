// src/RootLayout.tsx
import { cn } from './lib/utils';
import Navbar from './components/Navbar';
import App from './App';
import './globals.css'; // Ensure this file is included for styles

export default function RootLayout():JSX.Element {
  return (
    <html lang="en">
      <body>
        <main
          className={cn(
            "flex relative min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20",
            { "bg-white": true } // Adjust based on your needs
          )}
        >
          {/* NAVBAR */}
          <Navbar />
          <App />
        </main>
      </body>
    </html>
  );
}
