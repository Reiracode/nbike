import userPositionMobileSvg from "../assets/icon-user-position-mobile.svg";
import geolocactionSvg from "../assets/icon-geolocation.svg";

import bicycleSvg from "../assets/icon-bicycle.svg";
import bicycleGreySvg from "../assets/icon-bicycle-grey.svg";
import bicycleWhiteSvg from "../assets/icon-bicycle-white.svg";

import parkingSvg from "../assets/icon-parking.svg";
import parkingGreySvg from "../assets/icon-parking-grey.svg";
import parkingWhiteSvg from "../assets/icon-parking-white.svg";

import { useEffect, useRef } from "react";
import decideByAvailability from "../utils/decideByAvailability";
import L from "leaflet";
// https://cherniavskii.com/using-leaflet-in-react-apps-with-react-hooks/

export default function BikeMap({
  userPosition,
  bikesAvailable,
  isFindingBikes,
  isLocatingUser,
  handleLocateUser,
  handleFindingType,
}) {
  
  useEffect(() => {
    // create map
    L.map('bike_map', {
      center:   [25.0223373, 121.4995139],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

  return <div id="bike_map"></div>
}
