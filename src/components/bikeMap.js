
import bicycle500Svg from "../assets/icon-bicycle-500.svg";
import bicycleRedSvg from "../assets/icon-bicycle-red.svg";
import bicycleGreySvg from "../assets/icon-bicycle-grey.svg";
import parkingSvg from "../assets/icon-parking.svg";
import parkingRedSvg from "../assets/icon-parking-red.svg";
import parkingGreySvg from "../assets/icon-parking-grey.svg";
import userPositionMobileSvg from "../assets/icon-user-position-mobile.svg";
import geolocactionSvg from "../assets/icon-geolocation.svg";

import { useEffect, useRef } from "react";
import decideByAvailability from "../utils/decideByAvailability";
import L from "leaflet";

export default function BikeMap({
  userPosition,
  bikesAvailable,
  isFindingBikes,
  isLocatingUser,
  handleLocateUser
}) {

  console.log(userPosition)
  // const userPosition = [25.0223242, 121.4995082];
  const bikeMapRef = useRef(null);
  const userPositionMarkerRef = useRef(null);
  const bikeMarkersRef = useRef([]);

  const getLocationButton = (
    <button
      className="geolocation"
      disabled={isLocatingUser ? true : false}
      onClick={handleLocateUser}
    >
      <img src={geolocactionSvg} alt="geo location icon" />
    </button>
  );
  //   create map
  useEffect(() => {
    if (!userPosition) return;

    if (bikeMapRef.current) return;
    bikeMapRef.current = L.map("bike_map", {
      attributionControl: false,
      zoomControl: false,
      center: userPosition,
      zoom: 15,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

  }, [userPosition]);
  


  // //  setView
  useEffect(() => {
    if (!bikeMapRef.current) return; //no map

    // remove current user marker
    if (userPositionMarkerRef.current)
      bikeMapRef.current.removeLayer(userPositionMarkerRef.current);

    bikeMapRef.current.setView(userPosition, 15);

    // create icon
    const userPositionIcon = L.icon({
      iconUrl: userPositionMobileSvg,
      iconSize: [56, 56],
    });

    // create marker
    userPositionMarkerRef.current = L.marker(userPosition, {
      icon: userPositionIcon,
    });

    // add marker
    userPositionMarkerRef.current.addTo(bikeMapRef.current);
  }, [userPosition]);

  //setting bikeMarkers
  useEffect(() => {
    if (!bikeMapRef.current) return; //no map

    //remove previous bike markers
    bikeMarkersRef.current.forEach((bikeMarker) => {
      // map remove bikeMarker
      bikeMapRef.current.removeLayer(bikeMarker);
    });

    bikeMarkersRef.current = [];
    let bikeMarkerStatusStyle_bikes, bikeMarkerStatusStyle_parks;
    bikesAvailable.forEach((station, index) => {
      const bikeversion = station.stationName.includes("2.0") ? "Y" : "N"
      console.log(station.stationName + "--" + bikeversion)
      // if (station.stationName.includes("2.0")) {
      //   console.log(station)
      // }
      // assign created DivIcon to bikesRef

      // .bikeMarker.twofull {
      // .bikeMarker.twohalf {
      if (bikeversion == "Y") {
        bikeMarkerStatusStyle_bikes = "twofull"
        bikeMarkerStatusStyle_parks = "twohalf "
      } else {
        //for rent
        bikeMarkerStatusStyle_bikes = decideByAvailability({
          source: station.availableRentBikes,
          resultNone: "none",
          resultFew: "few",
          resultNormal: "",
        });
        // for back
        bikeMarkerStatusStyle_parks = decideByAvailability({
          source: station.availableReturnBikes,
          resultNone: "none",
          resultFew: "few",
          resultNormal: "",
        });
      }




      const availableBikesStyle = decideByAvailability({
        source: station.availableRentBikes,
        resultNone: "none",
        resultFew: "few",
        resultNormal: "",
      });

      const availableParksStyle = decideByAvailability({
        source: station.availableReturnBikes,
        resultNone: "none",
        resultFew: "few",
        resultNormal: "",
      });

      const availableBikesImg = decideByAvailability({
        source: station.availableRentBikes,
        resultNone: `<img src=${bicycleGreySvg} alt="bicycle icon" />`,
        resultFew: `<img src=${bicycleRedSvg} alt="bicycle icon" />`,
        resultNormal: `<img src=${bicycle500Svg} alt="bicycle icon" />`,
      });

      const availableParksImg = decideByAvailability({
        source: station.availableReturnBikes,
        resultNone: `<img src=${parkingGreySvg} alt="parking icon" />`,
        resultFew: `<img src=${parkingRedSvg} alt="parking icon" />`,
        resultNormal: `<img src=${parkingSvg} alt="parking icon" />`,
      });

      bikeMarkersRef.current[index] = L.marker(
        [station.stationPosition.lat, station.stationPosition.lng],
        {
          icon: L.divIcon({
            html: `<span class="bikeMarker_number typography-bold typography-button">
            ${isFindingBikes
                ? station.availableRentBikes
                : station.availableReturnBikes
              }</span>`,
            className: `bikeMarker ${isFindingBikes
              ? bikeMarkerStatusStyle_bikes
              : bikeMarkerStatusStyle_parks
              }`,
          }),
        }
      );

      const updateTime = /.*T(\d*:\d*)/g.exec(station.srcUpdateTime)[1];

      // bind popup to markers?
      const popupHtml = `<div class="bikeMarkers_popup">
          <h3 class="typography-bold typography-button">${station.stationName}</h3>
          <div class="popup_info">
              <div class="popup_bikes ${availableBikesStyle}">
                  ${availableBikesImg}
                  <span class="quantity typography-bold typography-button">${station.availableRentBikes}</span>
              </div>
              <div class="popup_parks ${availableParksStyle}">
                  ${availableParksImg}
                  <span class="quantity typography-bold typography-button">${station.availableReturnBikes}</span>
              </div>
              <span class="update_time typography-medium typography-caption">${updateTime}更新</span>
          </div>
        </div>`;

      bikeMarkersRef.current[index].bindPopup(popupHtml, {
        className: "popupClass",
      });

      // bikesRef.current[index] add to map
      bikeMarkersRef.current[index].addTo(bikeMapRef.current);
    });
  }, [bikesAvailable, isFindingBikes]);

  //clear map unmount
  useEffect(() => {
    return function clearMap() {
      if (bikeMapRef.current) {
        bikeMapRef.current.remove();
        bikeMapRef.current = null;
      }
    };
  }, []);

  // return <div id="bike_map"></div>;
  return userPosition ? <div id="bike_map">   {getLocationButton}</div> : null;
}
