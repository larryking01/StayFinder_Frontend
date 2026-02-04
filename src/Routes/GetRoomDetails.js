import { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Rating from '@mui/material/Rating';
import { IoLocationSharp } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// modules
import { UserContext } from '../App';
import NavbarComponent from './NavBar';
import Footer from './Footer';
import StartDatePicker from '../Configuration/StartDatePicker';
import EndDatePicker from '../Configuration/EndDatePicker';
// import Maps2 from '../Configuration/Maps2';
import goodToKnowArray from '../data/hotelGoodToKnowData';
import { formatDate, formatTime } from '../helpers/formatDate.helper';






const GetRoomDetails = () => {
  const api_url = process.env.REACT_APP_DEV_API_URL;

  const params = useParams();
  let selectedHotelName = params.hotel_name;
  let selectedHotelId = params.hotel_id;

  const navigate = useNavigate();

  const dateDurationRef = useRef(null);
  const descriptionRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationRef = useRef(null)
  const reviewsRef = useRef(null)
  const pricingRef = useRef(null)

  // for state.
  const [selectedHotel, setSelectedHotel] = useState({});

  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState(null);
  const [isLoadingHotelDetails, setIsLoadingHotelDetails] = useState(true);
  const [allReviewsArray, setAllReviewsArray] = useState([]);
  const [reviewerEmail, setReviewerEmail] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [reviewerEmailError, setReviewerEmailError] = useState(false);
  const [reviewBodyError, setReviewBodyError] = useState(false);
  const [postingReview, setPostingReview] = useState(false);
  const [reviewFeedback, setReviewFeedback] = useState('');
  const [showGuestExtraDetails, setShowGuestExtraDetails] = useState(false);
  const [bookingDatesNull, setBookingDatesNull] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState(false);
  const [reviewsErrorMessage, setReviewsErrorMessage] = useState(null);

  // destructure user booking hotel extra info.
  const {
    numberOfAdultVisitors,
    setNumberOfAdultVisitors,
    numberOfChildVisitors,
    setNumberOfChildVisitors,
    numberOfRooms,
    setNumberOfRooms,
    startDateValue,
    endDateValue,
    startDateMilliseconds,
    endDateMilliseconds,
    setCustomerLengthOfStay,
  } = useContext(UserContext);

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);


  // fetch details of selected room.
  useEffect(() => {
    axios.get(`${ api_url }/hotels/find-hotel/${ selectedHotelId }`)
    .then( response => {
      let matchingHotel = response.data.data[0]
      console.log("matching hotel ", matchingHotel) 
      setSelectedHotel({ ...matchingHotel } )
      console.log("hotel details ", selectedHotel) 
      setTimeout(() => {
        setIsLoadingHotelDetails( false )
      }, 1000)
    })
    .catch( error => {
      console.log("error fetching hotel details, ", error)
      setTimeout(() => {
        setIsLoadingHotelDetails( false )
      }, 1000)
      setFetchError(true);
      setFetchErrorMessage(
        'Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.'
      );
      // handle errors gracefully
    })

  },[])



  useEffect(() => {
    axios.get(`${ api_url }/reviews/get-hotel-reviews/${ selectedHotelId }`)
    .then( response => {
      let hotelReviews = response.data.data
      setAllReviewsArray( hotelReviews )
      console.log("hotel reviews", hotelReviews) 
      console.log("reviews array = ", allReviewsArray)
    })
    .catch( error => {
      // handle errors gracefully
    })

  },[])


  // scroll to specific detail section on click
  const ScrollToDescriptionSection = () => {
    descriptionRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const ScrollToAmenitiesSection = () => {
    amenitiesRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const ScrollToLocationSection = () => {
    locationRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const ScrollToReviewsSection = () => {
    reviewsRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const ScrollToPricingSection = () => {
    pricingRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }






  // updating reviewer email state
  const HandleReviewerEmailUpdate = (event) => {
    setReviewerEmailError(false);
    setReviewerEmail(event.target.value);
  };

  // updating review body state
  const HandleReviewBodyUpdate = (event) => {
    setReviewBodyError(false);
    setReviewBody(event.target.value);
  };

  // handling post review
  const HandlePostReview = async () => {
    if (reviewerEmail.length < 1 || reviewBody.length < 1) {
      if (reviewerEmail.length < 1) {
        setReviewerEmailError(true);
      } else {
        setReviewerEmailError(false);
      }

      if (reviewBody.length < 1) {
        setReviewBodyError(true);
      } else {
        setReviewBodyError(false);
      }
    } else {
      setPostingReview(true);
      let response = await fetch(
        `${api_url}/post/post-review/${params.hotel_name}/${params.hotel_id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_email: reviewerEmail,
            review_body: reviewBody,
            reviewed_hotel_name: params.hotel_name,
            reviewed_hotel_id: params.hotel_id,
          }),
        }
      );

      if (response.status === 200) {
        setReviewerEmail('');
        setReviewBody('');
        setPostingReview(false);
        setReviewFeedback('your review has been posted successfully...');
        setTimeout(() => {
          setReviewFeedback('');
        }, 5000);
      } else {
        setPostingReview(false);
        setReviewFeedback('failed to post your review due to an error...');
        setTimeout(() => {
          setReviewFeedback('');
        }, 5000);
      }
    }
  };


  const CalculateLengthOfStay = (checkInDate, checkOutDate) => {
    let lengthOfStay = checkOutDate.getTime() - checkInDate.getTime();
    lengthOfStay = Math.floor(lengthOfStay / (1000 * 60 * 60 * 24));
    return lengthOfStay;
  };


  const HandleBookHotelRoom = () => {
    if (startDateValue == null || endDateValue == null) {
      setBookingDatesNull(true);
      alert(
        'You have to enter both check-in and check-out dates to book hotel...'
      );
      dateDurationRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      setBookingDatesNull(false);
      let durationOfStay = CalculateLengthOfStay(
        startDateMilliseconds,
        endDateMilliseconds
      );
      if (durationOfStay < 0) {
        alert('Check-out date must be later than Check-in date');
        dateDurationRef.current.scrollIntoView({
          behavior: 'smooth',
        });
      } else {
        setCustomerLengthOfStay(durationOfStay);
        window.localStorage.setItem(
          'length_of_stay',
          durationOfStay.toString()
        );
        window.localStorage.setItem(
          'number_of_adult_visitors',
          numberOfAdultVisitors.toString()
        );
        window.localStorage.setItem(
          'number_of_child_visitors',
          numberOfChildVisitors.toString()
        );
        window.localStorage.setItem(
          'number_of_booked_rooms',
          numberOfRooms.toString()
        );
        navigate(`/book-hotel/${selectedHotelName}/${selectedHotelId}`);
      }
    }
  };

  return (
    <div>
      <NavbarComponent />

      <section className="selected-room-details-section">
        <h3 className="selected-room-name"> { selectedHotelName } </h3>
        <p>
          {' '}
          <IoLocationSharp /> {selectedHotel.streetAddress}, {selectedHotel.city}
        </p>
        <div></div>
        <Rating name="read-only" value={4} readOnly />
        {allReviewsArray.length > 0 ? (
          allReviewsArray.length === 1 ? (
            <h5>{allReviewsArray.length} review </h5>
          ) : (
            <h5> {allReviewsArray.length} Reviews </h5>
          )
        ) : (
          <h5>No reviews yet</h5>
        )}
      </section>

      <div>
        {isLoadingHotelDetails === true ? (
          <section className="fetch-all-hotels-loading-section">
            <FontAwesomeIcon
              icon={faSpinner}
              size="2x"
              spinPulse
              className="mb-4"
              color="#808080"
            />
            <p className="fetching-hotels-text">
              fetching details of {params.hotel_name}... please wait
            </p>
          </section>
        ) : fetchError === true ? (
          <section className="fetch-all-hotels-fetch-error-section">
            <h5 className="fetch-hotels-error-text"> {fetchErrorMessage} </h5>
          </section>
        ) : (
          <section ref={dateDurationRef}>
            {bookingDatesNull === true ? (
              <p className="start-date-end-date-null-message">
                Check-in and Check-out dates are both required.
              </p>
            ) : null}

            <section className="selected-room-checkin-dates">
              <Form className="selected-room-details-destination-form">
                <Row xs={1} md={3}>
                  <Col className="selected-room-details-destination-column">
                    <StartDatePicker />
                  </Col>

                  <Col className="selected-room-details-destination-column">
                    <EndDatePicker />
                  </Col>

                  <Col className="selected-room-details-destination-column">
                    <Form.Control
                      type="text"
                      className="selected-room-details-category text-control-focus-style specify-cursor"
                      placeholder={
                        numberOfAdultVisitors +
                        ' adult(s). ' +
                        numberOfChildVisitors +
                        ' child(ren). ' +
                        numberOfRooms +
                        ' room(s)'
                      }
                      value={`${numberOfAdultVisitors} ${numberOfAdultVisitors === 1 ? ' adult' : ' adults'} * ${numberOfChildVisitors} ${numberOfChildVisitors === 1 ? ' child' : ' children'} * ${numberOfRooms} ${numberOfRooms === 1 ? ' room' : ' rooms'}`}
                      onClick={() =>
                        setShowGuestExtraDetails(!showGuestExtraDetails)
                      }
                    />

                    {showGuestExtraDetails === true ? (
                      <Form className="selected-room-details-extra-guest-details-form mt-3">
                        <Row className="selected-room-details-extra-guest-details-row mb-2">
                          <Col>
                            <h6>Adults</h6>
                          </Col>

                          <Col>
                            <Row className="selected-room-details-extra-guest-info-row">
                              <Col>
                                <BiMinus
                                  color="#5a50eb"
                                  className="selected-room-details-extra-guest-info-icon"
                                  onClick={() => {
                                    if (numberOfAdultVisitors === 0) {
                                      setNumberOfAdultVisitors(0);
                                    } else {
                                      setNumberOfAdultVisitors(
                                        numberOfAdultVisitors - 1
                                      );
                                    }
                                  }}
                                />
                              </Col>

                              <Col>{numberOfAdultVisitors}</Col>

                              <Col>
                                <BiPlus
                                  color="#5a50eb"
                                  className="selected-room-details-extra-guest-info-icon"
                                  onClick={() =>
                                    setNumberOfAdultVisitors(
                                      numberOfAdultVisitors + 1
                                    )
                                  }
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row className="selected-room-details-extra-guest-details-row mb-2">
                          <Col>
                            <h6>Children</h6>
                          </Col>

                          <Col>
                            <Row className="selected-room-details-extra-guest-info-row">
                              <Col>
                                <BiMinus
                                  color="#5a50eb"
                                  className="selected-room-details-extra-guest-info-icon"
                                  onClick={() => {
                                    if (numberOfChildVisitors === 0) {
                                      setNumberOfChildVisitors(0);
                                    } else {
                                      setNumberOfChildVisitors(
                                        numberOfChildVisitors - 1
                                      );
                                    }
                                  }}
                                />
                              </Col>

                              <Col>{numberOfChildVisitors}</Col>

                              <Col>
                                <BiPlus
                                  color="#5a50eb"
                                  className="selected-room-details-extra-guest-info-icon"
                                  onClick={() => {
                                    setNumberOfChildVisitors(
                                      numberOfChildVisitors + 1
                                    );
                                  }}
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row className="selected-room-details-extra-guest-details-row mb-4">
                          <Col>
                            <h6>Rooms</h6>
                          </Col>

                          <Col>
                            <Row className="selected-room-details-extra-guest-info-row">
                              <Col>
                                <BiMinus
                                  color="#5a50eb"
                                  className="selected-room-details-extra-guest-info-icon"
                                  onClick={() => {
                                    if (numberOfRooms === 0) {
                                      setNumberOfRooms(0);
                                    } else {
                                      setNumberOfRooms(numberOfRooms - 1);
                                    }
                                  }}
                                />
                              </Col>

                              <Col>{numberOfRooms}</Col>

                              <Col>
                                <BiPlus
                                  color="#5a50eb"
                                  className="selected-room-details-extra-guest-info-icon"
                                  onClick={() => {
                                    setNumberOfRooms(numberOfRooms + 1);
                                  }}
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Row className="selected-room-details-extra-guest-details-row">
                          <Button
                            variant="custom"
                            onClick={() => setShowGuestExtraDetails(false)}
                            className="selected-room-details-extra-guest-details-done-btn"
                          >
                            Done
                          </Button>
                        </Row>
                      </Form>
                    ) : null}
                  </Col>
                </Row>
              </Form>
            </section>


            <section className="book-now-section">
              <Button
                variant="custom"
                className="book-now-button-first"
                onClick={HandleBookHotelRoom}
              >
                Book Now
              </Button>
            </section>


            <section className="selected-room-details-headers">
              <Row md={5} xs={3}>
                <Col onClick={ ScrollToDescriptionSection }>
                  <p className="selected-room-details-price-text">Description</p>
                </Col>

                <Col onClick={ ScrollToAmenitiesSection }>
                <p className="selected-room-details-price-text">Amenities</p>
                </Col>

                <Col onClick={ ScrollToLocationSection }>
                  <p className="selected-room-details-price-text">Location</p>
                </Col>

                <Col onClick={ ScrollToReviewsSection }>
                  <p className="selected-room-details-price-text">Reviews</p>
                </Col>

                <Col onClick={ ScrollToPricingSection }>
                 <p className="selected-room-details-price-text">Pricing</p> 
                </Col>
              </Row>
              <hr />
            </section>


            <section className="selected-room-details-sub-section" ref={ descriptionRef }>
              <h3 className="selected-room-details-sub-header">
                Hotel Description
              </h3>

              { 
                Object.keys(selectedHotel) === 0 ?
                 <p>No data to display currently..</p> 
                 : 
                 <p>{ selectedHotel.fullDescription }</p> 
              }
              
            </section>

            <section className="selected-room-details-sub-section" ref={ amenitiesRef }>
              <h3 className="selected-room-details-sub-header">
                Hotel Amenities
              </h3>
              <Row xs={2} md={5}>
                {
                  Object.keys(selectedHotel).length === 0 ?
                  <p>No features to display currently...</p>
                  :
                  selectedHotel.amenities.map((amenity, index) => (
                    <Col key={ index }>
                      <div className="amenity-wrapper">{ amenity }</div>
                    </Col>
                  ))
                }
              </Row>
            </section>

            <section className="selected-room-details-sub-section" ref={ locationRef }>
              <h3 className="selected-room-details-sub-header">Our Location</h3>

              {/* <Maps2
                selectedRoomLatitude={selectedHotel.room_latitude}
                selectedRoomLongitude={selectedHotel.room_longitude}
              /> */}

              <div className="book-now-btn-row">
                <Button
                  variant="custom"
                  className="book-now-button-last"
                  onClick={HandleBookHotelRoom}
                >
                  Book Hotel Now
                </Button>
              </div>
            </section>


            <section className="selected-room-details-sub-section">
              <h3 className="selected-room-details-sub-header srd-padding-bottom">
                Good to know
              </h3>
              {goodToKnowArray.map((feature, index) => (
                <div className="selected-room-details-good-to-know-div" key={index}>
                  <Row
                    className="selected-room-details-good-to-know-div-row"
                  >
                    <Col>{feature.icon}</Col>

                    <Col md={4} className="hotel-feature-header">
                      {feature.feature}
                    </Col>

                    <Col md={6}>
                      {feature.description}
                      <p>
                        {feature.visaIcon} {feature.masterCardIcon}{' '}
                        {feature.paypalIcon}{' '}
                      </p>
                    </Col>
                  </Row>
                  <hr />
                </div>
              ))}
            </section>


            <section className="selected-room-details-sub-section" ref={ reviewsRef }>
              <h3 className="selected-room-details-sub-header">Guest Reviews</h3>
              {
                allReviewsArray.length > 0 ?
                  allReviewsArray.map((review, index) => (
                    <div className="posted-reviews-wrapper-div" key={index}>
                      <section className="reviewer-info">
                        <div>
                          <BsPersonFill size={30} />
                        </div>

                        <div className="reviewer-info-name-date">
                          <h5 className="reviewer-name"> {review.user_name} </h5>
                          <p className="review-date">
                            Reviewed: {formatDate(review.created_at)} @{' '}
                            {formatTime(review.created_at)}{' '}
                          </p>
                        </div>
                      </section>

                      <section className="review-body">
                        <Row>
                          <p className="review-body-text">{review.review_content}</p>
                        </Row>
                        <hr />
                      </section>
                    </div>
                  ))
                  :
                  <p>
                    No reviews submitted yet. Be the first to submit one right
                    below..
                  </p>
              }

              {/* {
                allReviewsArray.length > 0 ? (
                  <Button
                    variant="custom"
                    className="see-all-reviews-btn"
                    onClick={() =>
                      navigate(
                        `/all-reviews/${selectedHotelName}/${selectedHotelId}`
                      )
                    }
                  >
                    See all reviews
                  </Button>
                ) 
                : 
              (
                <p>dfkd</p>
              )
              } */}
            </section>

            <section className="get-room-details-review-section">
              <h5 className="get-room-details-post-review-header">
                Post a review
              </h5>
              <Form>
                <Form.Control
                  type="email"
                  placeholder="Your email *"
                  className={
                    reviewerEmailError === true
                      ? 'review-email-control-error text-control-focus-style mb-4'
                      : 'review-email-control text-control-focus-style mb-4'
                  }
                  onChange={HandleReviewerEmailUpdate}
                  value={reviewerEmail}
                />

                <FloatingLabel
                  style={{ color: 'gray' }}
                  controlId="floatingTextarea"
                  label="Review body *"
                  className="mb-4"
                >
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: 150 }}
                    className={
                      reviewBodyError === true
                        ? 'review-body-text-area-error text-control-focus-style'
                        : 'review-body-text-area text-control-focus-style'
                    }
                    onChange={HandleReviewBodyUpdate}
                    value={reviewBody}
                  />
                </FloatingLabel>

                <Row>
                  <Col>
                    <Button
                      variant="custom"
                      className="get-room-details-post-review-btn"
                      onClick={HandlePostReview}
                    >
                      Post review
                    </Button>
                  </Col>

                  <Col md={7}>
                    <p className="posting-review-icon mt-4">
                      {postingReview === true ? (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          spinPulse
                          size="2x"
                          className="mb-2"
                        />
                      ) : null}
                    </p>
                    <p className="review-feedback-text">
                      {reviewFeedback.length > 1 ? reviewFeedback : ''}
                    </p>
                  </Col>
                </Row>
              </Form>
            </section>
          </section>
        )}
      </div>

      <section className="footer-gap"></section>

      <Footer />
    </div>
  );
};

export default GetRoomDetails;
