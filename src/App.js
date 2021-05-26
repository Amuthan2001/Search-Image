import React, {useState,useEffect} from 'react'; 
import Api, {  LoadImages, SearchImages } from './Api'
import './App.css';
import Image from './Image'

function App() {
 
  const[query,setQuery]=useState()
  const[searchQ,setSearch]=useState()
  
  const data=LoadImages(); 

  const search =() =>{
  setSearch(query)
   }
  const SearchData=SearchImages(searchQ); 
  console.log(SearchData);
  return (
    <div className="App">
     
     <h1>IMAGE SEARCH APP</h1>

   <div className="box">
          <input  type="text" placeholder="search" onChange={(event)=> setQuery(event.target.value)}/>
   </div>
   <div className="box1">
          <button  onClick={search}>Sumbit</button>
   </div>
  
  <div className="container"> {
       searchQ ? SearchData.map((img,key)=>(     
     <Image src={img.urls.thumb} key={key}/>

   ))
        
      : data.map((img,key)=>(      
     <Image src={img.urls.thumb} key={key}/>

   ))}
   
   </div> 
   </div>
  );
}

export default App;
