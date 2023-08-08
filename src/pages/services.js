import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import {
  //useTranslation,
  Link,
} from 'gatsby-plugin-react-i18next'

function services() {
  const Services = [
    {
      image: '/big-card-1.jpg',
      logo: '/implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: '/big-card-1.jpg',
      logo: '/implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: '/big-card-1.jpg',
      logo: '/implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: '/big-card-1.jpg',
      logo: '/implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: '/big-card-1.jpg',
      logo: '/implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      image: '/big-card-1.jpg',
      logo: '/implant.png',
      title: 'Teeth checkup',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
  ]
  const QuestionList = [
    {
      question:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
      answer:
        'Cevap 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta distinctio deserunt porro tempore maiores enim? Minus voluptate eligendi optio.',
    },
    {
      question:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
      answer:
        'Cevap 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta distinctio deserunt porro tempore maiores enim? Minus voluptate eligendi optio.',
    },
  ]
  return (
    <>
      <Header />
      <section className='about-header'>
        <div className='container'>
          <div className='small-title'>Our Services</div>
          <div className='container-left'>
            <h1 className='heading-title'>
              Our
              <span>Dental Services</span>
            </h1>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient.
            </p>
          </div>
        </div>
      </section>
      <section className='services'>
        <div className='container'>
          <div className='small-title'>Our Services</div>
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
                  src={item.image}
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
      <section className='faq'>
        <div className='container'>
          <div className='small-title'>FAQ</div>
          <div className='title-side'>
            <h2 className='heading-title'>
              Sık sorulan
              <span>Sorular</span>
            </h2>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
            </p>
          </div>
          <div className='question-list'>
            {QuestionList.map((item) => (
              <details className='question'>
                <summary>
                  {item.question}
                  <span>
                    <img
                      className='arrow'
                      src='/arrow.png'
                      alt=''
                    />
                  </span>
                </summary>
                <p className='answer'>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className='contact-us'>
      <div className='small-title'>Contact Us</div>
        <div className='container'>
          
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
              src='/welcome-image-bg.png'
              alt=''
            />
            <img
              className='heading-image'
              src='/contact-us.png'
              alt=''
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

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
export default services
