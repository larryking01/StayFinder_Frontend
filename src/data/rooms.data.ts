import type { Room } from "../types/room.model";






export const rooms: Room[] = [
    {
        id: "room-001",
        hotelId: "HOTEL_ID",
        hotelName: 'Kempinski Hotel, Gold Coast City',
        roomType: "Standard Double Room",
        description:
            "A comfortable and well-appointed room ideal for couples or two guests, featuring a spacious double bed and modern essentials.",
        maximumGuests: 2,
        price: 120,
        numberOfRoomsAvailable: 5,
        cancellationPolicy: [
            "Free cancellation up to 48 hours before check-in",
            "Late cancellation may incur a one-night charge"
        ],
        features: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Smart TV",
            "Work Desk",
            "Mini Fridge",
            "Private Bathroom",
            "Hair Dryer"
        ]
    },

    {
        id: "room-002",
        hotelId: "HOTEL_ID",
        hotelName: "Holiday Inn Hotel",
        roomType: "Superior Twin Room",
        description:
            "A bright and spacious room with two separate beds, making it a convenient choice for friends, colleagues, or family members travelling together.",
        maximumGuests: 2,
        price: 200,
        numberOfRoomsAvailable: 6,
        cancellationPolicy: [
            "Free cancellation up to 48 hours before check-in",
            "Late cancellation may incur a one-night charge"
        ],
        features: [
            "Free Wi-Fi",
            "City View",
            "Air Conditioning",
            "Smart TV",
            "Work Desk",
            "Coffee & Tea Facilities",
            "Mini Fridge",
            "Private Bathroom"
        ]
    },

    {
        id: "room-003",
        hotelId: "HOTEL_ID",
        hotelName: 'Labadi Seaview Resort',
        roomType: "Deluxe King Room",
        description:
            "An elegantly furnished room offering additional space, a king-size bed, and upgraded amenities for a relaxing stay.",
        maximumGuests: 2,
        price: 140,
        numberOfRoomsAvailable: 2,
        cancellationPolicy: [
            "Free cancellation up to 5 days before check-in",
            "Non-refundable within 72 hours of check-in"
        ],
        features: [
            "Free Wi-Fi",
            "King-size Bed",
            "City View",
            "Air Conditioning",
            "Smart TV",
            "Mini Bar",
            "Coffee & Tea Facilities",
            "Rain Shower",
            "Bathrobe & Slippers"
        ]
    },

    {
        id: "room-004",
        hotelId: "HOTEL_ID",
        hotelName: 'The Azure Beach Resort',
        roomType: "Executive Room",
        description:
            "A refined room designed for business and leisure travellers, offering a generous workspace and premium in-room amenities.",
        maximumGuests: 2,
        price: 300,
        numberOfRoomsAvailable: 8,
        cancellationPolicy: [
            "Free cancellation up to 72 hours before check-in",
            "Non-refundable within 72 hours of check-in"
        ],
        features: [
            "Free Wi-Fi",
            "Panoramic City View",
            "Air Conditioning",
            "Executive Work Desk",
            "Smart TV",
            "Mini Bar",
            "Coffee & Tea Facilities",
            "Walk-in Shower",
            "Bathrobe & Slippers",
            "Complimentary Bottled Water"
        ]
    },

    {
        id: "room-005",
        hotelId: "HOTEL_ID",
        hotelName: 'Movenpick Ambassador Hotel',
        roomType: "Junior Suite",
        description:
            "A spacious suite featuring a comfortable bedroom and separate sitting area, providing additional space for relaxation or work.",
        maximumGuests: 3,
        price: 98,
        numberOfRoomsAvailable: 12,
        cancellationPolicy: [
            "Free cancellation up to 5 days before check-in",
            "Cancellation within 5 days may incur a one-night charge"
        ],
        features: [
            "Separate Sitting Area",
            "Free Wi-Fi",
            "City View",
            "Air Conditioning",
            "Smart TV",
            "Work Desk",
            "Mini Bar",
            "Coffee & Tea Facilities",
            "Luxury Bathroom",
            "Rain Shower",
            "Bathrobe & Slippers"
        ]
    },

    {
        id: "room-006",
        hotelId: "HOTEL_ID",
        hotelName: "Volta River Luxury Resort",
        roomType: "Family Suite",
        description:
            "A spacious family-friendly suite offering separate sleeping and living areas with enough room for a comfortable group stay.",
        maximumGuests: 4,
        price: 111,
        numberOfRoomsAvailable: 9,
        cancellationPolicy: [
            "Free cancellation up to 7 days before check-in",
            "Cancellation within 7 days may incur a one-night charge"
        ],
        features: [
            "Two Sleeping Areas",
            "Separate Living Area",
            "Free Wi-Fi",
            "City View",
            "Air Conditioning",
            "Two Smart TVs",
            "Mini Fridge",
            "Coffee & Tea Facilities",
            "Dining Area",
            "Two Private Bathrooms"
        ]
    },

    {
        id: "room-007",
        hotelId: "HOTEL_ID",
        hotelName: "Accra Marriott Hotel",
        roomType: "Executive Suite",
        description:
            "A luxurious suite combining a private bedroom with a spacious living room, ideal for guests seeking extra comfort and privacy.",
        maximumGuests: 3,
        price: 301,
        numberOfRoomsAvailable: 1,
        cancellationPolicy: [
            "Free cancellation up to 7 days before check-in",
            "Cancellation within 7 days may incur a one-night charge"
        ],
        features: [
            "Separate Bedroom",
            "Spacious Living Room",
            "Panoramic City View",
            "Free Wi-Fi",
            "Air Conditioning",
            "Smart TV",
            "Executive Work Desk",
            "Dining Area",
            "Mini Bar",
            "Coffee & Tea Facilities",
            "Bathtub",
            "Walk-in Shower",
            "Bathrobe & Slippers"
        ]
    },

    {
        id: "room-008",
        hotelId: "HOTEL_ID",
        hotelName: "Cape Coast Heritage Hotel",
        roomType: "Presidential Suite",
        description:
            "An expansive luxury suite featuring multiple living spaces, premium furnishings, and exceptional amenities for an exclusive stay.",
        maximumGuests: 4,
        price: 145,
        numberOfRoomsAvailable: 7,
        cancellationPolicy: [
            "Free cancellation up to 14 days before check-in",
            "Cancellation within 14 days may incur a one-night charge"
        ],
        features: [
            "Master Bedroom",
            "Separate Living Room",
            "Dining Room",
            "Private Balcony",
            "Panoramic View",
            "Free Wi-Fi",
            "Multiple Smart TVs",
            "Executive Work Desk",
            "Fully Stocked Mini Bar",
            "Coffee & Tea Facilities",
            "Luxury Bathroom",
            "Bathtub",
            "Walk-in Shower",
            "Walk-in Closet",
            "Guest Bathroom",
            "Butler Service"
        ]
    }
]