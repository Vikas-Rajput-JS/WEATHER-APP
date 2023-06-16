import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

export default function OtherCity() {
  const [Weather, setWeather] = useState([]);
  const [Location, setLocation] = useState([]);
  const [City, setCity] = useState("hisar");
  const [Forecast, setForecast] = useState("");
  const [icon, seticon] = useState("");
  

  const navigate = async () => {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1fadb60ed4ae45e8aad53624231306&q=${City}`
    );

    let Data = await response.json();

    let location = Data.location;
    let weather = Data.current;
    setWeather(weather);
    setLocation(location);
    seticon(Data.current.condition.icon);
    setForecast(Data.current.condition.text);
  };
  useEffect(() => {
    navigate();
  },[]);
  
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
 
  return (<>
{loading ? (

      <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]"  style={{
        backgroundImage:
          "url(https://media0.giphy.com/media/duoBP0IhdbR5G7ywYg/giphy.gif?cid=6c09b9526189c35504c43ac0d9bfb87b9d00970cbcf5b85a&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}>
        <SyncLoader color="#36d7b7" />
        <h1 className="text-4xl text-neutral-200 mt-10">Please Wait...</h1>
      </div>
   
    ) : (
        <div
          className="w-[95%] mt-7 h-[80vh] lg:w-[40%] 2xl:w-[50%] bg-black flex flex-col  items-center  rounded-xl shadow-xl   shadow-pink-700"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/05/5e/ac/055eac25cb71d620c44f903055f372e9.gif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="w-[100%] h-[10vh] flex justify-center items-center ">
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              id="input"
              type="text"
              className="w-44 text-2xl font-serif h-8 sm:w-40 sm:h-10 placeholder:text-center ml-7 placeholder:text-cyan-400 text-orange-600 text-center outline-none rounded-xl"
            placeholder="Enter City "
            />

            <img
              onClick={() => {
                let input = document.getElementById("input");
                setCity(input);
                navigate();
              }}
              className="w-8 sm:w-10 cursor-pointer animation duration-100 hover:scale-125 ml-4"
              src="map.png"
              alt=''
            />
          </div>

          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
          <div className="flex justify-between w-[18%] items-center mt-5">
            <img className="w-8 " src="cityscape-svgrepo-com.svg" alt="" />
            <h1 className="text-white font-serif text-lg lg:text-2xl ml-3">{Location.name}</h1>

            </div>
            <h1 className="text-white font-serif text-sm lg:text-lg mt-4">
              {Location.region},({Location.country})
            </h1>
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <img
              className="sm:w-16 lg:w-16 mt-4  w-14 cursor-pointer  "
              src={icon}
              alt=""
            />
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <h1 className="text-white font-mono mt-4 text-xl sm:text-4xl xl:text-5xl">
              {Weather.temp_c}°C
            </h1>
            <div className=" flex justify-center items-center h-[100%] w-[100%]">
            <img className="w-10 cursor-pointer mt-4  " src='reshot-icon-weather-EJPNZMV8U5.svg' alt="" />
            <h1 className="text-white font-mono ml-3 text-md lg:text-xl mt-4 text-center">{Forecast}</h1>
            </div>
            {/* <h1 className="text-white font-mono text-2xl">{Forecast}</h1> */}
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
