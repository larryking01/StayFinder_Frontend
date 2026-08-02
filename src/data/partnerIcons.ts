import type { PaymentOption } from "../types/paymentOption.model";
import bookingDotCom from '../assets/images/bookingDotComLogo.webp'
import expedia from '../assets/images/expediaLogo.webp'
import hotelsDotCom from '../assets/images/hotelsDotComLogo.png'
import priceLine from '../assets/images/pricelineLogo.jpg'




export const partnerIcons: PaymentOption[] = [
    {
        name: 'Booking.com',
        src: bookingDotCom
    },
    {
        name: 'Expedia',
        src: expedia
    },
    {
        name: 'Hotels.com',
        src: hotelsDotCom
    },
    {
        name: 'Priceline',
        src: priceLine
    }
]