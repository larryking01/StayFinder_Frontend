import './bookHotel.scss';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import { IoLocationSharp } from 'react-icons/io5';
import { PaystackButton } from 'react-paystack';
import NavbarComponent from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import axios from 'axios';

const BookHotel = () => {
  const params = useParams();
  const server_url = process.env.REACT_APP_PROD_API_URL;

  // setting up state.
  const confirmReference = useRef(null);
  const detailsSectionRef = useRef(null);

  const [bookingHotelObject, setBookingHotelObject] = useState({});
  const [bookingCustomerFirstName, setBookingCustomerFirstName] = useState('');
  const [bookingCustomerLastName, setBookingCustomerLastName] = useState('');
  const [bookingCustomerEmail, setBookingCustomerEmail] = useState('');
  const [bookingCustomerNumber, setBookingCustomerNumber] = useState('');
  const [bookingFieldsErrorStatus, setBookingFieldsErrorStatus] =
    useState(false);
  const [showBookingConfirmPage] = useState(false);
  const [bookingFieldsErrorMessage, setBookingFieldsErrorMessage] =
    useState('');


  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);


  // fetch the booking hotel.
  useEffect(() => {
    const fetchBookingHotel = async () => {
      try {
        let response = await axios.get(`${server_url}/get/room-details/${params.hotel_name}/${params.room_id}`)
        setBookingHotelObject({...response.data})
      }
      catch( error ) {
        alert("error occurred")
      }
      finally {
        console.log("finished")
      }
    }

    fetchBookingHotel()
  }, [server_url, params.hotel_name, params.room_id]);

  
  // updating state values.
  const UpdateCustomerFirstName = (event) => {
    setBookingCustomerFirstName(event.target.value);
  };

  const UpdateCustomerLastName = (event) => {
    setBookingCustomerLastName(event.target.value);
  };

  const UpdateCustomerEmail = (event) => {
    setBookingCustomerEmail(event.target.value);
  };

  const UpdateCustomerNumber = (event) => {
    setBookingCustomerNumber(event.target.value);
  };


  // handling book hotel action.
  const HandleBookHotelAction = async () => {
    let regex =
      /^(?:(?:[^<>()[\].,;:\s@"]+(?:\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(?:(?:\[(?:[0-9]{1,3}\.){3}[0-9]{1,3}\])|(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;

    if (
      bookingCustomerFirstName.length < 1 ||
      bookingCustomerLastName.length < 1 ||
      bookingCustomerEmail.length < 1 ||
      bookingCustomerNumber.length < 1
    ) {
      setBookingFieldsErrorStatus(true);
      setBookingFieldsErrorMessage(
        'One or more fields is(are) empty. All fields are required'
      );
    } else if (!bookingCustomerEmail.match(regex)) {
      setBookingFieldsErrorStatus(true);
      setBookingFieldsErrorMessage(
        'Your email is invalid, please enter a valid email...'
      );
    } else {
      console.log("totalCost * 100");
    }
  };

return (
  <div>
    <NavbarComponent />

    <section className="booking">
      <Row className="booking__header">
        <Col>
          <h4 className="booking__title">
            {bookingHotelObject.room_number}
          </h4>

          <br />

          <h6 className="booking__meta mb-4">
            Sign in and save up to 20% of the total booking costs with our
            members only deal.
          </h6>
        </Col>
      </Row>

      <Row xs={1} md={2}>
        {/* Hotel details column */}
        <Col className="booking__card mb-5">
          <div>
            <h4 className="booking__features-title">Hotel Features</h4>

            <h4>
              <Rating value={4} readOnly name="read-only" />
            </h4>

            <p className="booking__meta">
              <IoLocationSharp /> {bookingHotelObject.room_location}
            </p>

            <hr />

            <Row md={2} xs={1}>
              <Col>
                <h5 className="booking__section-title">
                  Check-in{' '}
                  <span className="booking__date-format">
                    (mm-dd-yyyy)
                  </span>
                </h5>

                <p className="booking__meta">
                  start date value here
                </p>
              </Col>

              <Col>
                <h5 className="booking__section-title">
                  Check-out{' '}
                  <span className="booking__date-format">
                    (mm-dd-yyyy)
                  </span>
                </h5>

                <p className="booking__meta">
                  End date value here
                </p>
              </Col>
            </Row>

            <Row md={2} xs={1}>
              <Col>
                <h5 className="booking__section-title">
                  No. Of Adults
                </h5>

                <p className="booking__meta">
                  number of adult visitors
                </p>
              </Col>

              <Col>
                <h5 className="booking__section-title">
                  No. Of Children
                </h5>

                <p className="booking__meta">
                  number of child visitors
                </p>
              </Col>
            </Row>

            <Row md={2} xs={1}>
              <Col>
                <h5 className="booking__section-title">
                  No. Of Rooms Booked
                </h5>

                <p className="booking__meta">
                  number of booked rooms
                </p>
              </Col>

              <Col>
                <h5 className="booking__section-title">
                  Length Of Stay
                </h5>

                <p className="booking__meta">
                  length of stay nights
                </p>
              </Col>

              <hr />
            </Row>

            <>
              <h5 className="booking__section-title">
                Summary of features
              </h5>

              <Row md={4} xs={1}>
                {Object.keys(bookingHotelObject).length > 0
                  ? bookingHotelObject.room_features?.map(
                      (feature, index) => (
                        <Col key={index}>
                          <div className="booking__feature mb-3">
                            {feature}
                          </div>
                        </Col>
                      )
                    )
                  : null}
              </Row>
            </>

            <hr />

            <>
              <h5 className="booking__section-title">
                Pricing (GH<span>&#8373;</span>)
              </h5>

              <Row md={2}>
                <Col xs={7}>
                  <h6 className="booking__meta">
                    <span>&#8373;</span>{' '}
                    {bookingHotelObject.room_rate} *
                    {' '}
                    {window.localStorage.getItem(
                      'length_of_stay'
                    )}{' '}
                    nights
                  </h6>

                  <h6 className="booking__meta">
                    VAT (12.5%)
                  </h6>

                  <h6 className="booking__meta">
                    NHIL (2.5%)
                  </h6>

                  <h6 className="booking__meta">
                    COVID LEVY (1%)
                  </h6>

                  <h3 className="booking__section-title booking__total">
                    Total Cost
                  </h3>
                </Col>

                <Col>
                  <h6 className="booking__meta booking__price">
                    <span>&#8373;</span> basic cost
                  </h6>

                  <h6 className="booking__meta booking__price">
                    <span>&#8373;</span> vat rate
                  </h6>

                  <h6 className="booking__meta booking__price">
                    <span>&#8373;</span> nhil rate
                  </h6>

                  <h6 className="booking__meta booking__price">
                    <span>&#8373;</span> covid levy
                  </h6>

                  <h3 className="booking__section-title booking__total">
                    <span>&#8373;</span> total cost
                  </h3>
                </Col>
              </Row>
            </>

            <hr />

            <Row>
              <section>
                <h3 className="booking__section-title">
                  Non refundable
                </h3>

                <p className="booking__meta">
                  If you cancel or don't attend your hotel booking,
                  you'll not be refunded any of your original
                  payment.
                </p>
              </section>
            </Row>

            <hr />

            <Row>
              <section>
                <h3 className="booking__section-title">
                  Instant confirmation
                </h3>

                <p className="booking__meta">
                  Your booking will be confirmed instantly by Email.
                  You'll get a confirmation email right after.
                </p>
              </section>
            </Row>
          </div>
        </Col>

        {/* Payment details column */}
        <Col
          className="booking__card mb-5"
          ref={detailsSectionRef}
        >
          <div>
            <h4 className="booking__section-title">
              Step 1: Your Payment Details
            </h4>

            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="First Name *"
                  className="form-control-no-text text-control-focus-style"
                  onChange={UpdateCustomerFirstName}
                  value={bookingCustomerFirstName}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Last Name *"
                  className="form-control-no-text text-control-focus-style"
                  onChange={UpdateCustomerLastName}
                  value={bookingCustomerLastName}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email Address *"
                  className="form-control text-control-focus-style"
                  onChange={UpdateCustomerEmail}
                  value={bookingCustomerEmail}
                />

                <Form.Text>
                  We'll send your booking confirmation to this email
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Mobile Number *"
                  className="form-control text-control-focus-style"
                  onChange={UpdateCustomerNumber}
                  value={bookingCustomerNumber}
                />

                <Form.Text>
                  We'll only contact you in an emergency
                </Form.Text>
              </Form.Group>
            </Form>
          </div>

          <hr />

          <Button
            variant="custom"
            className="booking__submit-btn"
            onClick={HandleBookHotelAction}
          >
            Book
          </Button>

          <p>
            <Form.Text className="booking__error">
              {bookingFieldsErrorStatus
                ? bookingFieldsErrorMessage
                : null}
            </Form.Text>
          </p>

          <hr />
        </Col>
      </Row>
    </section>

    {showBookingConfirmPage && (
      <section>
        <div
          className="booking__confirmation"
          ref={confirmReference}
        >
          <h4 className="booking__confirmation-title mb-4">
            Confirm your booking details for {params.hotel_name}
          </h4>

          <div className="booking__confirmation-card">
            {/* confirmation section content unchanged except classes */}

            <Row
              className="confirm-booking-details-row mb-4"
              md={2}
              xs={1}
            >
              <Col>
                <PaystackButton
                  className="booking__pay-btn"
                />
              </Col>

              <Col>
                <Button
                  variant="custom"
                  className="booking__edit-btn"
                >
                  I want to edit my booking information
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    )}

    <section className="footer-gap"></section>

    <Footer />
    <ScrollToTop />
  </div>
);
};

export default BookHotel;
