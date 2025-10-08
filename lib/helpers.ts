export const getSchedulePreposition = (category: string) => {
  switch (category) {
    case "pickup":
      return "for pickup";
    case "dropoff":
      return "to drop-off";
    default:
      break;
  }
};
