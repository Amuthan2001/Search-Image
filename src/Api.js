import React, {useState,useEffect} from 'react'; 
import axios from "axios";               
const count=1;
function LoadImages() {
    
    const[anime,setAnime]=useState([])  
  
    useEffect(()=>{                      
     axios                               
    .get("https://api.unsplash.com/photos/?client_id=Yj4pyXQhCV5Le1dJjy5P5kZfhvajPm42Pbw7JBrG6mg ")
    .then((data)=>{                    
    setAnime(data.data)                        
    }
    )

    },[count])
    return anime;
}
function SearchImages(query) {

    const[anime,setAnime]=useState([])     
  
    useEffect(()=>{                        
     axios                              
    .get(`https://api.unsplash.com/search/photos?query=${query}"&client_id=Yj4pyXQhCV5Le1dJjy5P5kZfhvajPm42Pbw7JBrG6mg `)
    .then((data)=>{                      
    setAnime(data.data.results)                              
    }
    )
    
    },[query])
    return anime;
}

export {LoadImages,SearchImages}