import {Home} from "./Home"
import {Blog} from "./Blog"
import {Blog_1} from "./blog1"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../public/CSS/App.css";
export default function App(){

  return(
    <> 
      <div className="navigation_div">
        <a href="/" className="navigation_pages" >Home</a>
        <br />
        <a href="/posts" className="navigation_pages" >Blog</a>
        <br />
        <a href="/wall" className="navigation_pages" >Comment Wall</a>
        <br />
        <a href="/about" className="navigation_pages" >About</a>
        <br />
      </div>

      <div className="pages">
    
      </div>
      
      
      
     
      
    </>
  )
}