export default function decideByAvailability(options) {
  // const { source, resultNone, resultFew, resultNormal } = options;
 
  // 判斷數量 0 5 normal
  // if (source === 0) return resultNone;
  // if (source <= 5) return resultFew;

  if (options <=1) {
    return "none";
  } else if (options <= 5) {
    return "few";
  } else {
    return "";
  }
}

// bikeMarkerStatusStyle_parks = decideByAvailability({
//   source: station.availableReturnBikes,
//   resultNone: "none",
//   resultFew: "few",
//   resultNormal: "",
// });
//用source 判斷回傳值