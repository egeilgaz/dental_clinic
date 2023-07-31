import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import logo from '../../static/logo.png'
import { useTranslation } from 'gatsby-plugin-react-i18next'

function Footer() {
  const { t } = useTranslation()
  const socailMedias = [
    {
      icon: 'twitter',
      link: 'https://www.instagram.com/gulsanacikbasonenklinik/',
    },
    {
      icon: 'facebook',
      link: 'https://www.instagram.com/gulsanacikbasonenklinik/',
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com/gulsanacikbasonenklinik/',
    },
  ]
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
  const contactInfos = [
    {
      icon: 'map',
      content: 'Korutürk, Özağaç Sk., 35330 Balçova/İzmir',
    },
    { icon: 'phone', content: '+90 (533) 636 9296' },
  ]
  return (
    <footer className='footer'>
      <div>
        <Link to='/' className='logo'>
          <img className='logo-image' src={logo} />
          <div className='logo-name'>
            Bilmemne
            <span>Dental</span>
          </div>
        </Link>
        <p className='footer-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <ul className='socail-media-list'>
          {socailMedias.map((item,index) => (
            <li key={index}>
              <Link
                className='socail-media-list-item'
                to={'/' + item.link}
              >
                <img src={item.icon + '.png'} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className='footer-menu-list'>
        {Links.map((item,index) => (
          <li key={index}>
            <Link
              className='footer-menu-list-item'
              to={'/' + item.link}
            >
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>

      <ul className='contact-list'>
        {contactInfos.map((item,index) => (
          <li key={index} className='contact-list-item'>
            <img
              className='item-image'
              src={`${item.icon}.png`}
            />
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
