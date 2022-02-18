# Project Overview

## Project Links

- [Main Repo](https://github.com/basilspice/Project-2)


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
{data: {
	"id": 2,
"name": "Morty Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Male",
"origin": {
"name": "unknown",
"url": ""
},
"location": {
"name": "Citadel of Ricks",
"url": "https://rickandmortyapi.com/api/location/3"
},
"image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
"episode": [
} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [WireFrame](https://wireframepro.mockflow.com/view/MNedeyL86h)
- [FlowChart](https://lucid.app/lucidchart/2ea1ce25-df0c-480d-9382-d0efa46372ad/view?page=0_0#)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page via searching for location, episode or character

#### PostMVP EXAMPLE

- Returned results will be able to be clicked on and search for those characters
- Save a character, and location and the results will tell you any episodes of that combination

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | This will render the header include the nav | 
| Episodes | This will render the search function for episodes and display the information
| Characters | This will render the search function for episodes and display the information
| Location | This will render the search function for episodes and display the information


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form (with search function) | H | 8hrs| 5 |  |
| Working with API | H | 3hrs| 4 |  |
| Creating structure of page | H | 4hrs| 8 | |
| Location Component | H | 6hrs| 3 | |
| Episodes Component | H | 6hrs| 3 | |
| Characters Component | H | 6hrs| 5 | |
| Nav Component (links, routes, navigates) | H | 8hrs| 6 | |
| CSS structuring (cards, layouts, colors,) | H | 4hrs| 8 | |
| Total | H | 43hrs| 42 | |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
if (charData[0]) {
    return (
      <div className="charBody">
        <div className="App">
          <h4>Still haven't found them?</h4>
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
          <h4>Searching for Someone?</h4>
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
```
