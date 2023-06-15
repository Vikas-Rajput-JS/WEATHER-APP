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
      `http://api.weatherapi.com/v1/current.json?key=1fadb60ed4ae45e8aad53624231306&q=${City}`
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
          "url(https://cdn.dribbble.com/users/1496969/screenshots/5403850/download_20181016_175021.gif)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}>
        <SyncLoader color="#36d7b7" />
        <h1 className="text-4xl text-neutral-200 mt-10">Please Wait...</h1>
      </div>
   
    ) : (
        <div
          className="w-[80%] mt-7 h-[80vh] lg:w-[40%] 2xl:w-[50%] bg-black flex flex-col  items-center  rounded-xl shadow-xl   shadow-pink-700"
          style={{
            backgroundImage:
              "url(https://media.tenor.com/9vRAkntogEMAAAAd/background.gif)",
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
              className="w-56 text-2xl font-serif h-14 placeholder:text-center ml-7 placeholder:text-cyan-400 text-orange-600 text-center outline-none rounded-xl"
            placeholder="Enter City "
            />

            <img
              onClick={() => {
                let input = document.getElementById("input");
                setCity(input);
                navigate();
              }}
              className="w-12 cursor-pointer animation duration-100 hover:scale-125 ml-4"
              src="map.png"
              alt=''
            />
          </div>

          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
          <div className="flex justify-between w-[18%] items-center mt-5">
            <img className="w-8" src="cityscape-svgrepo-com.svg" alt="" />
            <h1 className="text-white font-serif text-2xl">{Location.name}</h1>

            </div>
            <h1 className="text-white font-serif text-xl mt-4">
              {Location.region},({Location.country})
            </h1>
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <img
              className="w-20 cursor-pointer  "
              src={icon}
              alt=""
            />
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <h1 className="text-white font-mono text-6xl">
              {Weather.temp_c}C°
            </h1>
            <div className=" flex justify-center items-center h-[100%] w-[100%]">
            <img className="w-10 cursor-pointer mt-4  " src='reshot-icon-weather-EJPNZMV8U5.svg' alt="" />
            <h1 className="text-white font-mono ml-7 text-2xl mt-5 text-center">{Forecast}</h1>
            </div>
            {/* <h1 className="text-white font-mono text-2xl">{Forecast}</h1> */}
          </div>

          <div className="w-[90%] h-[10vh] mt-10 rounded-xl  flex justify-center items-center flex-col bg-[#FFF8F068] shadow-2xl shadow-slate-300">
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-lg">humidity</h1>
              <h1 className="text-black font-serif text-lg">Temp F°</h1>
              <h1 className="text-black font-serif text-lg">Pressure</h1>
              <h1 className="text-black font-serif text-lg">Wind KMPH</h1>
            </div>
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-lg">{Weather.humidity}</h1>
              <h1 className="text-black font-serif text-lg">
                {Weather.temp_f}
              </h1>
              <h1 className="text-black font-serif text-lg">
                {Weather.pressure_in}
              </h1>
              <h1 className="text-black font-serif text-lg">
                {Weather.wind_kph}
              </h1>
            </div>
          </div>
          <div className="w-[90%] h-[10vh] mt-10 rounded-xl  flex justify-center items-center flex-col bg-[#FFF8F068] shadow-2xl shadow-slate-300">
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-lg">Clouds</h1>
              <h1 className="text-black font-serif text-lg">Pressure MB</h1>
              <h1 className="text-black font-serif text-lg">Wind Degree</h1>
              <h1 className="text-black font-serif text-lg">Wind Direc.</h1>
            </div>
            <div className="flex w-[100%] h-[100%] justify-around">
              <h1 className="text- font-serif text-lg">{Weather.cloud}</h1>
              <h1 className="text-black font-serif text-lg">
                {Weather.pressure_mb}
              </h1>
              <h1 className="text-black font-serif text-lg">
                {Weather.wind_degree}
              </h1>
              <h1 className="text-black font-serif text-lg">
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
       <button className="px-4 py-2 rounded-xl hover:bg-orange-600 bg-yellow-500">
         Other Cities
       </button>
     </Link>
     <Link to={"/"}>
       <button className="px-4 ml-10 py-2 rounded-xl hover:bg-orange-600 bg-green-500">
         My Location
       </button>
     </Link>
   </div>)}
      </>
  );
}
