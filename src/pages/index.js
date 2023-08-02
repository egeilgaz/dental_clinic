import {
  //useTranslation,
  Link,
} from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { SEO } from '../components/seo'
import '../assets/sass/styles.sass'

const IndexPage = () => {
  // const { t } = useTranslation()

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
  const Services = [
    {
      image: 'big-card-1.jpg',
      logo: 'implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: 'big-card-1.jpg',
      logo: 'implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: 'big-card-1.jpg',
      logo: 'implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: 'big-card-1.jpg',
      logo: 'implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: 'big-card-1.jpg',
      logo: 'implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: 'big-card-1.jpg',
      logo: 'implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
  ]

  return (
    <>
      <Header />
      <section className='welcome-card'>
        <div className='container'>
          <div className='small-title'>
            We are BilmemneDental
          </div>
          <div className='container-left'>
            <h1 className='heading-title'>
              Bilmemne Dental Diş Kliniğine
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
        {Cards.map((item, index) => (
          <div key={index} className='about-card'>
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
          <div className='small-title'>
            About Us
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
        {Numbers.map((item, index) => (
          <div key={index} className='number-card'>
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
      <section className='big-cards'>
        <div className='big-card'>
          <img
            className='big-card-image'
            src='big-card-1.jpg'
            alt=''
          />
          <div className='big-card-content'>
            <img
              className='content-logo'
              src='tooth.png'
              alt=''
            />
            <h2 className='content-title'>Uygun Fiyat</h2>
            <p className='content-content'>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quam itaque nesciunt atque?
            </p>
          </div>
        </div>
        <div className='big-card-2'>
          <img
            className='big-card-image'
            src='big-card-2.jpg'
            alt=''
          />
          <div className='big-card-content'>
            <img
              className='content-logo'
              src='tooth.png'
              alt=''
            />
            <h2 className='content-title'>Uygun Fiyat</h2>
            <p className='content-content'>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quam itaque nesciunt atque?
            </p>
          </div>
        </div>
        <img src='big-card-3.jpg' alt='' />
      </section>
      <section className='services'>
        <div className='container'>
          <div className='small-title'>
            Our Services
          </div>
          <div className='title-side'>
            <h2 className='heading-title'>
              <span>Best quality</span>
              services
            </h2>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
            </p>
          </div>
          <div className='services-card-list'>
            {Services.map((item, index) => (
              <div key={index} className='services-card'>
                <img
                  className='card-image'
                  src='big-card-1.jpg'
                  alt=''
                />

                <div className='card-content'>
                  <div className='header'>
                    <img
                      className='logo'
                      src={item.logo}
                      alt=''
                    />
                    <h3>Teeth checkup</h3>
                  </div>
                  <p className='content'>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit
                  </p>
                  <Link className='link' to='/'>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='contact-us'>
        <div className='container'>
          <div className='small-title'>
            Contact Us
          </div>
          <div className='title-side'>
            <h2 className='heading-title'>
              Become The Next Our
              <span>Happy Client</span>
            </h2>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
            </p>
          </div>
          <div className='image-side'>
            <img
              className='image-bg'
              src='welcome-image-bg.png'
              alt=''
            />
            <img
              className='heading-image'
              src='contact-us.png'
              alt=''
            />
          </div>
        </div>
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
