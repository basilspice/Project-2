import { useState, useEffect } from "react";

export default function Episode() {
  const [epName, setEpName] = useState("");
  const [epData, setEpData] = useState({});
  const url = `https://rickandmortyapi.com/api/episode/?name=${epName}`;
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setEpData(data.results))
      .catch(() => console.log("oops error"));
    console.log(url);
    console.log(epName);
  };

  const handleChange = (event) => {
    setEpName(event.target.value);
  };

  if (epData[0]) {
    return (
      <div className='epiBody'>
      <div className="App">
        <h1>Find another episode</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={epName} onChange={handleChange} />
          <input type="submit" value="Look at me!" />
        </form>
        <div className="epCard">
          <h2>{epData[0].name}</h2>
          <h3>{epData[0].episode}</h3>
          <h3>{epData[0].air_date}</h3>
        </div>
      </div>
      </div>
    );
  } else {
    return (
      <div className="epiBody">
        <div className="App">
          <h4>Episode Finder</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nobody exists on purpose..."
              value={epName}
              onChange={handleChange}
            />
            <input type="submit" value="Look at me!" />
          </form>
        </div>
      </div>
    );
  }
}
