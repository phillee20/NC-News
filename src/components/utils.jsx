function timeFormat(createdTime) {
  const createdAt = new Date(createdTime);
  const time = new Date(createdAt).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "GMT",
  });
  const day = createdAt.getDate();
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth();

  return `${day}.${month}.${year} ${time}`;
}

export default timeFormat;

/*Exported to this utils file from comments.jsx

const createdAt = new Date(comment.created_at);
const time = new Date(createdAt).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "GMT",
    );
const day = createdAt.getDate();
const year = createdAt.getFullYear();
const month = createdAt.getMonth();
*/
