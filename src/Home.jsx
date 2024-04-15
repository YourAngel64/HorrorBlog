import { useState } from "react"
import "../public/CSS/Home.css"
import App from './App.jsx'



export function Home(){
    const [eyePosition, setEyePosition] = useState({ x: 125, y: -233 });

    function move_eye(xpos, ypos) {
        // Calculate position relative to the center of the eye
        const eyeCenterX = 125;
        const eyeCenterY = -233;
        const relativeX = xpos - eyeCenterX;
        const relativeY = ypos + eyeCenterY;

        // Limit the movement within a certain range
        const limitX = Math.min(Math.max(relativeX, -10), 12);
        const limitY = Math.min(Math.max(relativeY, -10), 5);

        // Update eye position
        setEyePosition({ x: eyeCenterX + limitX, y: eyeCenterY + limitY });
    }

    function eye_normal(){
        setEyePosition({ x: 125, y: -233 });
    }

    //Elements coding:
    return(
        <>
            <App/>
            <p className="titles">Home...</p>
            <p className="names">ENTEN</p>
            {/* div where eyes follow mouse */}
            <div onMouseMove={e => move_eye(e.clientX, e.clientY)} onMouseLeave={e => eye_normal()}>
                
                <img src="../public/Pictures/main_picture.png" className="profile"/>
                <div className="eye" style={{
                        marginLeft: `${eyePosition.x}px`,
                        marginTop: `${eyePosition.y}px`,
                        
                    }
                }>
                    <img src="../public/Pictures/eye.png" id="eye_pic"/>
                </div>
                
                <div className="introduction_div">
                    <p className="normal">
                        I find quite hilarious how from all the places in
                        the World Wide Web; You had to end up here.
                        Try to be careful. You're always being watched. 
                        Not by me but by many more...
                        
                        Want to know more about us? You're diging your own grave
                    </p>
                </div>
            </div>
    
            

           
            
        </>
    )
}