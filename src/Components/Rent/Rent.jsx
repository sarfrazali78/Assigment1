import "./Rent.css"
import Card from "./Card.jsx"

function Rent() {
  return (
    <div className="watchlist-parent">
      <h1 style={{textAlign:"center",color:"orangered"}}>Our Latest Stock</h1>
      <div className="container">
      <div className="watchlist-heading"> <h3>Company Name</h3> <h3>Stock Price</h3></div>
      <Card/>
    
    
     
      </div>
    </div>
  );
}

export default Rent;