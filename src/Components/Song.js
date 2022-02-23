const Song = ({artist, title, position}) => {
    return (
        <>
        <div className="song">
            <div className="position">
                <h2>{position}</h2>
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