import React, { useState } from "react";

export default function Search(event) {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setMessage(`it is 19 °C in ${city}`);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
