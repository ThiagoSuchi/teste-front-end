import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import MainBanner from './components/MainBanner/MainBanner'
import CategoryList from './components/CategoryList/CategoryList'
import ProductSection from './components/ProductSection/ProductSection'
import ProductModal from './components/ProductModal/ProductModal'
import PartinerSection from './components/PartinerSection/PartinerSection'
import BrandList from './components/BrandList/BrandList'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import { getProducts } from './services/products'
import type { Product } from './types/Product'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error)
      }
    }

    loadProducts()
  }, [])

  return (
    <>
      <Header />
      <MainBanner />
      <CategoryList />
      <ProductSection
        products={products}
        onProductClick={setSelectedProduct}
      />
      <PartinerSection />
      <ProductSection
        products={products}
        onProductClick={setSelectedProduct}
        showCategories={false}
      />
      <PartinerSection />
      <BrandList />
      <ProductSection
        products={products}
        onProductClick={setSelectedProduct}
        showCategories={false}
      />
      <Newsletter />
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default App