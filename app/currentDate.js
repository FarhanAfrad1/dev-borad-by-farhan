
const newDate = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short", 
  day: "2-digit", 
  year: "numeric" 
}); 
const parts = formattedDate.formatToParts(newDate);

const datePart1 = `${parts[0].value},`;
const datePart2 = `${parts[2].value} ${parts[4].value} ${parts[6].value}`
updateInnerText('day',datePart1);
updateInnerText('date', datePart2)
 