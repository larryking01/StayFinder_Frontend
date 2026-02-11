import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import { IoLocationSharp } from 'react-icons/io5';
import { PaystackButton } from 'react-paystack';
import NavbarComponent from './NavBar';
import Footer from './Footer';
import ScrollToTop from '../Configuration/ScrollToTop';
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

      <section className="book-hotel-wrapper-section">
        <Row className="booking-hotel-name-row">
          <Col>
            <h4 className="booking-hotel-name-primary">
              {bookingHotelObject.room_number}
            </h4>{' '}
            <br />
            <h6 className="booking-hotel-extra-details mb-4">
              Sign in and save up to 20% of the total booking costs with our
              members only deal.
            </h6>
          </Col>
        </Row>

        <Row xs={1} md={2}>
          {/* Hotel details column */}
          <Col className="booking-hotel-summary-div mb-5">
            <div className="">
              <h4 className="booking-hotel-features"> Hotel Features </h4>
              <h4>
                {' '}
                <Rating value={4} readOnly name="read-only" />{' '}
              </h4>
              <p className="booking-hotel-extra-details">
                {' '}
                <IoLocationSharp /> {bookingHotelObject.room_location}
              </p>
              <hr />

              <Row md={2} xs={1}>
                <Col>
                  <h5 className="section-sub-header">
                    Check-in{' '}
                    <span className="booking-checkin-date-format">
                      (mm-dd-yyyy)
                    </span>
                  </h5>
                  <p className="booking-hotel-extra-details">
                    start date value here
                  </p>
                </Col>

                <Col>
                  <h5 className="section-sub-header">
                    Check-out{' '}
                    <span className="booking-checkin-date-format">
                      (mm-dd-yyyy)
                    </span>
                  </h5>
                  <p className="booking-hotel-extra-details">End date value here</p>
                </Col>
              </Row>

              <Row md={2} xs={1}>
                <Col>
                  <h5 className="section-sub-header">No. Of Adults</h5>
                  <p className="booking-hotel-extra-details">
                    number of adult visitors
                  </p>
                </Col>

                <Col>
                  <h5 className="section-sub-header">No. Of Children</h5>
                  <p className="booking-hotel-extra-details">
                    number of child visitors
                  </p>
                </Col>
              </Row>

              <Row md={2} xs={1}>
                <Col>
                  <h5 className="section-sub-header">No. Of Rooms Booked</h5>
                  <p className="booking-hotel-extra-details">
                    number of booked rooms
                  </p>
                </Col>

                <Col>
                  <h5 className="section-sub-header">Length Of Stay</h5>
                  <p className="booking-hotel-extra-details">
                    length of stay nights
                  </p>
                </Col>
                <hr />
              </Row>

              {
                <>
                  <h5 className="section-sub-header">Summary of features</h5>
                  <Row md={4} xs={1}>
                    {Object.keys(bookingHotelObject).length > 0
                      ? bookingHotelObject.room_features?.map(
                          (feature, index) => (
                            <Col key={index}>
                              <div className="book-room-features mb-3">
                                {feature}
                              </div>
                            </Col>
                          )
                        )
                      : null}
                  </Row>
                </>
              }

              <hr />

              <>
                <h5 className="section-sub-header">
                  Pricing (GH<span>&#8373;</span>)
                </h5>
                <Row md={2}>
                  <Col xs={7}>
                    <h6 className="booking-hotel-extra-details">
                      <span>&#8373;</span> {bookingHotelObject.room_rate} *{' '}
                      {window.localStorage.getItem('length_of_stay')} nights
                    </h6>

                    <h6 className="booking-hotel-extra-details">VAT (12.5%)</h6>

                    <h6 className="booking-hotel-extra-details">NHIL (2.5%)</h6>

                    <h6 className="booking-hotel-extra-details">
                      COVID LEVY (1%)
                    </h6>

                    <h3 className="section-sub-header total-cost">
                      Total Cost
                    </h3>
                  </Col>

                  <Col>
                    <h6 className="booking-hotel-extra-details pricing">
                      <span>&#8373;</span> basic cost
                    </h6>

                    <h6 className="booking-hotel-extra-details pricing">
                      <span>&#8373;</span> vat rate
                    </h6>

                    <h6 className="booking-hotel-extra-details pricing">
                      <span>&#8373;</span> nhil rate
                    </h6>

                    <h6 className="booking-hotel-extra-details pricing">
                      <span>&#8373;</span> covid levy
                    </h6>

                    <h3 className="section-sub-header total-cost ">
                      <span>&#8373;</span> total cost
                    </h3>
                  </Col>
                </Row>
              </>
              <hr />

              <Row>
                <section>
                  <h3 className="section-sub-header">Non refundable</h3>
                  <p className="booking-hotel-extra-details">
                    If you cancel or don't attend your hotel booking, you'll not
                    be refunded any of your original payment.
                  </p>
                </section>
              </Row>
              <hr />

              <Row>
                <section>
                  <h3 className="section-sub-header">Instant confirmation</h3>
                  <p className="booking-hotel-extra-details">
                    Your booking will be confirmed instantly by Email. You'll
                    get a confirmation email right after.
                  </p>
                </section>
              </Row>
            </div>
          </Col>
          {/* End of hotel details column */}

          {/*Payment details column */}
          <Col
            className="booking-hotel-summary-div mb-5"
            ref={detailsSectionRef}
          >
            <div className="">
              <h4 className="section-sub-header">
                Step 1: Your Payment Details
              </h4>
              <Form>
                <Form.Group>
                  {/* <Form.Label>First name*</Form.Label> */}
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
                  <Form.Text>We'll only contact you in an emergency</Form.Text>
                </Form.Group>
              </Form>
            </div>
            <hr />

            <Button
              variant="custom"
              className="book-button"
              onClick={HandleBookHotelAction}
            >
              Book
            </Button>
            <p>
              <Form.Text className="booking-fields-error-message">
                {bookingFieldsErrorStatus === true
                  ? bookingFieldsErrorMessage
                  : null}
              </Form.Text>
            </p>

            <hr />
          </Col>

          {/* End of payment details column */}
        </Row>
      </section>

      {showBookingConfirmPage && (
        <section>
          <div
            className="book-hotel-confirmation-section"
            ref={confirmReference}
          >
            <h4 className="confirm-booking-header mb-4">
              Confirm your booking details for {params.hotel_name}
            </h4>
            <div className="booking-confirmation-div">
              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <h5 className="booking-hotel-detail-header">Check-in date</h5>
                  <p>start date </p>
                </Col>

                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Check-out date
                  </h5>
                  <p>end date</p>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Number of adults
                  </h5>
                  <p>number of adult visitors</p>
                </Col>

                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Number of children
                  </h5>
                  <p>Number of children</p>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Number of rooms booked
                  </h5>
                  <p>Number of rooms</p>
                </Col>

                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Length of stay
                  </h5>
                  <p>Length of stay nights</p>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <h5 className="booking-hotel-detail-header">Room features</h5>
                  {
                    <>
                      <Row md={3} xs={3}>
                        {Object.keys(bookingHotelObject).length > 0
                          ? bookingHotelObject.room_features.map(
                              (feature, index) => (
                                <Col key={index}>
                                  <div className="book-room-features mb-3">
                                    {feature}
                                  </div>
                                </Col>
                              )
                            )
                          : null}
                      </Row>
                    </>
                  }
                </Col>

                <Col>
                  <h5 className="booking-hotel-detail-header">Pricing</h5>
                  <Row>
                    <Col>
                      <p>
                        GH<span>&#8373;</span> {bookingHotelObject.room_rate} *{' '}
                        lengthOfStay nights
                      </p>
                    </Col>

                    <Col>
                      <p>
                        GH<span>&#8373;</span> basicCostString
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p>VAT ( 12.5% )</p>
                    </Col>

                    <Col>
                      <p>
                        GH<span>&#8373;</span>
                        vatRateString {' '}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p>NHIL ( 2.5% )</p>
                    </Col>

                    <Col>
                      <p>
                        GH<span>&#8373;</span>
                        nhilRateString {' '}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p>COVID LEVY ( 1% )</p>
                    </Col>

                    <Col>
                      <p>
                        GH<span>&#8373;</span> covidLevyString
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p className="total-cost">SUM TOTAL</p>
                    </Col>

                    <Col>
                      <p className="total-cost">
                        GH<span>&#8373;</span> totalCostString
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4">
                <Col md={5}>
                  <h5 className="booking-hotel-detail-header">Refund policy</h5>
                  <p>
                    If you cancel or don't attend your hotel booking, you'll not
                    be refunded any of your original payment.
                  </p>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Your first name
                  </h5>
                  <p>{bookingCustomerFirstName}</p>
                </Col>

                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Your last name
                  </h5>
                  <p>{bookingCustomerLastName}</p>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Your contact email
                  </h5>
                  <p>{bookingCustomerEmail}</p>
                </Col>

                <Col>
                  <h5 className="booking-hotel-detail-header">
                    Your mobile number
                  </h5>
                  <p>{bookingCustomerNumber}</p>
                </Col>
              </Row>
              <hr />

              <Row className="confirm-booking-details-row mb-4" md={2} xs={1}>
                <Col>
                  <PaystackButton
                    className="paystack-btn"
                  />
                </Col>

                <Col>
                  <Button
                    variant="custom"
                    className="edit-booking-details-btn"
                    
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
