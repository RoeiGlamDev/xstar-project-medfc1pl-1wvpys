import { CSSProperties } from "react";

/
 * Utility functions for CleanSSR application.
 * CleanSSR is a technology-driven cleaning service focused on efficiency and customer satisfaction.
 * This file contains helper functions for className management and data formatting.
 */

/
 * Function to concatenate class names conditionally.
 * This is particularly useful to apply styles based on component state.
 * 
 * @param baseClass - The base class name
 * @param conditionals - An object where keys are class names and values are booleans determining if they should be included
 * @returns {string} - The concatenated class names
 */
export const cn = (baseClass: string, conditionals: Record<string, boolean>): string => {
  const conditionalClasses = Object.keys(conditionals)
    .filter((className) => conditionals[className])
    .join(' ');
  return ${baseClass} ${conditionalClasses}.trim();
};

/
 * Formatter for displaying review ratings.
 * Converts a numeric rating into a star format for visual appeal.
 * 
 * @param rating - A numeric rating (0 to 5)
 * @returns {string} - A string representation of the rating in stars
 */
export const formatRating = (rating: number): string => {
  const stars = Math.round(rating);
  return '★'.repeat(stars) + '☆'.repeat(5 - stars);
};

/
 * Interface for a review object in the CleanSSR application.
 */
export interface Review {
  id: number;
  customerName: string;
  rating: number; // Rating out of 5
  comment: string;
  date: Date;
}

/
 * Sample reviews for the CleanSSR service.
 * This data could be fetched from an API in a real application.
 */
export const sampleReviews: Review[] = [
  {
    id: 1,
    customerName: "Alice Johnson",
    rating: 5,
    comment: "CleanSSR transformed my home! Highly recommend their services.",
    date: new Date('2023-08-15'),
  },
  {
    id: 2,
    customerName: "Bob Smith",
    rating: 4,
    comment: "Great service, very professional and efficient.",
    date: new Date('2023-09-10'),
  },
  {
    id: 3,
    customerName: "Charlie Brown",
    rating: 5,
    comment: "Absolutely the best cleaning service I've ever used!",
    date: new Date('2023-09-25'),
  },
];

/
 * Default styles for CleanSSR components.
 */
export const styles: Record<string, CSSProperties> = {
  container: {
    backgroundColor: 'white',
    color: 'purple',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '2em',
    margin: '0 0 20px 0',
  },
  review: {
    border: '1px solid purple',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    maxWidth: '600px',
  },
};