import Song from "./Song";

const SongList = ({songs}) => {

    // map the songs, get the title and artist and chart position
    // artist ["im:artist"][label]
    // title ["im:name"][label]
    // id [id][attributes]["im:id"]
    // chart position is the index?
    const songItem = songs.map((song, index)=>{
        return <Song key={index} artist={song["im:artist"]["label"]} title={song["im:name"]["label"]}/>
    })

    return (
        <>
            <h4>This is my list</h4>
            {songItem}
        </>
    )
}

export default SongList;