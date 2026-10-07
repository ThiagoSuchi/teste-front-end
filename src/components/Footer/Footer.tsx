import brandLogo from '../../assets/icons/brand.png'
import facebookIcon from '../../assets/icons/facebook.png'
import instagramIcon from '../../assets/icons/instagram.png'
import linkedinIcon from '../../assets/icons/linkedin.png'
import './Footer.scss'

const footerGroups = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
]

const socialLinks = [
  { name: 'Instagram', icon: instagramIcon },
  { name: 'Facebook', icon: facebookIcon },
  { name: 'LinkedIn', icon: linkedinIcon },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__inner layout-container">
          <div className="footer__brand">
            <img src={brandLogo} alt="eConverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <nav aria-label="Redes sociais">
              <ul className="footer__socials">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a href="/" aria-label={social.name}>
                      <img src={social.icon} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__divider" />

          <div className="footer__navigation">
            {footerGroups.map((group) => (
              <nav aria-labelledby={`footer-${group.title}`} key={group.title}>
                <h2 id={`footer-${group.title}`}>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="/">{link}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}

export default Footer
