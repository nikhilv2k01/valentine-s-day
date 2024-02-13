import React from "react";
import "./css/home.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/letter")
    }
  return (
    <div id="card" >
      <center>
        <h1 className="text-2xl text-center  font-bold">Happy Valentines Day </h1>
      </center>
      <div className="heart" id="heart1">
        <div id="half1">
          <div id="circle"></div>
          <div id="rec"></div>
        </div>
        <div id="half2">
          <div id="circle"></div>
          <div id="rec"></div>
        </div>
      </div>
      
      <div id="message" c>
        <h2 >I love you Allu </h2>
        <div className="flex justify-center text-red-600 text-7xl animate-ping">
        <FaHeart />
        </div>
        {/* <div className="heart"><FaHeart /></div> */}
      </div>
      
      <div className="heart" id="heart2">
        <div id="half1">
          <div id="circle"></div>
          <div id="rec"></div>
        </div>
        <div id="half2">
          <div id="circle"></div>
          <div id="rec"></div>
        </div>
      </div>
      <div className="w-full flex justify-center">
      <button className="text-white font-bold text-2xl p-1 px-4 cursor-pointer border bg-emerald-400 rounded-2xl" onClick={handleClick}>Click here babe!</button>
      </div>
    </div>
  );
};

export default Home;
