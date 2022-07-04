
import './index.css'
import Main from './components/Main';
import receipts from './Data'


function App() {
 
  
  return (
  
    <div className='App'> 
      <h1> Korilla Receipts </h1>
     
        <Main receipts = {receipts} /> 
      

    </div>
  )
}




export default App;
