import fallbackProductImage from '../../assets/images/produtos.png'
import type { Product } from '../../types/Product'
import { formatCurrency } from '../../utils/formatCurrency'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article
      className="product-card"
      onClick={() => onClick(product)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick(product)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="product-card__body">
        <img
          className="product-card__image"
          src={product.photo || fallbackProductImage}
          alt={product.productName}
          onError={(event) => {
            event.currentTarget.src = fallbackProductImage
          }}
        />

        <p className="product-card__description">{product.descriptionShort}</p>

        <div className="product-card__price">
          <strong>{formatCurrency(product.price)}</strong>
        </div>

        <span className="product-card__installments">ou 2x sem juros</span>
        <span className="product-card__shipping">Frete grátis</span>

        <button className="product-card__buy" type="button">
          Comprar
        </button>
      </div>

      <h3>{product.productName}</h3>
    </article>
  )
}

export default ProductCard
