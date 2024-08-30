import { useEffect, useState } from 'react'
import screen from "./Vector 4.svg"
import "./Seats.sass"
// компонент
function Seats() {
  const [db , setDb] = useState([])
  const [activeTime , setActiveTime] = useState(1)
  useEffect(() => {
    let nextDb = []
    for (let i = 0; i < 45; i = i + 1) {
      let a = Math.floor(Math.random() * 2) == 0 ? true : false
      nextDb.push({
        available: a
      })
    }
    setDb(nextDb)
  // пустые квадратыне скобки нужны для того, чтобы useEffect выполнялся только один раз
  },[])

  function selectSeat(id){
    setDb((currentDb) => {
      // три точки нужны для того чтобы скопировать содержимое db(currentDb)
      let nextDb = [...currentDb]
    })
  }

  return (
    <div className="Seats">
      <div className="bg"></div>
      <header>
        <div className="container">
          <a href=""></a>
          <h2>Choose seats</h2>
          <button></button>
        </div>
      </header>
      <div className="container">
        <img src={screen} alt="" />
        <div className="places">
          {
            db.map((el,id) => {
              return <button key={id} className={el.available?"reserved ":""} onClick={() => selectSeat(id)}></button>
            })
          }

        </div>
        <div className="legend">
          <div className="available">
            <span>•</span>
            available
          </div>
          <div className="selected">
            <span>•</span>
            selected
          </div>
          <div className="reserved">
            <span>•</span>
            reserved
          </div>
        </div>
        <div className="time">
          <button type="button" className={activeTime == 0?"activeTime ":""} onClick={() => setActiveTime(0)}>12:00 AM</button>
          <button type="button" className={activeTime == 1?"activeTime ":""} onClick={() => setActiveTime(1)}>3:00 PM</button>
          <button type="button" className={activeTime == 2?"activeTime ":""} onClick={() => setActiveTime(2)}>9:00 PM</button>
        </div>
        <button className="payButton buttons">Pay 15$</button>
        <button className="cancelButton buttons">Cancel</button>
      </div>
    </div>
  )
}

export default Seats


