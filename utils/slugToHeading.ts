/**
 * Convert slug to heading
 * // about-us to About Us
 */
function convertSlugToHeading(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
