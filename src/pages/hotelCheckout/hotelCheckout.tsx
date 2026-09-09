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
import Loading from '../../components/loading/loading'
import ReviewSummary from '../../components/reviewSummary/reviewSummary'
import { BookingFlowStepper } from '../../components/bookingFlowStepper/bookingFlowStepper'
import { formatTripDatesAndCalculateNumberOfNights } from '../../utils/formatTripDatesAndCalculateNumberOfNights'












const HotelCheckout = () => {


    const [ showCouponForm, setShowCouponForm ] = useState( false )
    const { hotelId, roomId } = useParams()
    const navigate = useNavigate()
    const selectedHotel = useAppSelector( selectChosenHotel )
    const selectedRoom = useAppSelector( selectChosenRoom )
    const isLoadingHotel = useAppSelector( selectHotelsLoadingState )
    const isLoadingRoom = useAppSelector( selectRoomsLoadingState )
    const reservationDetails = useAppSelector( selectIntendedReservationDetails )
    const dispatch = useAppDispatch()



    useEffect(() => {
        if(!selectedHotel) {
            dispatch(fetchSelectedHotelById( hotelId as string ))
        }

    },[ dispatch, selectedHotel, hotelId ])



    useEffect(() => {
        if(!selectedRoom) {
            dispatch(fetchRoomById( roomId as string ))
        }

    }, [dispatch, roomId, selectedRoom])



    const navigateToUserBookings = () => {
        navigate("/my-bookings")
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
                    <form>
                        <article className={ styles.formControlsContainer }>

                            <h3>Who's checking in?</h3>

                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='First name' />
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Surname' />
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='E-mail' />
                            </article>


                            <article className={ styles.inputContainerFlex }>
                                <div className={ styles.phoneRegionContainer }>
                                    <input type="text" placeholder='Country code' className={ styles.phoneRegionInput } />
                                </div>

                                <div className={ styles.phoneNumberContainer }>
                                    <input type="text" placeholder='Phone number' className={ styles.phoneNumberInput } />
                                </div>
                            </article>


                            <article className={ styles.notificationsContainer }>
                                <input type='checkbox' className={ styles.checkBox } />
                                <p>Get emails about deals, offers, and other info from Hotels.com. You can opt out anytime.</p>
                            </article>


                            <h3>Payment details</h3>

                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Name on card' />
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Card number' />
                            </article>


                            <article className={ styles.inputContainerFlex }>
                                <div className={ styles.phoneRegionContainer }>
                                    <input type="text" placeholder='Expiry date' className={ styles.phoneRegionInput } />
                                </div>

                                <div className={ styles.phoneNumberContainer }>
                                    <input type="text" placeholder='Security code' className={ styles.phoneNumberInput } />
                                </div>
                            </article>


                            <article className={ styles.inputContainer }>
                                <input type="text" placeholder='Billing postcode' />
                            </article>


                            <article className={ styles.notificationsContainer }>
                                <input type='checkbox' className={ styles.checkBox } />
                                <p>Save this card for future use.</p>
                            </article>
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


                        <article className={ styles.termsAndConditions }>
                            <p>
                                By clicking on the button below, I confirm I have read the Privacy Statement Opens 
                                in new window and Government Travel Advice Opens in new window, 
                                and have read and accept the Terms of Service Opens in new window.
                            </p>
                        </article>


                        <article className={ styles.submitBtnContainer }>
                            <button type="submit" onClick={ navigateToUserBookings }>
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


                    
                    <article className={ styles.couponContainer }>
                        <div className={ styles.couponIntro }>
                            <p onClick={() => setShowCouponForm( true )}>
                                Use a coupon or promotion code
                            </p>
                        </div>

                        { showCouponForm &&
                            <div className={ styles.couponControls }>
                                <X className={ styles.closeIcon } onClick={() => setShowCouponForm( false )}/>
                                <input type="text" placeholder='Coupon code' />
                                <button type="button">Apply</button>
                            </div>
                        }
                    </article>
                </section>

            </section>
        </main>
    )
}



export default HotelCheckout