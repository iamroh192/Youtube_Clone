
import { useSearchParams } from "react-router-dom"
import CommentsContainer from './CommentsContainer';
import LiveChat from "./LiveChat";

const WatchVideo = ()=>{
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))
    return(
        <div className="m-5 p-5">
            <div className="flex ">
                <iframe 
                    width="1000" 
                    height="500" 
                    src={"https://www.youtube.com/embed/" + searchParams.get('v')} 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    >
                </iframe>
                <LiveChat/>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchVideo