
const newDate = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short", // "Wed"
  month: "short",   // "Jul"
  day: "2-digit",   // "28"
  year: "numeric"   // "2025"
}); // Remove extra comma
const parts = formattedDate.formatToParts(newDate);
console.log(parts);
const datePart1 = `${parts[0].value},`;
const datePart2 = `${parts[2].value} ${parts[4].value} ${parts[6].value}`
updateInnerText('day',datePart1);
updateInnerText('date', datePart2)
 