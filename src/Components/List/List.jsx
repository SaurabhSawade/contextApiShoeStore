import React from "react";
import App from "../../App";
import './List.css'

function ShoeList({ shoeslist, addToCart }) {
  
  
  return (
   <>
      <div className="left ">
            {
              shoeslist.map((shoe)=>(
                <div className="items">
                  <img id="image" src={shoe.image} alt={shoe.name} />
                  <h3 id="naam">{shoe.name}</h3>
                  <p id="price">₹{shoe.price}</p>
                  <button id="add" onClick={() => addToCart(shoe)}>Add To Cart</button>
                </div>
              ))
            }
      </div>
   </>
  );
}

export default ShoeList;