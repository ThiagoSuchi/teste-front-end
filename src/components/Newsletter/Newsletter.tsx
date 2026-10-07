import type { FormEvent } from 'react'
import './Newsletter.scss'

function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner layout-container">
        <div className="newsletter__content">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
            da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <div className="newsletter__field">
              <label htmlFor="newsletter-name">Nome</label>
              <input id="newsletter-name" name="name" type="text" placeholder="Digite seu nome" />
            </div>

            <div className="newsletter__field">
              <label htmlFor="newsletter-email">E-mail</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <button type="submit">Inscrever</button>
          </div>

          <label className="newsletter__consent" htmlFor="newsletter-consent">
            <input id="newsletter-consent" name="consent" type="checkbox" />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
