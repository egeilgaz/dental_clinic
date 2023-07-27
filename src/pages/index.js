import {
  useTranslation,
  Link,
} from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { SEO } from '../components/seo'
import '../assets/sass/styles.sass'

const IndexPage = () => {
  const { t } = useTranslation()

  const Cards = [
    {
      icon: 'card-icon.png',
      title: 'Uygun Fiyat',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque nesciunt atque?',
    },
    {
      icon: 'card-icon-2.png',
      title: 'Uygun Fiyat',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque nesciunt atque?',
    },
    {
      icon: 'card-icon-3.png',
      title: 'Uygun Fiyat',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque nesciunt atque?',
    },
  ]

  const Numbers = [
    {
      icon: 'tooth.png',
      title: '1200',
      content: 'Happy Fiyat',
    },
    {
      icon: 'clinic.png',
      title: '15',
      content: 'Lorem ipsum dolor',
    },
    {
      icon: 'dentist.png',
      title: '70',
      content: 'Lorem ipsum dolor',
    },
  ]

  return (
    <>
      <Header />
      <section className='welcome-card'>
        <div className='container'>
          <div className='container-left'>
            <h1 className='heading-title'>
              Go Dental Diş Kliniğine
              <span>Hoşgeldiniz</span>
            </h1>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient.
            </p>
          </div>
          <div className='container-right'>
            <img
              className='image-bg'
              src='welcome-image-bg.png'
              alt=''
            />
            <img
              className='heading-image'
              src='welcome-card.png'
              alt=''
            />
          </div>
        </div>
      </section>
      <section className='about-clinic'>
        {Cards.map((item) => (
          <div className='about-card'>
            <img
              className='about-card-image'
              src={item.icon}
              alt=''
            />
            <h2 className='about-card-title'>
              Uygun Fiyat
            </h2>
            <p className='about-card-content'>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quam itaque nesciunt atque?
            </p>
          </div>
        ))}
      </section>
      <section className='about-us'>
        <div className='container'>
          <div className='container-left'>
            <img
              className='image-bg'
              src='welcome-image-bg.png'
              alt=''
            />
            <img
              className='heading-image'
              src='about-us-card.png'
              alt=''
            />
          </div>
          <div className='container-right'>
            <h1 className='heading-title'>
              the best
              <span>dental clinic</span>
              that you can trust
            </h1>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient.
            </p>
            <p className='heading-content'>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Consequuntur tempora
              officiis aliquid quaerat expedita corporis
              tenetur dignissimos voluptates! Cumque.
            </p>
            <ul className='feature-list'>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
            </ul>
            <Link to='/' className='primary-button'>
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className='numbers'>
        {Numbers.map((item) => (
          <div className='number-card'>
            <img
              className='number-card-image'
              src={item.icon}
              alt=''
            />
            <h2 className='number-card-title'>
              {item.title} <img src='plus.png' alt='' />
            </h2>
            <p className='number-card-content'>
              {item.content}
            </p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <SEO title='tamam' />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
