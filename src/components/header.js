import React from 'react'
import {
  Link,
  useI18next,
} from 'gatsby-plugin-react-i18next'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import logo from '../../static/logo.png'
import hamburgerMenu from '../assets/icons/hamburger-menu.png'
import Flag from 'react-world-flags'

function Header() {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()

  const Links = [
    {
      link: '',
      name: t('home'),
    },
    {
      link: 'about-us',
      name: t('about-us'),
    },
    {
      link: 'services',
      name: t('services'),
    },
    {
      link: 'contact',
      name: t('contact'),
    },
  ]
  return (
    <header className='main-header'>
      <div className='container'>
        <Link to='/' className='logo'>
          <img className='logo-image' src={logo} />
          <div className='logo-name'>
            Bilmemne
            <span>Dental</span>
          </div>
        </Link>
        <div className='header-right'>
          <img
            className='hamburger-menu'
            src={hamburgerMenu}
          />

          <nav className='menu'>
            <ul className='menu-list'>
              {Links.map((item) => (
                <li>
                  <Link
                    className='menu-list-item'
                    to={'/' + item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='languages'>
              {languages.map((lng) => (
                <li key={lng}>
                  <Link to={originalPath} language={lng}>
                    <Flag code={lng} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
