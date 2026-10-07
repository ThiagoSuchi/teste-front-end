import { useRef } from 'react'
import type { Product } from '../../types/Product'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSection.scss'

interface ProductSectionProps {
  products: Product[]
  onProductClick: (product: Product) => void
  showCategories?: boolean
}

function ProductSection({
  products,
  onProductClick,
  showCategories = true,
}: ProductSectionProps) {
  const productsViewport = useRef<HTMLDivElement>(null)

  function scrollProducts(direction: number) {
    productsViewport.current?.scrollBy({
      behavior: 'smooth',
      left: direction * 328,
    })
  }

  return (
    <section
      className={`products${showCategories ? '' : ' products--without-categories'}`}
      aria-labelledby={`products-title-${showCategories ? 'with-categories' : 'without-categories'}`}
    >
      <div className="products__inner layout-container">
        <header className="products__header">
          <div className="products__title">
            <span />
            <h2
              id={`products-title-${showCategories ? 'with-categories' : 'without-categories'}`}
            >
              Produtos relacionados
            </h2>
            <span />
          </div>
          {!showCategories && <a href="#produtos">Ver todos</a>}
        </header>

        {showCategories && (
          <nav className="products__tags" aria-label="Categorias de produtos">
            {['celular', 'acessórios', 'tablets', 'NOTEBOOKS', 'TVs', 'Ver todos'].map(
              (tag, index) => (
                <a className={index === 0 ? 'is-active' : ''} href="/" key={tag}>
                  {tag}
                </a>
              ),
            )}
          </nav>
        )}

        <div className="products__showcase" id="produtos">
          <button
            className="products__arrow"
            type="button"
            aria-label="Produtos anteriores"
            onClick={() => scrollProducts(-1)}
          >
          </button>
          <div className="products__viewport" ref={productsViewport}>
            <div className="products__list">
              {products.map((product) => (
                <ProductCard
                  key={product.productName}
                  product={product}
                  onClick={onProductClick}
                />
              ))}
            </div>
          </div>
          <button
            className="products__arrow"
            type="button"
            aria-label="Próximos produtos"
            onClick={() => scrollProducts(1)}
          >
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
