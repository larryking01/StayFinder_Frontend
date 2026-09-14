import type { AccountMenuItem } from "../types/accountMenuItem.model";
import { UserRound, BriefcaseBusiness, LogOut } from 'lucide-react'




export const accountMenuItems: AccountMenuItem[] = [
    {
        name: "My account",
        icon: UserRound,
        routePath: "/"
    },
    {
        name: "Bookings & trips",
        icon:  BriefcaseBusiness,
        routePath: "/my-bookings"
    },
    // {
    //     name: "Reviews",
    //     icon: Star,
    //     routePath: "/"
    // },
    {
        name: "Sign out",
        icon: LogOut,
        routePath: "/logout"
    }
];