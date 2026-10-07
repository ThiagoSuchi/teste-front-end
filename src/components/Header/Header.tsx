import './Header.scss'
import brand from '../../assets/icons/brand.png'
import creditCard from '../../assets/icons/CreditCard.png'
import crownSimple from '../../assets/icons/CrownSimple.png'
import heart from '../../assets/icons/Heart.png'
import magnifyingGlass from '../../assets/icons/MagnifyingGlass.png'
import shoppingCart from '../../assets/icons/ShoppingCart.png'
import shieldCheck from '../../assets/icons/ShieldCheck.png'
import truck from '../../assets/icons/Truck.png'
import userCircle from '../../assets/icons/UserCircle.png'

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__benefit">
          <img src={shieldCheck} alt="" />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </div>

        <div className="header__benefit">
          <img src={truck} alt="" />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </div>

        <div className="header__benefit">
          <span>
            <strong>Parcele</strong> suas compras
          </span>
          <img src={creditCard} alt="" />
        </div>
      </div>

      <div className="header__main">
        <a className="header__brand" href="/" aria-label="eConverse">
          <img src={brand} alt="eConverse" />
        </a>

        <form className="header__search">
          <label htmlFor="search" className="sr-only">
            Buscar produtos
          </label>

          <input
            id="search"
            type="search"
            placeholder="O que você está buscando?"
          />

          <button type="submit" aria-label="Buscar">
            <img src={magnifyingGlass} alt="" />
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Favoritos">
            <img src={heart} alt="" />
          </button>

          <button type="button" aria-label="Minha conta">
            <img src={userCircle} alt="" />
          </button>

          <button type="button" aria-label="Carrinho">
            <img src={shoppingCart} alt="" />
          </button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <ul>
          <li>
            <a href="/">Todas categorias</a>
          </li>

          <li>
            <a href="/">Supermercado</a>
          </li>

          <li>
            <a href="/">Livros</a>
          </li>

          <li>
            <a href="/">Moda</a>
          </li>

          <li>
            <a href="/">Lançamentos</a>
          </li>

          <li>
            <a href="/">Ofertas do dia</a>
          </li>

          <li>
            <a className="header__subscription" href="/">
              <img src={crownSimple} alt="" />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header