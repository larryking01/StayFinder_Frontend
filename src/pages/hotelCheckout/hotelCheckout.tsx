import styles from './hotelCheckout.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Check, TrendingUp, X, Info } from 'lucide-react'

import { useAppSelector, useAppDispatch } from '../../hooks/useStore'
import { selectChosenHotel, selectHotelsLoadingState } from '../../store/features/hotelSlice/hotel.selectors'
import { fetchSelectedHotelById } from '../../store/features/hotelSlice/hotel.thunks'
import { fetchRoomById } from '../../store/features/roomsSlice/rooms.thunk'
import { selectChosenRoom, selectRoomsLoadingState } from '../../store/features/roomsSlice/rooms.selectors'
import { selectIntendedReservationDetails } from '../../store/features/reservationSlice/reservation.selectors'
import { selectCurrentUser } from '../../store/features/userSlice/user.selectors'
import Loading from '../../components/loading/loading'
import ReviewSummary from '../../components/reviewSummary/reviewSummary'
import { BookingFlowStepper } from '../../components/bookingFlowStepper/bookingFlowStepper'
import { formatTripDatesAndCalculateNumberOfNights } from '../../utils/formatTripDatesAndCalculateNumberOfNights'
import type { BookingFormData, Booking } from '../../types/booking.model'
import { calculateNumberOfNights } from '../../utils/calculateNumberOfNights'












