import { CircleUser, 
         TriangleAlert, 
         ShieldBan, 
         Coins, 
         BedDouble,
         ShieldCheck,
         BanknoteArrowDown
} from 'lucide-react'
import type { SupportItem } from '../types/supportItem.model'





export const supportItems: SupportItem[] = [
    {
        name: 'Refunds & Charges',
        icon: BanknoteArrowDown
    },
    {
        name: 'Stays',
        icon: BedDouble
    },
    {
        name: 'Account',
        icon: CircleUser
    },
    {
        name: 'Privacy',
        icon: ShieldBan
    },
    {
        name: 'Travel Alerts',
        icon: TriangleAlert
    },
    {
        name: 'Security',
        icon: ShieldCheck
    },
    {
        name: 'Loyalty & Rewards',
        icon: Coins
    }
]