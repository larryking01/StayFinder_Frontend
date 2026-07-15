export interface Hotel {
    id: string;
    hotelName: string;
    shortDescription: string;
    fullDescription: string;
    streetAddress: string;
    city: string;
    country: string;

    latitude: number;
    longitude: number;

    startingPrice: number;
    currency: string;
    priceRange: string;

    isAvailable: boolean;
    numberOfRoomsAvailable: number;

    coverImageURL: string;
    galleryImages: string[];

    averageRating: number;
    reviewCount: number;
    starRating: number;

    amenities: string[];
    policies: string[];
    accessibilityFeatures: string[];

    checkInTime: string;
    checkOutTime: string;

    minimumStay: number;
    maximumStay: number;

    houseRules: string[];

    contactPhone: string;
    contactEmail: string;

    acceptedPaymentMethods: string[];

    isFeatured: boolean;
}