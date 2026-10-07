import ferramentas from '../../assets/categories/ferramentas 1.png'
import tecnologia from '../../assets/categories/tecnologia.png'
import cuidadosDeSaude from '../../assets/categories/cuidados-de-saude 1.png'
import whiskey from '../../assets/categories/whiskey.png'
import supermercados from '../../assets/categories/supermercados 1.png'
import corrida from '../../assets/categories/corrida 1.png'
import moda from '../../assets/categories/moda-1.png'
import './CategoryList.scss'

const categories = [
  { name: 'Tecnologia', image: tecnologia, featured: true },
  { name: 'Supermercado', image: supermercados },
  { name: 'Bebidas', image: whiskey },
  { name: 'Ferramentas', image: ferramentas },
  { name: 'Saúde', image: cuidadosDeSaude },
  { name: 'Esportes e Fitness', image: corrida },
  { name: 'Moda', image: moda },
]

function Categories() {
  return (
    <section className="categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="sr-only">
        Compre por categoria
      </h2>

      <div className="categories__list layout-container">
        {categories.map((category) => (
          <a
            className={`categories__item${category.featured ? ' categories__item--featured' : ''}`}
            href="/"
            key={category.name}
          >
            <span className="categories__icon">
              <img src={category.image} alt="" />
            </span>
            <span className="categories__name">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories
