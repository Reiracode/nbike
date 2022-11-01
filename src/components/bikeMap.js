import bicycleGreySvg from "../assets/icon-bicycle-grey.svg";
import parkingSvg from "../assets/icon-parking.svg";

import parkingGreySvg from "../assets/icon-parking-grey.svg";
import userPositionMobileSvg from "../assets/icon-user-position-mobile.svg";
import geolocactionSvg from "../assets/icon-geolocation.svg";

import bicycle400Svg from "../assets/icon-bicycle-400.svg";
import bicycleWhiteSvg from "../assets/icon-bicycle-white.svg";
import parkingWhiteSvg from "../assets/icon-parking-white.svg";

import { useEffect, useRef } from "react";
import decideByAvailability from "../utils/decideByAvailability";
import L from "leaflet";

export default function BikeMap({
  userPosition,
  bikesAvailable,
  isFindingBikes,
  isLocatingUser,
  handleLocateUser,
  handleFindingType,
}) {
  console.log(userPosition)

  const bikeMapRef = useRef(null);
  const userPositionMarkerRef = useRef(null);
  const bikeMarkersRef = useRef([]);

  //重新定位button
  const getLocationButton = (
    <button
      className="geolocation"
      disabled={isLocatingUser ? true : false}
      onClick={handleLocateUser}>
      <img src={geolocactionSvg} alt="geo location icon" />
    </button>
  );

  //   create map
  useEffect(() => {
    // if (bikeMapRef.current) return;
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



  //  setView
  useEffect(() => {
    if (!bikeMapRef.current) return; //no map

    // remove current user marker
    if (userPositionMarkerRef.current)
      bikeMapRef.current.removeLayer(userPositionMarkerRef.current);
    bikeMapRef.current.setView(userPosition, 15);

    // create your position icon
    const userPositionIcon = L.icon({
      iconUrl: userPositionMobileSvg,
      iconSize: [36, 36]
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
      const bikeversion = station.stationName.includes("2.0") ? "plus" : ""
 
      //bikes ==  for rent
      //  none/few/""
      //L.marker resultNormal 
      // bikeMarkerStatusStyle_bikes = decideByAvailability(station.availableRentBikes);
      bikeMarkerStatusStyle_bikes = decideByAvailability(station.availableRentBikes) +" "+ bikeversion ;

      console.log(bikeMarkerStatusStyle_bikes)

      //parks ==  for back
      bikeMarkerStatusStyle_parks = decideByAvailability(station.availableReturnBikes);

      // }
      // popup  none/few/" "
      const availableBikesStyle = decideByAvailability(station.availableRentBikes);
      const availableParksStyle = decideByAvailability(station.availableReturnBikes);
      const availableBikesImg = `<img src=${bicycleGreySvg} alt="bicycle icon" />`;
      const availableParksImg = `<img src=${parkingGreySvg} alt="parking icon" />`

      //L marker的資料
      bikeMarkersRef.current[index] = L.marker(
        [station.stationPosition.lat, station.stationPosition.lng],
        {
          icon: L.divIcon({
            className: `bikeMarker ${isFindingBikes
              ? bikeMarkerStatusStyle_bikes
              : bikeMarkerStatusStyle_parks
              }`,
            html: `<span class="bikeMarker_number typography-bold typography-button">
            ${isFindingBikes
                ? station.availableRentBikes
                : station.availableReturnBikes
              }</span>`
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
  return userPosition ? <div id="bike_map">
    <div className="find_type_wrapper">
      <label htmlFor="find_bikes">
        <input
          type="radio"
          name="find_type"
          id="find_bikes"
          checked={isFindingBikes}
          onChange={() => {
            return;
          }}
          hidden
        />
        <button
          className="find_type typography-bold typography-button"
          onClick={handleFindingType}
        >
          <div className="find_type_img">
            {isFindingBikes ? (
              <img src={bicycleWhiteSvg} alt="bicycle white icon" />
            ) : (
              <img src={bicycle400Svg} alt="bicycle white icon" />
            )}
          </div>
          找單車
        </button>
      </label>
      <label htmlFor="find_parks">
        <input
          type="radio"
          name="find_type"
          id="find_parks"
          checked={!isFindingBikes}
          onChange={() => {
            return;
          }}
          hidden
        />
        <button
          className="find_type typography-bold typography-button"
          onClick={handleFindingType}
        >
          <div className="find_type_img">
            {isFindingBikes ? (
              <img src={parkingSvg} alt="parking icon" />
            ) : (
              <img src={parkingWhiteSvg} alt="parking icon" />
            )}
          </div>
          找車位
        </button>
      </label>
    </div>  {getLocationButton}</div> : null;
}
