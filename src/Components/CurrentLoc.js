import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

export default function CurrentLoc() {
  const [Weather, setWeather] = useState([]);
  const [Location, setLocation] = useState([]);
  
  const [Forecast, setForecast] = useState("");
  const [icon, seticon] = useState("");



  useEffect(() => {
    const nav = async () => {
      navigator.geolocation.getCurrentPosition(async (area) => {
        let lat = area.coords.latitude;
        let long = area.coords.longitude;
        // setCity([lat, long]);

        let response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=1fadb60ed4ae45e8aad53624231306&q=${lat},${long}`
        );

        let Data = await response.json();

        let location = Data.location;
        let weather = Data.current;
        setWeather(weather);
        setLocation(location);
        seticon(Data.current.condition.icon);
        setForecast(Data.current.condition.text);
      });
    };
    nav();
  }, []);

  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
     
      {loading ? (
        <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]"  style={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/1496969/screenshots/5403850/download_20181016_175021.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}>
          <SyncLoader color="#36d7b7" />
          <h1 className="text-4xl text-neutral-200 mt-10">Please Wait...</h1>
        </div>
     
      ) : (
        <div
          className="w-[90%] sm:w-[60%] h-[70%] lg:w-[40%] 2xl:w-[50%] bg-black flex flex-col  items-center shadow-xl  rounded-xl shadow-pink-700"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/05/5e/ac/055eac25cb71d620c44f903055f372e9.gif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <div className="flex justify-between w-[18%] items-center mt-4">
            <img className="w-8" src="cityscape-svgrepo-com.svg" alt="" />
            <h1 className="text-white font-serif text-xl lg:text-2xl mt-3 ">{Location.name}</h1>

            </div>
            <h1 className="text-white font-serif text-lg lg:text-2xl mt-3">
              {Location.region},({Location.country})
            </h1>
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <img className="sm:w-14 lg:w-16 xl:w-24 mt-4  w-14 cursor-pointer  " src={icon} alt="" />
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <h1 className="text-white font-mono text-xl sm:text-4xl xl:text-5xl">
              {Weather.temp_c}°C
            </h1>
            <div className=" flex justify-center items-center h-[100%] w-[100%]">
            <img className="sm:w-12 mt-4  w-8  " src='reshot-icon-weather-EJPNZMV8U5.svg' alt="" />
            <h1 className="text-white font-mono ml-3 text-xl lg:text-2xl  mt-5 text-center">{Forecast}</h1>
            </div>
          </div>

          <div className="w-[100%] lg:w-[90%] h-[10vh] mt-10 rounded-xl  flex justify-center items-center flex-col bg-[#FFF8F068] shadow-2xl shadow-slate-300">
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-sm lg:text-lg">humidity</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">Temp F°</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">Pressure</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">Wind KMPH</h1>
            </div>
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-sm lg:text-lg">{Weather.humidity}</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">
                {Weather.temp_f}
              </h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">
                {Weather.pressure_in}
              </h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">
                {Weather.wind_kph}
              </h1>
            </div>
          </div>
          <div className="w-[100%] sm:w-[90%] h-[10vh] mt-10 rounded-xl  flex justify-center items-center flex-col bg-[#FFF8F068] shadow-2xl shadow-slate-300">
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-sm lg:text-lg">Clouds</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">Pressure MB</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">Wind Degree</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">Wind Direc.</h1>
            </div>
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-sm lg:text-lg">{Weather.cloud}</h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">
                {Weather.pressure_mb}
              </h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">
                {Weather.wind_degree}
              </h1>
              <h1 className="text-black font-serif text-sm lg:text-lg">
                {Weather.wind_dir}
              </h1>
            </div>
          </div>
        </div>
      )}
        {loading ? (
       
         
          <></>

        
     
      ) : (
      <div className="w-[50%] h-[5vh] mt-10  flex justify-center items-center">
        <Link to={"/Other"}>
          <button className=" w-28 h-10  sm:w-28 sm:h-12   rounded-xl hover:bg-orange-600 bg-yellow-500">
            Other Cities
          </button>
        </Link>
        <Link to={"/"}>
          <button className=" w-28 h-10 sm:w-28 sm:h-12 ml-6  rounded-xl hover:bg-orange-600 bg-green-500">
            My Location
          </button>
        </Link>
      </div>)}
      </>
  
  );
}
