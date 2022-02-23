import './Song.css'

const Song = ({artist, title, position, image}) => {
    return (
        <>
        <div className="song">
            <div className="position">
                <h2>{position}</h2>
            </div>
            <div>
                <img src={image} alt="song image" />
            </div>
            <div>
                <h3>{artist}</h3>
                <p>{title}</p>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Song;