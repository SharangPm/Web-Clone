export const numberFormat = (value) => {
  let config = {};
  if (value > 9999) {
    config = {
      notation: "compact",
      maximumFractionDigits: 1,
    };
  }
  return Intl.NumberFormat("en-us", config).format(value);
};

export const relativeTimeFormat = (minutes) => {
  if (typeof minutes !== "number" || isNaN(minutes) || minutes < 0) {
    return;
  }

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  const remainingMinutes = minutes % 60;

  if (days > 0) {
    return rtf.format(-days, "day");
  } else if (hours > 0) {
    return rtf.format(-hours, "hour");
  } else {
    return rtf.format(-remainingMinutes, "minute");
  }
};
