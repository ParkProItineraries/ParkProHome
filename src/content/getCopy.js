/**
 * Copy Retrieval Helper
 * 
 * Future-proof utility for A/B testing and variant management.
 * Currently returns the single copy object, but can be extended
 * to return different variants based on user segments or experiments.
 * 
 * Usage:
 *   const copy = getCopy();
 *   const copyVariantB = getCopy('B');
 */

import { copy } from "./strings";

/**
 * Get copy for specified variant
 * @param {string} variant - 'A' or 'B' (default: 'A')
 * @returns {object} Copy object
 */
export const getCopy = (variant = 'A') => {
  // For now, return the same copy regardless of variant
  // In the future, you can implement variant logic here:
  // 
  // if (variant === 'B') {
  //   return { ...copy, hero: { ...copy.hero, h1: "Alternative headline" } };
  // }
  
  return copy;
};

export default getCopy;

