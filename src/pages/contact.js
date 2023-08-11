import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'


function contact() {
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
  // const [showTopBtn, setShowTopBtn] = useState(false)
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 400) {
  //       setShowTopBtn(true)
  //     } else {
  //       setShowTopBtn(false)
  //     }
  //   })
  // }, [])
  return (
    <>
      <Header />
      <section className='about-header'>
        <div className='container'>
          <div className='small-title'>Contact Us</div>
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
            {QuestionList.map((item, index) => (
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
      {/* {showTopBtn && (
        <button
          className='scroll-up'
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }}
        >
          <img src='/arrow.png' alt='' />
        </button>
      )} */}
      <a
        href='https://wa.me/905066953207'
        target='_blank'
        className='whatsapp'
      >
        <img src='/whatsapp.png' alt='' />
        Whatsapp
      </a>
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
export default contact

export const Head = () => (
  <SEO
    title='Bizimle İletişime Geçin!'
    description='Burası klinikle alakalı olan açıklama bölümü buralar önemli'
  />
)
