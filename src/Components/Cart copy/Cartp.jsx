import React from 'react';
import './Cartp.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext.jsx';
import { useContext } from 'react';
// import { CartContext } from './contexts.CartContext';
// import { CartContext } from './contexts/CartContext';
function Cartp({cart,removeFromCart,addToCart}){
    // const { cart, removeFromCart } = useContext(CartContext);
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    return(
        <>
        <div className='cart w-96 mr-40'>
            <h1 className='m-7 text-xl'>Cart</h1>
            <ul>{
                cart.map(item =>(
                    <li className='listcart'>
                        <div className='list2'>
                            <div className='cartimage'>
                                <img src={item.image} alt={item.name} />
                            </div>    
                            <p>
                                <p>{item.name}</p>
                                <p>₹{item.price}</p>
                            </p>
                            <div className='but'>
                                <button onClick={()=>addToCart(item)}>+</button>
                                {item.quantity}
                                <button onClick={()=>removeFromCart(item)}>-</button>
                            </div>
                        </div>
                    </li>
                ))
            }  
            </ul> 
            <h2 className='flex justify-center text-2xl'>Total:  ₹{calculateTotal()}</h2>
            <Link to="/" className="proceed-to-pay-button flex justify-center">
             <button className='flex justify-center items-center w-48 '>
                Go Back to Shoping
             </button>
           </Link>
        </div>
        </>
    )
}
export default Cartp;
