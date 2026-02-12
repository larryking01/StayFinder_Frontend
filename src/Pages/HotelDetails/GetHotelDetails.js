import './getHotelDetails.css'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Rating from '@mui/material/Rating';
import { IoLocationSharp } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// modules
import NavbarComponent from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import goodToKnowArray from '../../data/hotelGoodToKnowData';
import { formatDate, formatTime } from '../../helpers/formatDate.helper';






const GetHotelDetails = () => {
  const api_url = process.env.REACT_APP_PROD_API_URL;

  const params = useParams();
  let selectedHotelName = params.hotel_name;
  let selectedHotelId = params.hotel_id;

  const dateDurationRef = useRef(null);
  const descriptionRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationRef = useRef(null)
  const reviewsRef = useRef(null)
  const pricingRef = useRef(null)
  const policiesRef = useRef(null)

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
  const [ hotelGalleryImages, setHotelGalleryImages ] = useState([])

  
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

    const FetchHotelDetails = async () => {
      try {
        let response = await axios.get(`${ api_url }/hotels/find-hotel/${ selectedHotelId }`)
        let matchingHotel = response.data.data[0]
        console.log("matching hotel ", matchingHotel) 
        setSelectedHotel({ ...matchingHotel } )
        let galleryImages = matchingHotel.galleryImages
        console.log("gallery images = ", galleryImages)
        setHotelGalleryImages([...galleryImages])
        console.log("hotel details ", matchingHotel) 
      }
      catch( error ) {
        console.log("error fetching hotel details, ", error)
        setFetchError(true);
        setFetchErrorMessage(
          'Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.'
        );
        // handle errors gracefully
      }
      finally {
        setTimeout(() => {
          setIsLoadingHotelDetails( false )
        }, 1000)
      }
    }

    FetchHotelDetails()

  },[ api_url, selectedHotelId ])



  useEffect(() => {
    const FetchHotelReviews = async () => {
      try {
        let response = axios.get(`${ api_url }/reviews/get-hotel-reviews/${ selectedHotelId }`)
        let hotelReviews = response.data.data
        setAllReviewsArray( hotelReviews )

      }
      catch( error ) {
      // handle errors gracefully
    }
    finally {
      // handle loading state here
    }
  }

  FetchHotelReviews()

  },[ api_url, selectedHotelId ])


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

  const ScrollToPoliciesSection = () => {
    policiesRef.current.scrollIntoView({
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
            <section className="selected-room-details-headers">
              <div className="hotel-gallery-grid">
                {
                  hotelGalleryImages.map((galleryImage, index) => (
                    <img src={ galleryImage } key={ index } className="gallery-item" alt="hotel gallery"/>
                  ))
                }

              </div>
            </section>


            <section className="selected-room-details-headers">
              <Row md={6} xs={3}>
                <Col onClick={ ScrollToDescriptionSection }>
                  <p className="hotel-details-heading">Description</p>
                </Col>

                <Col onClick={ ScrollToAmenitiesSection }>
                <p className="hotel-details-heading">Amenities</p>
                </Col>

                <Col onClick={ ScrollToLocationSection }>
                  <p className="hotel-details-heading">Location</p>
                </Col>

                <Col onClick={ ScrollToPricingSection }>
                 <p className="hotel-details-heading">Pricing</p> 
                </Col>

                <Col onClick={ ScrollToPoliciesSection }>
                 <p className="hotel-details-heading">Policies</p> 
                </Col>

                <Col onClick={ ScrollToReviewsSection }>
                  <p className="hotel-details-heading">Reviews</p>
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

            </section>


            <section className="selected-room-details-sub-section" ref={ pricingRef }>
              <h3 className="selected-room-details-sub-header">Pricing</h3>
            </section>


            <section className="selected-room-details-sub-section" ref={ policiesRef }>
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

            </section>

            <section className="hotel-details-review-section">
              <h5 className="hotel-details-post-review-header">
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
                      className="hotel-details-post-review-btn"
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

export default GetHotelDetails;
