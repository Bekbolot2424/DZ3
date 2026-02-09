import React, { useState } from "react";
import WeatherData from "../db/WeatherData.json";
import cls from "../CitySearch/CitySearch.module.css"

function CitySearch() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const onChange = (e) => setInput(e.target.value);
  const onClick = () => {
    const cityKey = input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
    if (WeatherData[cityKey]) {
        setWeather(WeatherData[cityKey]); setError(""); 
    }else 
        { setWeather(null); setError("Город не найден"); }
    setInput("")
  };

  return (
    <div className={cls.inputBlock}>
      <input className={cls.input} type="text" value={input} onChange={onChange} />
      <button className={cls.searchBtn} onClick={onClick}>Узнать погоду</button>
      <div className={cls.card}>
        {weather && <div>{weather.icon} {weather.description} {weather.temp}°C</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default CitySearch;
