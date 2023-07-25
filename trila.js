import Weather from './component/Weather';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const[lat,setLat]=useState([])
  const[long,setLong]=useState([])
  const[data,setData]=useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      Navigator.geolocation.getCurrentPosition(function(position)
      {
  setLat(position.coords.latitude)
    setLong(position.coords.longitude)
      })
      await fetch(`${process.env.REACT_APP_API_URL}/Weather/?lat=${lat}
      &lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      //console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  fetchData()
  },[lat,long])
  
  
  
  
  
  return (
    <div className="container">
      {(typeof data.main !='undefined')?
(
<Weather weatherData={data}/>):(
  <div></div>
)}
    </div>
  );
}

export default App;
