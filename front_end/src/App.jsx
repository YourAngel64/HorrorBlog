import {Home} from "./Home"
import {Blog} from "./Blog"
import "../public/CSS/App.css";
export default function App(){

  return(
    <> 
      <div className="navigation_div">
        <a href="home" className="navigation_pages" >Home</a>
        <br />
        <a href="posts" className="navigation_pages" >Blog</a>
        <br />
        <a href="wall" className="navigation_pages" >Comment Wall</a>
      </div>

      <div className="pages">
        {/* <Home></Home> */}
        <Blog></Blog>
      </div>
      
      
     
      
    </>
  )
}