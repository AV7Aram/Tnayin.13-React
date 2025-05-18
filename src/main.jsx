import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { products, socialIcons, classIcons, infoIcons, footerInfo, footerIcons, footerSpan, footerA } from './db/db.js'

import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App
      products={products}
      socialIcons={socialIcons}
      classIcons={classIcons}
      infoIcons={infoIcons}
      footerInfo={footerInfo}
      footerIcons={footerIcons}
      footerSpan={footerSpan}
      footerA={footerA} />
  </BrowserRouter>
)
