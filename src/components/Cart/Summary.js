import React,{useContext} from "react";
import CartContext from "../../store/CartContext";
const Summary=(props)=>{
    const {totalAmount}=useContext(CartContext);
    //  value 15 is for tax
    const totalbill=totalAmount-15;

   return(
       <>
         <h3>Summary</h3>
         <div>
             {props.children}
         </div>
         <div className="summary">
             <div className="d-flex justify-content-between">Subtotal<span>&#8377;{totalAmount}</span></div>
             <div className="d-flex justify-content-between">Shipping<span>Free</span></div>
             <div className="d-flex justify-content-between">Taxes<span>&#8377;15</span></div>
         </div>
         <div className="total_amount">
             <div className="d-flex justify-content-between">Total<span>&#8377;{totalbill}</span></div>
         </div>
       </>
   )
};
export default Summary;