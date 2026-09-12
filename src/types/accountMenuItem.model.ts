import type { LucideIcon } from "lucide-react"


export interface AccountMenuItem {
    name: string,
    icon: LucideIcon,       // only lucide icons can be used here
    routePath: string
}