import { useState } from "react";


const  Receipt= (props) => {

    //display final results
    //layout of each receipts 

    
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

    // const handleClick = event => {
    //     if (props.receiptData.paid === false) {
         
       
    //     } 
    // }

    return (  
        <div onClick= {ToggleClass}  className={isActive ? "receipt" : "false"}> 
            <h2> {props.receiptData.person} </h2> 
            <p> <span> Main: </span> {props.receiptData.order.main}</p> 
            <p> <span> Protein: </span> {props.receiptData.order.protein}</p> 
            <p> <span> Rice: </span>{props.receiptData.order.rice}</p> 
            <p> <span> Sauce: </span> {props.receiptData.order.sauce}</p> 
            <p> <span> Drink: </span> {props.receiptData.order.drink}</p>  
            <p> <span> Toppings: </span> {props.receiptData.order.toppings}</p>
            <p> <span> Cost: </span> {props.receiptData.order.cost}</p> 
        </div>
    );
}
 
export default Receipt ;