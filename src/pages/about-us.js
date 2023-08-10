import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import {
  //useTranslation,
  Link,
} from 'gatsby-plugin-react-i18next'

function aboutUs() {
  const Cards = [
    {
      icon: '/card-icon.png',
      title: 'Uygun Fiyat',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque nesciunt atque?',
    },
    {
      icon: '/card-icon-2.png',
      title: 'Uygun Fiyat',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque nesciunt atque?',
    },
    {
      icon: '/card-icon-3.png',
      title: 'Uygun Fiyat',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque nesciunt atque?',
    },
  ]

  const MemberList = [
    {
      image: '/contact-us.png',
      name: 'Gülşan Önen',
      role: 'Dentist',
    },
    {
      image: '/contact-us.png',
      name: 'Ecem Ilgaz',
      role: 'Assistant',
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
          <div className='small-title'>About Us</div>
          <div className='container-left'>
            <h1 className='heading-title'>
              We are
              <span>Bilmemne Dental</span>
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
      <section className='about-us'>
        <div className='container'>
          <div className='container-left'>
            <img
              className='image-bg'
              src='/welcome-image-bg.png'
              alt=''
            />
            <img
              className='heading-image'
              src='/about-us-card.png'
              alt=''
            />
          </div>
          <div className='container-right'>
            <div className='small-title'>About Clinic</div>
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
                  <img src='/check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='/check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='/check.png' alt='' />
                </span>
                Lorem, ipsum.
              </li>
              <li className='feature-list-item'>
                <span className='check'>
                  <img src='/check.png' alt='' />
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
      <section className='our-team'>
        <div className='small-title'>Our Team</div>
        <div className='container'>
          <div className='title-side'>
            <h2 className='heading-title'>
              Our Expert
              <span>Dentist</span>
            </h2>
            <p className='heading-content'>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
            </p>
          </div>
          <div className='team-card-list'>
            {MemberList.map((item,index) => (
              <div key={index} className='team-card'>
                <img
                  className='team-card-image'
                  src={item.image}
                  alt=''
                />
                <p className='team-info'>
                  <h2 className='member-name'>
                    {item.name}
                  </h2>
                  <span className='member-role'>
                    {item.role}
                  </span>
                </p>
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
            {QuestionList.map((item,index) => (
              <details key={index} className='question'>
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

export default aboutUs
