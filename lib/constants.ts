export const BRAND_NAME = "CleanSSR";
export const PRIMARY_COLOR = "#6A0C9D"; // Purple
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for the CleanSSR application.
 * This includes brand constants and other essential settings
 * tailored for a technology-focused cleaning service.
 */
export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Your Technology Cleaning Solution,
    tagline: "Innovative Cleaning Solutions for a Cleaner Tomorrow",
    contactEmail: "contact@cleanSSR.com",
    phoneNumber: "+1 (800) 555-0199",
    address: "123 Clean St, Tech City, TX 75001",
    socialMedia: {
        facebook: "https://facebook.com/CleanSSR",
        twitter: "https://twitter.com/CleanSSR",
        linkedin: "https://linkedin.com/company/cleanSSR"
    }
};

/
 * Review interface for capturing user feedback.
 */
export interface Review {
    id: number;
    name: string;
    rating: number; // Rating out of 5
    comment: string;
}

/
 * Sample reviews for the CleanSSR service.
 */
export const REVIEWS: Review[] = [
    {
        id: 1,
        name: "Alice Johnson",
        rating: 5,
        comment: "CleanSSR transformed our office space! Highly recommended!"
    },
    {
        id: 2,
        name: "Bob Smith",
        rating: 4,
        comment: "Great service and very efficient!"
    },
    {
        id: 3,
        name: "Charlie Brown",
        rating: 5,
        comment: "The technology they use is top-notch. My home has never looked better!"
    }
];

export default {
    BRAND_NAME,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    CONFIG,
    REVIEWS
};