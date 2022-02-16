import { useState, useEffect } from "react";

export default function Character() {
  const [charName, setCharName] = useState("");
  const [charData, setCharData] = useState({});
  const [errorCard, setErrorCard] = useState(null)
  const url = `https://rickandmortyapi.com/api/character/?name=${charName}`;
  
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharData(data.results))
      .catch(() => console.log("oops error"));

     
  };

  const handleChange = (event) => {
    setCharName(event.target.value);
  };

  if (charData[0]) {
    return (
      <div className="charBody">
        <div className="App">
          <h1>Still haven't found them?</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={charName} onChange={handleChange} />
            <input type="submit" value="Squanch It!" />
          </form>
          <div className="charCard">
            <img
              className="avatar"
              src={charData[0].image}
              alt={charData[0].name}
            />
            <h2>{charData[0].name}</h2>
            <h3>{charData[0].species}</h3>
            <h3>{charData[0].status}</h3>
            <h3>{charData[0].gender}</h3>
            <h3>Origin: {charData[0].origin.name}</h3>
            <h3>Last seen at: {charData[0].location.name}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="charBody">
        <div className="App">
          <h1>Searching for Someone?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Look no further..."
              value={charName}
              onChange={handleChange}
            />
            <input type="submit" value="Squanch It!" />
          </form>
        </div>
      </div>
    );
  }
}