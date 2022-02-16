import { useState, useEffect } from "react";

export default function Location() {
  const [locName, setLocName] = useState("");
  const [locData, setLocData] = useState({});
  const url = `https://rickandmortyapi.com/api/location/?name=${locName}`;
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocData(data.results))
      .catch(() => console.log("oops error"));
    console.log(url);
    console.log(locName);
  };

  const handleChange = (event) => {
    setLocName(event.target.value);
  };

  if (locData[0]) {
    return (
      <div className="locBody">
        <div className="App">
          <h1>Find another place?</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={locName} onChange={handleChange} />
            <input type="submit" value="Ya little peanut" />
          </form>
          <div className="locCard">
            <h2>{locData[0].name}</h2>
            <h3>{locData[0].type}</h3>
            <h3>{locData[0].dimension}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="locBody">
        <div className="App">
          <h1>Find a Location</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Going somewhere?"
              value={locName}
              onChange={handleChange}
            />
            <input type="submit" value="Ya little peanut" />
          </form>
        </div>
      </div>
    );
  }
}
