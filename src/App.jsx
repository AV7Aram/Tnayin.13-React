import { Routes, Route } from 'react-router-dom'
import { Home, Products, Product, NotFound } from './pages'

import { Layout } from './components/Layout/Layout'

import './App.css'

function App({ products, socialIcons, classIcons, infoIcons, footerInfo, footerIcons, footerSpan, footerA }) {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons} footerInfo={footerInfo} footerIcons={footerIcons} footerSpan={footerSpan} footerA={footerA} />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product products={products} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
