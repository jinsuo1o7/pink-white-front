export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getTimeDiff = (dateString) => {
  const date = new Date(Date.parse(dateString));
  const diff = new Date() - date;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return "just now";
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}m ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diff / day);
    return `${days}d ago`;
  }
};
