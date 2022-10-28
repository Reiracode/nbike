import "./main.css";
import { useState, useEffect, useCallback } from "react";
import asyncGetGeolocation from "../utils/getGeolocation";
import { getAvailableBikes } from "../utils/fetchTdxApi";
import BikeMap from "../components/bikeMap";
import MapInfo from "../components/mapInfo";

function Main() {
  // const TAIPEI_COORDINATES = [35.4122, 139.4130];
  // const [userPosition, setUserPosition] = useState(TAIPEI_COORDINATES);
  const [userPosition, setUserPosition] = useState(false);
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
  
  //取得youPostion(1)getAvailableBikes(userCoordinates)
  //(2) BikeMap <BikeMap userPosition = { userPosition }


  ///方式1   OK //////////////
  // const getLocation = async () => {
  //   try {
  //     const userCoordinates = await asyncGetGeolocation();
  //     console.log("default定位成功" + userCoordinates)
  //     setUserPosition(userCoordinates);
  //     const bikes = await getAvailableBikes(userCoordinates);
  //     console.log(bikes)
  //     setBikesAvailable(bikes);
  //     setIsLocatingUser(false);
  //   } catch (error) {
  //     // setIsLocatingUser(false);
  //     throw error;
  //   }
  // };

  // useEffect(() => {
  //   if (!userPosition) return;
  //   getLocation();
  // }, []);

///////方式2///////////
  const getAsyncLocation = async () => {
    try {
      const userCoordinates = await asyncGetGeolocation();
      console.log("default定位成功" + userCoordinates)
      setUserPosition(userCoordinates);
    } catch (error) {
      setIsLocatingUser(false);
      throw error;
    }
  };

  // const getParkings = async () => {
  //   console.log(userPosition)
  //   const bikes = await getAvailableBikes(userPosition);
  //   console.log(bikes)
  //   setBikesAvailable(bikes);
  //   setIsLocatingUser(false);
  // }

  // useEffect(() => {
  //   getAsyncLocation();
  // }, []);
  // //[] without any args, this will be called only once. We want to get device location only once

  // useEffect(() => {
  //   getParkings();
  // }, [userPosition])
  // since we have passed mapRegion as arg therefore it would be called whenever mapRegion is updated


  // 方式3 -------  用 useCallback 並將回傳的函式取名為 fetchData
  // const fetchData = useCallback(() => {
  // //   // STEP 3：把原本的 fetchData 改名為 fetchingData 放到 useCallback 的函式內
  //   const fetchingData = async () => {
  //     // const [data1] = await Promise.all([
  //     //   asyncGetGeolocation()
  //     // ]);
  //     const data1 = await asyncGetGeolocation();
  //     setUserPosition(data1);
  //     const bikes = await getAvailableBikes(data1);
  //     setBikesAvailable(bikes);
  //     setIsLocatingUser(false);
  //   };
  //   fetchingData();
  // }, []);

  // useEffect(() => {
  //   console.log('execute function in useEffect');
  //   fetchData();
  //   // STEP 6：把透過 useCallback 回傳的函式放到 useEffect 的 dependencies 中
  // }, [fetchData]);

  //  方式4  -------   OK callback //   //   //   //
  async function getPosts() {
    const data = await asyncGetGeolocation();
    console.log(data);
    return data;
  }

  const getPosition = useCallback(async () => {
    const data = await asyncGetGeolocation();
    setUserPosition(data);

    const bikes = await getAvailableBikes(data);
    setBikesAvailable(bikes);
    setIsLocatingUser(false);
  }, [])

  useEffect(() => {
    getPosition()
  }, [getPosition]);
 
    //   //   //   //   //   //   //   // 
  
  // useEffect(() => {
  //   console.log(userPosition)
  //   async function getBikes(userPosition) {
  //     try {
  //       const bikes = await getAvailableBikes(userPosition);
  //       setBikesAvailable(userPosition);
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   getBikes(userPosition);
  //   // console.log(data)
  // }, [userPosition]);




  const locatingMessage = (
    <div className="overlay">
      <span className="typography-bold typography-h4">定位中</span>
    </div>
  );

  return (
    <main>
      {/* {isLocatingUser ? locatingMessage : null} */}
      {/* {isLocatingUser } */}
      {/* {!userPosition.length ? locatingMessage */}
      {!userPosition ? locatingMessage
        : (
          <BikeMap
            userPosition={userPosition}
            bikesAvailable={bikesAvailable}
            isFindingBikes={isFindingBikes}
            handleLocateUser={handleLocateUser}
            isLocatingUser={isLocatingUser}
       
          />
          
        )}
      {/* <MapInfo
        handleLocateUser={handleLocateUser}
        bikesAvailable={bikesAvailable}
        isLocatingUser={isLocatingUser}
        handleFindingType={handleFindingType}
        isFindingBikes={isFindingBikes}
      /> */}
      {/* {userPosition &&
        <BikeMap
          userPosition={userPosition}
          bikesAvailable={bikesAvailable}
          isFindingBikes={isFindingBikes}
      />} */}
  
 
    </main>
  );
}

export default Main;
