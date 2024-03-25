import { useEffect, useState } from "react";
import { VIDEO_DATA_API } from "../utils/constants";


const useVideoData = (videoId) => {
    const [videoData,setVideoData] = useState(null);
     

    useEffect( () => {
        getVideoData()
    },[videoId])
    
    const getVideoData = async() => {
        const data = await fetch(VIDEO_DATA_API+videoId+"&key="+"AIzaSyCNUD1YeGurGXdowiptR1Bl7CGeggdaVfs");
        const json = await data.json();
        setVideoData(json?.items[0]);
        
    }
    return videoData;

}

export default useVideoData;