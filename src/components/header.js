import React, { useState } from 'react'
import {
  Link,
  useI18next,
} from 'gatsby-plugin-react-i18next'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import logo from '../../static/logo.png'
import hamburgerMenu from '../assets/icons/hamburger-menu.png'
import closeIcon from '../assets/icons/close.png'
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
  const [openNavMenu, setOpenNavMenu] = useState(false)
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
          <button
            className='hamburger-menu'
            onClick={() => setOpenNavMenu(true)}
          >
            <img src={hamburgerMenu} />
          </button>
          <nav className='menu'>
            <ul className='menu-list'>
              {Links.map((item, index) => (
                <li key={index}>
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
      {openNavMenu && (
        <div className='side-menu'>
          <div className='side-menu-container'>
            <div className='side-menu-header'>
              <Link to='/' className='logo'>
                <img className='logo-image' src={logo} />
                <div className='logo-name'>
                  Bilmemne
                  <span>Dental</span>
                </div>
              </Link>
              <button
                className='close-menu'
                onClick={() => setOpenNavMenu(!openNavMenu)}
              >
                <img className='close-menu-icon' src={closeIcon} />
              </button>
            </div>
            <nav className='menu'>
            <ul className='menu-list'>
              {Links.map((item, index) => (
                <li className='menu-list-item' key={index}>
                  <Link
                    className='menu-list-item'
                    to={'/' + item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ul className='languages'>
              {languages.map((lng) => (
                <li key={lng}>
                  <Link to={originalPath} language={lng}>
                    <Flag code={lng} />
                  </Link>
                </li>
              ))}
            </ul> */}
          </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
