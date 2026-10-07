import { useEffect, useRef, useState, type MouseEvent } from 'react'
import fallbackProductImage from '../../assets/images/produtos.png'
import type { Product } from '../../types/Product'
import { formatCurrency } from '../../utils/formatCurrency'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) {
      return
    }

    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousActiveElement?.focus()
    }
  }, [onClose, product])

  if (!product) {
    return null
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="product-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
      onClick={handleOverlayClick}
    >
      <div className="product-modal__content" tabIndex={-1}>
        <button
          className="product-modal__close"
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>

        <img
          className="product-modal__image"
          src={product.photo}
          alt={product.productName}
          onError={(event) => {
            event.currentTarget.src = fallbackProductImage
          }}
        />

        <div className="product-modal__information">
          <h2 id="product-modal-title">{product.productName}</h2>
          <strong>{formatCurrency(product.price)}</strong>
          <p id="product-modal-description">{product.descriptionShort}</p>
          <a className="product-modal__details" href="#produtos">
            Veja mais detalhes do produto &gt;
          </a>
          <div className="product-modal__actions">
            <div className="product-modal__quantity" aria-label="Quantidade">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                −
              </button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((value) => value + 1)}
              >
                +
              </button>
            </div>
            <button className="product-modal__buy" type="button">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
