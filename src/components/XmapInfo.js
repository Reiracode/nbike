import geolocactionSvg from "../assets/icon-geolocation.svg";

import bicycleSvg from "../assets/icon-bicycle.svg";
import bicycleWhiteSvg from "../assets/icon-bicycle-white.svg";

import parkingSvg from "../assets/icon-parking.svg";
import parkingWhiteSvg from "../assets/icon-parking-white.svg";


export default function MapInfo({
  handleLocateUser,
  bikesAvailable,
  isLocatingUser,
  handleFindingType,
  isFindingBikes,
}) {

  const locatingMessage = (
    <div className="locating_message">
      <span className="typography-bold typography-h4">定位中</span>
    </div>
  );

  const getLocationButton = (
    <button
      className="geolocation"
      disabled={isLocatingUser ? true : false}
      onClick={handleLocateUser}
    >
      <img src={geolocactionSvg} alt="geo location icon" />
    </button>
  );

  return (
    <div className="bikemap_info">
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
                <img src={bicycleSvg} alt="bicycle white icon" />
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
      </div>
      {isLocatingUser ? locatingMessage : null}
    
      {getLocationButton}
        
    </div>
  );
}
