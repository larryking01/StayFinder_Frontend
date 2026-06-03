import './FAQs.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowDownSquare, BsArrowUpSquare } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from '../Navbar/NavBar';
import Footer from '../Footer/Footer.jsx';

const FrequentlyAskedQuestionsHelp = () => {
  const navigate = useNavigate();

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const [showFAQAns1, setShowFAQAns1] = useState(false);
  const [showFAQAns2, setShowFAQAns2] = useState(false);
  const [showFAQAns3, setShowFAQAns3] = useState(false);
  const [showFAQAns4, setShowFAQAns4] = useState(false);
  const [showFAQAns5, setShowFAQAns5] = useState(false);
  const [showFAQAns6, setShowFAQAns6] = useState(false);
  const [showFAQAns7, setShowFAQAns7] = useState(false);
  const [showFAQAns8, setShowFAQAns8] = useState(false);

  const question_answer_array = [
    {
      question: 'Q: When can I book a hotel?',
      icon: showFAQAns1 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer: 'A: Anytime you feel like it. We got you.',
      faqAnswerShow: showFAQAns1,
      setFaqAnswerShow: setShowFAQAns1,
    },
    {
      question: 'Q: What is the least price for a hotel?',
      icon: showFAQAns2 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer: 'A: GHS 200.00',
      faqAnswerShow: showFAQAns2,
      setFaqAnswerShow: setShowFAQAns2,
    },
    {
      question: 'Q: What are the best hotels near Labadi Pleasure Beach?',
      icon: showFAQAns3 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer:
        "A: Popular hotels close to Labadi Pleasure Beach include Labadi Beach Hotel, La-Palm Royal Beach Hotel, and His Majesty's Hotel.",
      faqAnswerShow: showFAQAns3,
      setFaqAnswerShow: setShowFAQAns3,
    },
    {
      question: 'Q: Which hotels are closest to Kotoka Airport?',
      icon: showFAQAns4 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer:
        'A: Popular hotels close to Kotoka Airport include Accra Marriott Hotel, Best Western Premier Accra Airport Hotel, and Mahogany Lodge.',
      faqAnswerShow: showFAQAns4,
      setFaqAnswerShow: setShowFAQAns4,
    },
    {
      question: 'Q: What are the best romantic hotels in Accra?',
      icon: showFAQAns5 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer:
        'A: Kempinski Hotel Gold Coast City, La Villa Boutique Hotel, and Labadi Beach Hotel received great reviews from travelers looking for a romantic hotel in Accra.',
      faqAnswerShow: showFAQAns5,
      setFaqAnswerShow: setShowFAQAns5,
    },
    {
      question: 'Q: What are the best cheap hotels in Accra?',
      icon: showFAQAns6 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer:
        'A: Popular cheap hotels in Accra include La Villa Boutique Hotel, Alisa Hotels North Ridge, and ibis Styles Accra Airport Hotel.',
      faqAnswerShow: showFAQAns6,
      setFaqAnswerShow: setShowFAQAns6,
    },
    {
      question: 'Q: What are the best hotels with a spa in Accra?',
      icon: showFAQAns7 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer:
        'A: Kempinski Hotel Gold Coast City, Labadi Beach Hotel, and Movenpick Ambassador Hotel Accra have a spa and received excellent reviews from travelers in Accra.',
      faqAnswerShow: showFAQAns7,
      setFaqAnswerShow: setShowFAQAns7,
    },
    {
      question: 'Q: Which hotels in Accra are good for families?',
      icon: showFAQAns8 ? (
        <BsArrowUpSquare size={22} />
      ) : (
        <BsArrowDownSquare size={22} />
      ),
      answer:
        'A: Kempinski Hotel Gold Coast City, La Villa Boutique Hotel, and Accra Marriott Hotel all received great reviews from families traveling in Accra.',
      faqAnswerShow: showFAQAns8,
      setFaqAnswerShow: setShowFAQAns8,
    },
  ];



return (
  <div>
    <NavbarComponent />

    <section className="faq">
      <div className="faq__header">
        <h3 className="faq__title">Frequently Asked Questions</h3>

        <hr style={{ width: '35%' }} />

        <p className="faq__description">
          Have any any questions? Go through our list of Frequently Asked
          Questions to see if we have provided an answer to it.
        </p>

        <p className="faq__description">
          If you can't find your question of interest addressed, head over to
          our{' '}
          <span
            className="faq__contact-link"
            onClick={() => navigate('/help-contact-us')}
          >
            Contact Us
          </span>{' '}
          page and ask us directly.
        </p>
      </div>

      <section className="faq__content">
        {question_answer_array.map((question_answer, index) => (
          <div key={index}>
            <div
              className={`faq__item ${
                question_answer.faqAnswerShow
                  ? 'faq__item--active'
                  : 'faq__item--inactive'
              } mb-4`}
              onClick={() =>
                question_answer.setFaqAnswerShow(
                  !question_answer.faqAnswerShow
                )
              }
            >
              <Row>
                <Col md={10} sm={8} xs={9}>
                  <h5 className="faq__question">
                    {question_answer.question}
                  </h5>
                </Col>

                <Col>
                  <span className="faq__icon">
                    {question_answer.icon}
                  </span>
                </Col>
              </Row>

              <Row>
                <div
                  className={`faq__answer ${
                    question_answer.faqAnswerShow
                      ? 'faq__answer--visible'
                      : 'faq__answer--hidden'
                  }`}
                >
                  {question_answer.answer}
                </div>
              </Row>
            </div>

            <hr />
          </div>
        ))}
      </section>
    </section>

    <Footer />
  </div>
);
};

export default FrequentlyAskedQuestionsHelp;
