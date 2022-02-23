import SongList from "../Components/SongList";
import { useState , useEffect } from "react";

const SongContainer = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs();
      }, [])

    const getSongs = function(){
        const request = fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(request => request.json())
        .then(data => setSongs(data.feed.entry))
    }

    return (
        <>
        <h2>This is my container</h2>
        <SongList songs={songs}/>
        </>
    
    )
}

export default SongContainer;