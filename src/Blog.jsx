import "../public/CSS/Blog.css"
import App from './App.jsx'


export function Blog(){
    return(
        <>
            <App></App>
            <p className="title">Blog...</p>
            <div className="description">
                <p className="description">
                    I do kind of love going around.
                    <br />
                    I do think it is very interesting what lays out there
                    I do know this is what may get your attention
                </p>
            </div>

            <div className="posts">
                <div className="posts_space">
                    <img src="/Pictures/blog/ISTHISTHEPLACE.png" className="posts" />
                    <a href="/posts/1" className="posts"><h3 className="posts">The neighborhood</h3></a>
                    <p className="posts">
                        2001/7/14 - 
                        <br />
                        there's something familiar about this place...?
                    </p>
                </div>
                    

            </div>
        </>
    )
}