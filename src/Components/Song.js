const Song = ({artist, title}) => {
    return (
        <div className="song">
            <h3>{artist}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Song;