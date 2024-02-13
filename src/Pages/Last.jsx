import React, { useState } from 'react';
import "./css/last.css"
import img1 from "../images/img5.jpg"
import img2 from "../images/img3.jpg"
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Last = () => {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className="allcard">
    <div><p className="helptext">Two souls, one love story!</p></div>
    <div className="maincontainer">
    <div className="card">
      <div className="front">
        <img className='w-96  h-96 object-cover' src={img1}/>
        {/* <img  src="https://avatars.mds.yandex.net/i?id=7a078dce6574f639d5b795a05015f9e0-5897285-images-thumbs&n=13"/> */}
      </div>
      <div className="back">
        {/* <img   src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/05/05/ea1523a9-657f-49d7-bc3d-92a33662da29.jpeg"/> */}
        <img className='w-96 h-96 object-cover' src={img2}/>
      </div>
    </div>
  </div>   
    <div >
    <p className="text title">Happy Valentine's Day!

</p>
    <p className="text">A flower cannot blossom without sunshine, and man cannot live without love </p></div>
    <p onClick={handleClick} className=' cursor-pointer text-9xl animate-bounce mt-2 text-red-600'><FaHeart /> </p>
  </div>
    );
}

export default Last;
