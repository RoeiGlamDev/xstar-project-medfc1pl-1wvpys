import { Review } from './reviews';

/
 * Interface representing a service offered by CleanSSR.
 */
export interface Service {
    id: number;
    title: string;
    description: string;
    price: number;
}

/
 * Interface representing a customer of CleanSSR.
 */
export interface Customer {
    id: number;
    name: string;
    email: string;
    reviews: Review[];
}

/
 * Interface representing a review left by a customer for CleanSSR's services.
 */
export interface Review {
    customerId: number;
    serviceId: number;
    rating: number; // Rating out of 5
    comment: string;
}

/
 * Type representing the response from the CleanSSR API for services.
 */
export interface ServiceResponse {
    services: Service[];
    totalCount: number;
}

/
 * Type representing the response from the CleanSSR API for reviews.
 */
export interface ReviewResponse {
    reviews: Review[];
    totalCount: number;
}

/
 * Function to calculate the average rating from a list of reviews.
 * @param reviews - Array of reviews to calculate the average from.
 * @returns Average rating as a number.
 */
export function calculateAverageRating(reviews: Review[]): number {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
}

/
 * List of services provided by CleanSSR.
 */
export const services: Service[] = [
    {
        id: 1,
        title: 'Deep Cleaning',
        description: 'Comprehensive cleaning solution for homes and offices.',
        price: 150,
    },
    {
        id: 2,
        title: 'Regular Maintenance',
        description: 'Scheduled cleaning services to keep your space spotless.',
        price: 75,
    },
    {
        id: 3,
        title: 'Post-Construction Cleaning',
        description: 'Specialized cleaning to remove debris and dust after construction.',
        price: 200,
    },
];

/
 * Sample customers for CleanSSR.
 */
export const customers: Customer[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        reviews: [
            {
                customerId: 1,
                serviceId: 1,
                rating: 5,
                comment: 'Absolutely fantastic service! My home has never looked better.',
            },
        ],
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        reviews: [
            {
                customerId: 2,
                serviceId: 2,
                rating: 4,
                comment: 'Great job on the maintenance cleaning, very thorough.',
            },
        ],
    },
];