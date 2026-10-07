import brandLogo from '../../assets/icons/brand.png'
import './BrandList.scss'

const brands = [
  { name: 'eConverse', logo: brandLogo },
  { name: 'eConverse', logo: brandLogo },
  { name: 'eConverse', logo: brandLogo },
  { name: 'eConverse', logo: brandLogo },
  { name: 'eConverse', logo: brandLogo },
]

function BrandList() {
  return (
    <section className="brand-list" aria-labelledby="brand-list-title">
      <div className="brand-list__inner layout-container">
        <h2 id="brand-list-title">Navegue por marcas</h2>

        <div className="brand-list__showcase">
          <button
            className="brand-list__arrow brand-list__arrow--previous"
            type="button"
            aria-label="Marcas anteriores"
          />

          <ul className="brand-list__items">
            {brands.map((brand, index) => (
              <li className="brand-list__item" key={`${brand.name}-${index}`}>
                <img src={brand.logo} alt={brand.name} />
              </li>
            ))}
          </ul>

          <button
            className="brand-list__arrow brand-list__arrow--next"
            type="button"
            aria-label="Próximas marcas"
          />
        </div>
      </div>
    </section>
  )
}

export default BrandList
