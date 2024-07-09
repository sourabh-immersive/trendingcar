/**
 * Formats a date string to 'MMM D, YYYY h:mm A'
 * @param {string} 2024-06-15T08:01:00 - The date string to format
 * @returns {string} - The formatted date string
 * // Outputs: Jun 15, 2024 08:01 AM
 */
export default function formatDate(dateString: string) {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  const formattedDate = `${date.toLocaleString("en-US", {
    month: "short",
  })} ${date.getDate()}, ${date.getFullYear()} ${formattedTime}`;

  return formattedDate;
}
