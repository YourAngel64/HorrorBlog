import {Home} from "./Home"
import "../public/CSS/App.css";
export default function App(){
  return(
    <> 
      <div className="navigation_div">
        <p className="navigation_pages">Home</p>
      </div>

      <div className="pages">
        
        <Home></Home>
      </div>
      
      
     
      
    </>
  )
}