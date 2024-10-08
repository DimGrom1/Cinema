import { useState } from 'react'
import starWars from "./Rectangle 58.svg"
import star from "./Star 4.svg"
import vector from "./Vector 5.svg"
import "./Movie.sass"
// компонент
function Movie() {

  return (
    <div className="Movie">
      <header>
        <div className="container">
          <a href=""></a>
          <h2>Movie Detail</h2>
        </div>
      </header>
      <div className="container">
        <img id="starWars" src={starWars} alt="" />
      </div>
      <div className="info">
        <div className="container">
          <h2>Star Wars</h2>
          <div className="about">
            <p>1997</p>
            <span>•</span>
            <p>Action</p>
            <span>•</span>
            <p>2h 31m</p>
          </div>
          <div className="star">
            <img className="activeStar" src={star} alt="" />
            <img className="activeStar" src={star} alt="" />
            <img className="activeStar" src={star} alt="" />
            <img className="activeStar" src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>The Star Wars Trilogy Special Edition was a theatrical anniversary edition of the original trilogy, in order to celebrate the 20th anniversary of the release of Star Wars: Episode IV A New Hope.</p>
          <div className="buyTicketCont">
            <a href="/seats">BUY TICKET
              <div className="line">
                <img src={vector} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie



// доделать movie/ на второй странице поставить заголовок choose sits