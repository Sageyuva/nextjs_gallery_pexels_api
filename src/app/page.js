"use client"
import { AlertTriangle } from 'lucide-react';
import dd from "./style.module.css"
import { useState , useEffect } from 'react';
import { createClient } from 'pexels';




export default function Home() {
    const [photos, setPhotos] = useState([]);
    const [query , setQuery] = useState("Bike");
  
   
    
    const client = createClient('eIUdV12UnTsLCGGBuHEOaAtgA7R4WMaWgvWOkhkQcy2k0t6RvX1ns4tz');

  const searchPhotos = async () => {
    const results = await client.photos.search({ query });
    const Data = results.photos;
    setPhotos(Data);
   
  };
const handlechamge = (e) => {
  searchPhotos()
  setQuery(e.target.value)
}


 
   
  useEffect(() => {
    searchPhotos()
    }, [])


  return (
    <>
    <div className="w-4/4 flex items-center justify-center"><span className={dd.sage}>SAGE </span> <span className={dd.Gallery}>  Gallery</span></div>
    <div className='w-4/4 bg-black flex flex-col items-center justify-center mt-4 mb-7'>
      
      
    <div className=" flex flex-col gap-3" >
      <input type="text" value={query} onChange={handlechamge} style={{color:"black" , height:"40px" , borderRadius:"20px" , padding:"10px" , fontFamily:"sans-serif"}} />
      <div className="bg-red-500 rounded-xl p-3 flex items-center justify-center m-3"> <AlertTriangle className='text-red-800 w-9 m-3'/> "There is a bug after searching enter one more space to get your desired result"</div>
      {/* <button onClick={handleSearch} className="bg-blue-600 w-90  pl-4 pr-4 rounded-xl flex items-center justify-center">Search</button> */}
      {/* <button onClick={SearchComp} className="bg-blue-600 w-90  pl-4 pr-4 rounded-xl flex items-center justify-center">Nature</button>
      <button onClick={SearchCompd} className="bg-blue-600 w-90  pl-4 pr-4 rounded-xl flex items-center justify-center">people</button> */}
     
    </div>
    
    </div>
    <div className=' w-4/4  bg-black flex justify-center flex-wrap gap-2 '>
      {photos.map((photo)=>{
        return <div key={photo.id}>
     
          <img  src={photo.src.large} alt="" width="300px" height="auto" style={{borderRadius:"20px"}} />
          
        </div>
      })}
    </div>
    </>
  )
}
