import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Components/Chat/Chat";
import "./Recipi.css";
import axios from "axios";
import Video from '../../Components/Video/Videoplay'


function Recipie() {

  const [msg, setMsg] = useState({ display: "none" })

  useEffect(() => {
    setTimeout(() => {
      setMsg({ display: "flex" })
    }, 5000)
    setTimeout(() => {
      setMsg({ display: "none" })
    }, 15000)
  }, [])




  const [videodata, setvideodata] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/recipi")
      .then((responce) => {

        setvideodata(responce.data.data);
      })
      .catch((err) => alert(err.message));
  }, []);


  return (
    <div>
      <Navbar />
      <Chat />
      <Video videodata={videodata} />
      
      <div id="msgBox" style={msg}>
        <span> Click here to add your recipie </span>
      </div>
      <a href="/addrecipi">
        <div id="addRecipiIcon" >
          <i id="addrecipiIcon" className="fa-sharp fa-solid fa-plus"></i>
        </div>
      </a>
    </div>
  );
}

export default Recipie;
