import type { PaymentOption } from '../types/paymentOption.model'
import visaCardLogo from '../assets/images/visaCard.png'
import masterCardLogo from '../assets/images/masterCard.png'
import paypalLogo from '../assets/images/paypal.png'
import mtnMomoLogo from '../assets/images/mtnMobileMoney.png'
import telecelCashLogo from '../assets/images/telecelCash.jpg'





export const paymentOptions: PaymentOption[] = [
    {
        name: 'Visa',
        src: visaCardLogo
    },
    {
        name: 'MasterCard',
        src: masterCardLogo
    },
    {
        name: 'Paypal',
        src: paypalLogo
    },
    {
        name: 'MTN Mobile Money',
        src: mtnMomoLogo
    },
    {
        name: 'Telecel Cash',
        src: telecelCashLogo
    }
]