const HotelCheckout = () => {


    const { hotelId, roomId } = useParams()
    const [ showCouponForm, setShowCouponForm ] = useState( false )
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const selectedHotel = useAppSelector( selectChosenHotel )
    const selectedRoom = useAppSelector( selectChosenRoom )
    const isLoadingHotel = useAppSelector( selectHotelsLoadingState )
    const isLoadingRoom = useAppSelector( selectRoomsLoadingState )
    const reservationDetails = useAppSelector( selectIntendedReservationDetails )
    const authenticatedUser = useAppSelector( selectCurrentUser )

    // booking form data
    const [ firstName, setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ countryCode, setCountryCode ] = useState<string>('')
    const [ phoneNumber, setPhoneNumber ] = useState<string>('')
    const [ cardHolderName, setCardHolderName ] = useState<string>('')
    const [ cardNumber, setCardNumber ] = useState<string>('')
    const [ expiryDate, setExpiryDate ] = useState<string>('')
    const [ securityCode, setSecurityCode ] = useState<string>('')
    const [ specialRequests, setSpecialRequests ] = useState<string>('') 
    const [ couponCode, setCouponCode ] = useState<string>('')



    useEffect(() => {
        if(!selectedHotel) {
            dispatch(fetchSelectedHotelById( hotelId as string ))
        }

        console.log("authenticated user = ", authenticatedUser)

    },[ dispatch, selectedHotel, hotelId ])



    useEffect(() => {
        if(!selectedRoom) {
            dispatch(fetchRoomById( roomId as string ))
        }

    }, [dispatch, roomId, selectedRoom])



    const handleSubmitBooking = (e: React.SubmitEvent) => {
        e.preventDefault()

        if(!authenticatedUser) {
            alert("Almost there!, Please log in to continue with your booking. Once you're signed in, you'll be able to complete your reservation.")
            return 
        }

        
        const bookingFormData: BookingFormData = {
            firstName, 
            lastName,
            email, 
            countryCode,
            phoneNumber,
            cardHolderName,
            cardNumber,
            expiryDate,
            securityCode,
            specialRequests,
            couponCode
        }


        const bookingPayload: Booking = {
            userId: authenticatedUser.id,
            userEmail: email,
            hotelId: selectedHotel!.id,
            hotelName: selectedHotel!.hotelName,
            hotelCoverImage: selectedHotel!.coverImageURL,
            roomId: selectedRoom!.id,
            roomType: selectedRoom!.roomType,
            startDate: reservationDetails.intendedTripDates!.from!,
            endDate: reservationDetails.intendedTripDates!.to!,
            numberOfNights: calculateNumberOfNights(reservationDetails.intendedTripDates?.from, reservationDetails.intendedTripDates?.to )!,
            numberOfAdults: reservationDetails.intendedAdultTravellers,
            numberOfChildren: reservationDetails.intendedChildTravellers,
            numberOfRooms: reservationDetails.intendedNumberOfRooms,
            pricePerNight: selectedRoom!.price,
            totalPrice: selectedRoom!.price,
            currency: 'GHS',
            status: 'pending',
            paymentStatus: 'paid',
        }


        // initiate payment flow

        console.log("booking form data = ", bookingFormData)
        console.log("booking payload = ", bookingPayload)
    }





    if( isLoadingHotel || isLoadingRoom ) {
        return (
            <Loading />
        )
    }


    return (
        <main className={ styles.container }>
            <section className={ styles.bookingStepperWrapper }>
                <BookingFlowStepper />
            </section>

            <section className={ styles.checkout }>            
                <section className={ styles.checkout__paymentColumn }>
                    <form onSubmit={ handleSubmitBooking }>
                        <article className={ styles.formControlsContainer }>
                            <h3>Who's checking in?</h3>
                            <p className={ styles.nameRequirement }>Guest names must match the valid ID which will be used at check-in.</p>

                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='First name' onChange={(e) => setFirstName(e.target.value)} value={ firstName } />
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Last name' onChange={(e) => setLastName(e.target.value)} value={ lastName } />
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={ email }  />
                            </article>


                            <article className={ styles.inputContainerFlex }>
                                <div className={ styles.phoneRegionContainer }>
                                    <input type="text" placeholder='Country code' className={ styles.phoneRegionInput } onChange={(e) => setCountryCode(e.target.value)} value={ countryCode } />
                                </div>

                                <div className={ styles.phoneNumberContainer }>
                                    <input type="text" placeholder='Phone number' className={ styles.phoneNumberInput } onChange={(e) => setPhoneNumber(e.target.value)} value={ phoneNumber } />
                                </div>
                            </article>


                            <article className={ styles.notificationsContainer }>
                                <input type='checkbox' className={ styles.checkBox } />
                                <p>Get emails about deals, offers, and other info from Hotels.com. You can opt out anytime.</p>
                            </article>


                            <h3>Payment details</h3>

                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Cardholder name' onChange={(e) => setCardHolderName(e.target.value)} value={ cardHolderName } />
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Card number' onChange={(e) => setCardNumber(e.target.value)} value={ cardNumber } />
                            </article>


                            <article className={ styles.inputContainerFlex }>
                                <div className={ styles.phoneRegionContainer }>
                                    <input type="text" placeholder='Expiry date' className={ styles.phoneRegionInput } onChange={(e) => setExpiryDate(e.target.value)} value={ expiryDate } />
                                </div>

                                <div className={ styles.phoneNumberContainer }>
                                    <input type="text" placeholder='CVV/CVC' className={ styles.phoneNumberInput } onChange={(e) => setSecurityCode(e.target.value)} value={ securityCode } />
                                </div>
                            </article>


                            <article className={ styles.notificationsContainer }>
                                <input type='checkbox' className={ styles.checkBox } />
                                <p>Save this card for future use.</p>
                            </article>


                            <article className={ styles.inputContainer }>
                                <h3>Special requests (optional)</h3>
                                <p>The property will do its best, but cannot guarantee to fulfill all requests.</p>
                                <textarea placeholder='Additional requests' onChange={(e) => setSpecialRequests(e.target.value)} value={ specialRequests }></textarea>
                            </article>


                            <article className={ styles.couponContainer }>
                                <div className={ styles.couponIntro }>
                                    <p onClick={() => setShowCouponForm( true )}>
                                        Use a coupon or promotion code
                                    </p>
                                </div>

                                { showCouponForm &&
                                    <div className={ styles.couponControls }>
                                        <X className={ styles.closeIcon } onClick={() => setShowCouponForm( false )}/>
                                        <input type="text" placeholder='Coupon code' onChange={(e) => setCouponCode(e.target.value)} value={ couponCode }/>
                                        <button type="button">Apply</button>
                                    </div>
                                }
                            </article>
                        </article>


                        <article className={ styles.termsAndConditions }>
                            <p>
                                By clicking the button below, I confirm that I have read and understood the Privacy Statement
                                and that I accept the Terms of Service.
                            </p>
                        </article>


                        <article className={ styles.submitBtnContainer }>
                            <button type="submit">
                                Complete booking
                            </button>
                        </article>
                    </form>
                </section>



                <section className={ styles.checkout__bookingConfirmation }>
                    <article className={ styles.hotelInfoSummary }>
                        <div className={ styles.coverImages }>
                            <img src={ selectedHotel?.coverImageURL } />
                        </div>

                        <div className={ styles.hotelDetail }>
                            <h3>{ selectedHotel?.hotelName }</h3>
                            <div className={ styles.roomDetail }>
                                <p className={ styles.roomTypeText }>{ selectedRoom?.roomType }</p> |
                                <p>{ reservationDetails.intendedAdultTravellers } adult(s)</p> |
                                <p>{ reservationDetails.intendedChildTravellers } children</p> |
                                <p>{ reservationDetails.intendedNumberOfRooms } room(s)</p>
                            </div>
                        </div>


                        <div className={ styles.hotelDetail }>
                            <p>{ selectedHotel?.streetAddress }, { selectedHotel?.city }</p>
                        </div>

                        <div className={ styles.hotelDetail }>
                            <ReviewSummary reviewSummary={{ averageRating: selectedHotel?.averageRating!, reviewCount: selectedHotel?.reviewCount! }} />
                        </div>

                        <div className={ styles.lengthOfStay }>
                            <p className={ styles.tripDuration }>{formatTripDatesAndCalculateNumberOfNights( reservationDetails.intendedTripDates?.from, reservationDetails.intendedTripDates?.to )}</p>
                        </div>


                        <div className={ styles.featureHighlights }>
                            <h3>Property highlights</h3>
                            <div className={ styles.highlightsContainer }>
                                {
                                    selectedHotel?.amenities.slice(0, 8).map((feature, index) => (
                                        <div className={ styles.featureItem } key={ index }>
                                            <p>{ feature }</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </article>


                    <article className={ styles.goodTaste }>
                        <div className={ styles.tasteItem }>
                            <div className={ styles.iconContainer }>
                                <Check />
                            </div>

                            <p>You have good taste! Book now before someone else grabs it!</p>
                        </div>
                    </article>


                    <article className={ styles.priceDetails }>
                        <h3>Price details</h3>

                        <div className={ styles.priceItem }>
                            <p>1 night x 1 room x $115.74</p>
                            <p>$115.74</p>
                        </div>

                        <div className={ styles.priceItem }>
                            <p>Taxes & fees</p>
                            <p>$26.16</p>
                        </div>

                        <div className={ styles.priceItem }>
                            <p className={ styles.total }>Total</p>
                            <p className={ styles.total }>$26.16</p>
                        </div>

                        <div className={ styles.priceItem }>
                            <p>Rates are quoted in USD ($).</p>
                        </div>

                        <div className={ `${ styles.priceItem } ${ styles.priceIncrementWarning }` }>
                            <TrendingUp />
                            <p>This price may increase if you book later</p>
                        </div>
                    </article>


                    <article className={ styles.cancellationPolicyAndInstructions }>
                        <div className={ styles.policyItem }>
                            <h3>Cancellation policy</h3>
                            <p className={ styles.refundableText }>Fully refundable before Wed, 24 Jun, 2026</p>
                            <ul>
                                {
                                    selectedRoom?.cancellationPolicy.map((policy, index) => (
                                        <li key={ index }>
                                            <Info size={ 15 } className={ styles.infoIcon }/>
                                            { policy }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={ styles.policyItem }>
                            <h3>Special check-in instructions</h3>
                            <p>
                                { selectedHotel?.finePrint.slice(0, 700)}...                        
                            </p>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}



export default HotelCheckout