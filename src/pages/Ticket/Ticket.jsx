import ticket from "./ticket.png"
import vector from "./Vector 2.svg"
import "./Ticket.sass"
// компонент
function Ticket() {

  return (
    <div className="Ticket">
      <div className="container">
        <h2>Your fav movie is</h2>
        <h2>booked! <img src={vector} alt="" /></h2>
        <img className="ticketImg" src={ticket} alt="" />
        <p>Payment successfully completed</p>
        <a href="" className="payButton buttons">SHARE YOUR TICKET</a>
        <a href="/seats" className="cancelButton buttons">DONE</a>
      </div>
    </div>
  )
}

export default Ticket



// доделать movie/ на второй странице поставить заголовок choose sits