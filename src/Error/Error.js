export default function Error () {
  return(
    <div className="errorCard">
   
    <h2>LOOK WHAT YOU DID MORTY! YOU CAN'T SPELL</h2>
    </div>
  )}
//   .nav {
//     background-color: aquamarine;
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     height: 6rem;
//     &header {
//         margin: 0;
//         width: 33%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     &item {
//         background-color: coral;
//         margin: 0;
//         width: 22.33%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
// }

//CHARACTER DEBUGGING CODE
// if (errorCard) {
  //   return( <div>{<Error/>}</div>
  //   )
  //   }else if (charData[0]) {







//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(JSON.stringify(data));
//         if(data.results !='undefined') 
//           setCharData(data.results);
//           else{

//            error = true
//           console.log("error line 28" +error)
//           }
//            // if (data.error) return <div>{<Error />}</div>;
//         // if (data.results) setCharData(data.results);
//       })
//       .catch((err) => {
//         // setErrorCard(err);
//        error = true; 
        
        

//         console.log("error: " + err);//(JSON.stringify(charData)));
//       });
//   };
//   const handleChange = (event) => {
//     // console.log("handleChange: "+JSON.stringify(event))
//     setCharName(event.target.value);
//   };
//   if (error){ return <div><Error/></div>;
// }else 