import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Main pages
import { Home } from './Home.jsx';
import { Blog } from './Blog.jsx';

//Subpages
import { Blog_1 } from './blog1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Blog />}/>
        
        <Route path="posts/1" element={<Blog_1/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
