import React from "react";
import "./css/letter.css"
import { useNavigate } from "react-router-dom";
import heart from "../images/heart.png"
import { FaHeart } from "react-icons/fa";
function Letter() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/end")
    }
  return (
    <div>
      <div className="letter">
        <div calss="intro">
          <h2 className="main-title">HAPPY VALENTINES LOVE!</h2>
          <p>This is my valentines card for you babe</p>
          <p>
            <strong>for the prettiest girl in the world, my Allu</strong>
          </p>
        </div>
        <iframe
          src="https://giphy.com/embed/enrq327a3sMIJAS5jA"
          width="300"
          height="220"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p className="font-bold">click the heart babe</p>
        <a className="open-modal flex justify-center" href="#open-modal">
          <svg className="heart btn " viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </a>{" "}
      </div>

      <div id="open-modal" className="modal-window">
        <div className="">
          <a href="#" className="modal-close">
            DEARLOVE
          </a>
          <h6>HI LOVE</h6>
          <div>
            <p>
              Happy Valentines Allu, i have loved you since the first day we
              met though i wish that we have met more earlier so that i know
              what it feels like to be loved truely and purely sooner. I don't
              think you know how grateful i am to have you, not only as my girl
              but as my best friend too. Thank you for always giving me love and
              care, even though you are always busy with your studies you still
              make time for me. I hope we keep this love forever and continue to
              grow together and not apart, i can't imagine the day that i'm
              unable to hear your laugh, your smile, your hugs, your kisses, and
              especially your love, if it did happened i hope that it will be
              the day that i die, because i can't live a second in this world
              knowing that you are not here. Thank you for being here for me
              babe, i really am grateful to have you baby. Happy Valentines
              Allu, I Love You So Much..
            </p>
          </div>
          <div>
            <p>sincerely yours</p>
          </div>
          <div>
            <p>PJ</p>
          </div>
            <div className="flex flex-col items-end">
                <p  className="  px-3 py-2">click the heart babe</p>
                <img src={heart} alt=""  onClick={handleClick} className="w-20 h-20 cursor-pointer"  />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
