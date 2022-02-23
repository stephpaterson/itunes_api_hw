import Song from "./Song";

const SongList = ({songs}) => {

    // map the songs, get the title and artist and chart position
    // artist ["im:artist"][label]
    // title ["im:name"][label]
    // id [id][attributes]["im:id"]
    // chart position is the index?
    const songItem = songs.map((song, index)=>{
        return <Song key={song["id"]["attributes"]["im:id"]} artist={song["im:artist"]["label"]} title={song["im:name"]["label"]} position={index+1} image={song["im:image"][0]["label"]}/>
    })

    return (
        <>
            {songItem}
        </>
    )
}

export default SongList;