import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CurrentLoc() {
  const [Weather, setWeather] = useState([]);
  const [Location, setLocation] = useState([]);
  const [City, setCity] = useState([""]);

  const nav = () => {
    navigator.geolocation.getCurrentPosition(async (area) => {
      let lat = area.coords.latitude;
      let long = area.coords.longitude;
      setCity([lat, long]);
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=1fadb60ed4ae45e8aad53624231306&q=${City[0]},${City[1]}`
      );

      let Data = await response.json();

      let location = Data.location;
      let weather = Data.current;
      setWeather(weather);
      setLocation(location);
     
    });
  };

  useEffect(() => {
    nav();
  }, [City]);
  
  return (
    <div className="w-[100%] h-[100vh] justify-center flex-col flex items-center">
      <h1 className="text-white font-mono text-4xl">
        Welcome To Weather Forcast
      </h1>
      {!Weather ? (
        <div
          className="w-[50%]  h-[80vh] rounded-2xl justify-center flex items-end "
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/162970/screenshots/6456084/casual-bounce.gif)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%,100vh",
          }}
        >
          <h1 className="text-white font-mono text-6xl mb-16">
            Getting Weather Data
          </h1>
        </div>
      ) : (
        <div
          className="w-[80%] h-[70%] lg:w-[40%] 2xl:w-[50%] bg-black flex flex-col  items-center  rounded-xl shadow-white"
          style={{
            backgroundImage:
              "url(https://media.tenor.com/9vRAkntogEMAAAAd/background.gif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
         

          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <h1 className="text-white font-serif text-2xl">{Location.name}</h1>
            <h1 className="text-white font-serif text-xl">
              {Location.region},({Location.country})
            </h1>
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <img
              className="w-32 cursor-pointer  "
              src="//cdn.weatherapi.com/weather/64x64/night/113.png"
              alt=""
            />
          </div>
          <div className="w-[100%] h-[10vh]  flex justify-center items-center flex-col">
            <h1 className="text-white font-mono text-6xl">
              {Weather.temp_c}C°
            </h1>
            <h1 className="text-white font-mono text-2xl">Forcast</h1>
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
      <div className="w-[50%] h-[5vh]  mt-10 flex justify-center items-center">
        <Link to={"/Other"}>
          <button className="px-7 py-4 rounded-xl hover:bg-orange-600 bg-yellow-500">
            Other Cities
          </button>
        </Link>
        <Link to={"/"}>
          <button className="px-7 ml-10 py-4 rounded-xl hover:bg-orange-600 bg-green-500">
            My Location
          </button>
        </Link>
      </div>
    </div>
  );
}
