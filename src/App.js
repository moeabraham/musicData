import React , {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar'
import Api from './components/Api/Api'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagination from './components/Api/Pagination';



function App() {

  const[input, setInput] = useState("")
  const [apiData, setApiData] = useState({
    album: []
  })
  // pagination
  const[loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(9)


const getMusicData = async (searchBar) => {
    try{
      const music = await fetch(`https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${searchBar}`)
      const response = await music.json();
      // setApiData(response.album)
      // console.log(response)
      // console.log(response.album)
        if(Array.isArray(response.album)){
          setApiData(response)
          // console.log(response.album[0].strAlbum)
          // setApiData("")

        } else {
          setApiData([]);

        }
    } catch(error){

      console.error(error);

    }
  
}
  // console.log(apiData.album)
  const indexOfLastpage = dataPerPage * currentPage;
  const indexOfFirstPage =  indexOfLastpage - dataPerPage;
  const displayData = apiData.album.slice(indexOfFirstPage, indexOfLastpage)

// change Page
const paginate = pageNumber => setCurrentPage(pageNumber)


  return (
  <Router>
  <Navbar />
  <Api 
    input={input} 
    setInput={setInput}
    apiData={apiData}
    getMusicData={getMusicData}
    displayData={displayData}
  />
  <Pagination
  dataPerPage={dataPerPage}
  apiData={apiData}
  paginate={paginate}
  />  

    </Router>
  );
}

export default App;
