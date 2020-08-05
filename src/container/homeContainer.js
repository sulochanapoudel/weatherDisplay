import React from "react"
import axios from 'axios';

import HomeComponent from "../component/homeComponent"
import { useEffect } from "react";
import { useState } from "react";

import iconJson from "../component/icon.json"

let HomeContainer = () =>{
  const[serverdata, setserverdata]=useState([])
const[city,setCity]=useState({placeName:"kathmandu"})

let selectedarray=[]
let weatherid=serverdata.weather?serverdata.weather[0].id:""
selectedarray.push(iconJson.find((arg)=>parseFloat(arg.icon_id)===weatherid))

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.placeName}&appid=01a6c6fbee56c92ae6b945124df228fe`).then((res)=>{
      setserverdata(res.data)
      return(console.log(res.data))})
      .catch((err)=>{
        return(console.log(err))
      })
      
  },[city])
  let dataConverter={
    feellike:  (parseFloat(serverdata.main?serverdata.main.feels_like:"")-273.15).toFixed(2),
    sunrise:new Date((serverdata.sys?serverdata.sys.sunrise:"")*1000),
    sunset: new Date((serverdata.sys?serverdata.sys.sunset:"")*1000)
  }
  
  let selectedCity=(city)=>{
    setCity(city)
  }

  return(
    <div><HomeComponent Serverdata={serverdata}
    dataConverter={dataConverter}
    selectedarray={selectedarray}
    selectedCity={selectedCity}
    /></div>
  )
}

export default HomeContainer