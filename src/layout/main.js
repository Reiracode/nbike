import "./main.css";
import { useState, useEffect } from "react";
import asyncGetGeolocation from "../utils/getGeolocation";
import { getAvailableBikes } from "../utils/fetchTdxApi";

import BikeMap from "../components/bikeMap";
import MapInfo from "../components/mapInfo";

function Main(props) {
  const TAIPEI_COORDINATES = [35.4122, 139.4130];
  const [userPosition, setUserPosition] = useState(TAIPEI_COORDINATES);
  // const [userPosition, setUserPosition] = useState([]);
  const [bikesAvailable, setBikesAvailable] = useState([]);
  // const [isLocatingUser, setIsLocatingUser] = useState(false);
  const [isLocatingUser, setIsLocatingUser] = useState(true);
  const [isFindingBikes, setIsFindingBikes] = useState(true);

  function handleFindingType() {
    setIsFindingBikes((bool) => !bool);
  }

  async function handleLocateUser() {
    console.log("handleLocateUser")
    try {
      const userCoordinates = await asyncGetGeolocation();
      console.log(userCoordinates)
      alert("userCoordinates" +  userCoordinates)
      setIsLocatingUser(false);
      setUserPosition(userCoordinates);
    } catch (error) {
      console.log("setIsLocatingUser")
      setIsLocatingUser(false);
      throw error;
    }
  }
  
  //取得位子，getAvailableBikes，setBikesAvailable
  const getLocation = async () => {
    try {
      const userCoordinates = await asyncGetGeolocation();
      console.log("default定位成功")
      
      console.log(userCoordinates)

      const bikes = await getAvailableBikes(userCoordinates);
      console.log(bikes)
      setBikesAvailable(bikes);

      setIsLocatingUser(false);
      setUserPosition(userCoordinates);
    } catch (error) {
      setIsLocatingUser(false);
      throw error;
    }
  };


  useEffect(() => {
    // if (!userPosition) return;
    // handleLocateUser();
    getLocation();


    // async function getBikes(userPosition) {
    //   try {
    //     const bikes = await getAvailableBikes(userPosition);
    //     setBikesAvailable(bikes);
    //   } catch (error) {
    //     throw error;
    //   }
    // }
    // getBikes(userPosition);


  }, []);
// });

  const locatingMessage = (
    <div className="overlay">
      <span className="typography-bold typography-h4">定位中</span>
    </div>
  );

  return (
    <main>
      {isLocatingUser ? locatingMessage : null}
      <BikeMap
        userPosition={userPosition}
        bikesAvailable={bikesAvailable}
        isFindingBikes={isFindingBikes}
      />
      <MapInfo
        handleLocateUser={handleLocateUser}
        bikesAvailable={bikesAvailable}
        isLocatingUser={isLocatingUser}
        handleFindingType={handleFindingType}
        isFindingBikes={isFindingBikes}
      />
    </main>
  );
}

export default Main;
