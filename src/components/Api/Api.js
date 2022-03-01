import React from 'react'
import { useState, useEffect } from 'react'
import './Api.css'




function Api(props) {
//     const[input, setInput] = useState("")
//     const [apiData, setApiData] = useState({
//       album: []
//     })

//     console.log(apiData)

  
//   const getMusicData = async (searchBar) => {
//       try{
//         const music = await fetch(`https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${searchBar}`)
//         const response = await music.json();
//         // setApiData(response.album)
//         console.log(response)
//         console.log(response.album)
//           if(Array.isArray(response.album)){
//             setApiData(response)
//             console.log(response.album[0].strAlbum)
//             // setApiData("")

//           } else {
//             setApiData([]);

//           }
//       } catch(error){

//         console.error(error);

//       }
//     // if(input !== ""){
//     //   console.log(input)
//       // const searchBar = await setInput(input)

//     // when setApiData is called on response
//       // setApiData(data => ({
//       //   ...data,
//       //   response
//       // }))
// }
    

    const handleChange =  (e) => {  
      e.preventDefault()
      props.setInput(e.target.value)
      // getMusicData(searchBar)

        // getMusicData()getMusicData()
        // getMusicData(input)
    }
    //
    const handleSubmit =async (e) => {
      e.preventDefault()
      // await handleChange(input)
     await props.getMusicData(props.input)

    }
    

// console.log(props.apiData)
// console.log(props.displayData)
  return (
      <> 
      <form onSubmit={handleSubmit}>
         <div className="searchDiv">
             <h2>Search for your music Here</h2>
            <input type="text" className="userInput" name="inp" onChange={handleChange} value={props.input} ></input>
            <input type="submit" value="Search" />
        </div>
        </form>
        {/* {console.log(props.displayData)} */}
        <div className="cards">
        {props.apiData
          ? props.displayData.map((album, index) => (
              <div className="card" key={index} >
                <h2> {album.strAlbum}</h2>
                <img src={album.strAlbumThumb}></img>
              </div>
            ))
          : console.log("error")}
      </div>
            </>

  )
}

export default Api