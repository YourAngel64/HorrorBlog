import "../public/CSS/Blog/1.css"


//Try to make a static background where the backgrond covers the whole thing but whenever the scrollbar is used it doesnt move. it stays the same
export function Blog_1(){
    return(
        <>
            <style>
            {
            `
                body{
                    background-color: #2ea4e8;
                }

                
            `
            }
            </style>

            <div className="blog1_main">
                
                <div id="div_button">
                    <a href="/posts" className="back_button"><p className="back_button"><u>Back</u></p></a>
                </div>
                
                <br />
                

                <h1 id="title"><u>The Neighborhood</u></h1>

                
            </div>
            
        </>
    )
}