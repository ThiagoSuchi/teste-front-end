import banner from '../../assets/images/banner.png'
import './MainBanner.scss'

function MainBanner() {
  return (
    <section className="main-banner" aria-label="Promoções">
      <img className="main-banner__image" src={banner} alt="" />
      <div className="main-banner__overlay" />

      <div className="main-banner__content">
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos">Ver produto</a>
      </div>
    </section>
  )
}

export default MainBanner