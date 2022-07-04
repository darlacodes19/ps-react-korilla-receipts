
import Receipt from "./Receipt";
//go through data
//logic goes here
const Record = (props) => {
  const {receipts} = props
  
 

    return (  
    <div className="border">
       
       {receipts.map((receipt, index) => {
            return <Receipt  receiptData = {receipt} key = {index}  /> 
       }) }
       
       

    </div>
    
 
    
    );

    
}
 
export default Record;