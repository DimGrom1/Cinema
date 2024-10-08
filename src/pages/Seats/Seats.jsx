import { useEffect, useState } from 'react'
import screen from "./Vector 4.svg"
import "./Seats.sass"
// компонент
function Seats() {
  const [db, setDb] = useState({
    "12:00AM": [],
    "3:00PM": [],
    "9:00PM": [],
  })
  const [cost, setCost] = useState(0)
  const [sessionTime, setSessionTime] = useState("3:00PM")
  const [activeTime, setActiveTime] = useState(1)
  const [selectedSeats, setSelectedSeats] = useState([])
  useEffect(() => {
    let nextDb = { ...db }
    for (let i = 0; i < 45; i = i + 1) {
      let a = Math.floor(Math.random() * 2) == 0 ? true : false
      let b = Math.floor(Math.random() * 2) == 0 ? true : false
      let c = Math.floor(Math.random() * 2) == 0 ? true : false
      nextDb["12:00AM"].push({
        available: a
      })
      nextDb["3:00PM"].push({
        available: b
      })
      nextDb["9:00PM"].push({
        available: c
      })
    }

    console.log(nextDb);

    setDb(nextDb)
    // пустые квадратыне скобки нужны для того, чтобы useEffect выполнялся только один раз
  }, [])
  function price(cost) {
    setCost()
  }

  function selectSeat(id) {
    setSelectedSeats((s) => {
      let nextSeats = [...s]
      if (!nextSeats.includes(id)) {
        nextSeats.push(id)
        setCost((c) => c + 5)
      }
      else {
        nextSeats.splice(nextSeats.indexOf(id), 1)
        setCost((c) => c - 5)
      }
      console.log(nextSeats)
      return nextSeats
    })
  }

  function handleTime(t, tId) {
    setActiveTime(tId);
    setSessionTime(t)
    setSelectedSeats([])
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
            db[sessionTime].map((el, id) => {
              return <button type="button" key={id} className={
                (el.available ? "" : "reserved ") +
                (selectedSeats.includes(id) ? "selectedSeat " : "")
              }
                onClick={() => { selectSeat(id) }}></button>
            })
          }

        </div>
        <div className="legend">
          <div className="available">
            <span>•</span>
            available
          </div>
          <div className="selectedTime">
            <span>•</span>
            selected
          </div>
          <div className="reserved">
            <span>•</span>
            reserved
          </div>
        </div>
        <div className="time">
          <button type="button" className={activeTime == 0 ? "activeTime " : ""} onClick={() => { handleTime("12:00AM", 0); setCost(0) }}>12:00 AM</button>
          <button type="button" className={activeTime == 1 ? "activeTime " : ""} onClick={() => { handleTime("3:00PM", 1); setCost(0) }}>3:00 PM</button>
          <button type="button" className={activeTime == 2 ? "activeTime " : ""} onClick={() => { handleTime("9:00PM", 2); setCost(0) }}>9:00 PM</button>
        </div>
        <a href="/ticket" className="payButton buttons">Pay {cost}$</a>
        <a href="/movie" className="cancelButton buttons">Cancel</a>
      </div>
    </div>
  )
}

export default Seats


