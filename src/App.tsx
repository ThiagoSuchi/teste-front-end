import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import MainBanner from './components/MainBanner/MainBanner'
import { getProducts } from './services/products'
import type { Product } from './types/Product'

function App() {
  const [products, setProducts] = useState<Product[]>([])

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

      <main>
        <h1>Produtos</h1>

        <ul>
          {products.map((product) => (
            <li key={product.productName}>
              {product.productName} - R$ {product.price}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App