import partnerImage from '../../assets/images/Mask Group.png'
import './PartnerSection.scss'

function PartnerSection() {
  return (
    <section className="partner-section" aria-labelledby="partner-section-title">
      <div className="partner-section__list layout-container">
        {[1, 2].map((partner) => (
          <article className="partner-section__inner" key={partner}>
            <img
              className="partner-section__image"
              src={partnerImage}
              alt=""
            />
            <div className="partner-section__overlay" />
            <div className="partner-section__content">
              <h2 id={partner === 1 ? 'partner-section-title' : undefined}>
                Parceiros
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <a href="#produtos">Confira</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PartnerSection
