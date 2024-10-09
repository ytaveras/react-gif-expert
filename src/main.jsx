import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './estilos/styles.css'

// <<ESTOS FUERON LOS ARCHIVOS QUE BORRE CUANDO CREE ESTE PROYECTO>>
// import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GifExpertApp />
  // </StrictMode>,
)
