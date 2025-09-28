import { useEffect,useState } from "react"
import {videos_list} from '../config/constants';
import VideoCard from './VideoCard';
import { Link } from "react-router-dom";
const VideoContainer = ()=>{
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async()=>{
        const data = await fetch(videos_list);
        const json = await data.json();
        setVideos(json.items)
    }
    if (videos.length === 0) return null;
    return(
        <div className="flex flex-wrap justify-between">
            {videos.map((item)=>
            <Link key={item.id} to={'/watch?v='+item.id}>
                <VideoCard item = {item}  />
            </Link>
            )}
           
        </div>
    )
}

export default VideoContainer