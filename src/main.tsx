// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import RootLayout from './layout'; // Ensure this path is correct
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout>
        <App />
      </RootLayout>
    </BrowserRouter>
  </StrictMode>,
);
