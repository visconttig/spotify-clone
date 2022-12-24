import SongBar from "./SongBar.jsx";


const RelatedSongs = ({ data, isPlaying, activeSong, 
  handlePauseClick, handlePlayClick, artistId }) => {


    const SONGS_DATA = data?.data[0]?.views?.["top-songs"]?.data;



    return (
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs</h1>
    
        <div className="mt-6 w-full flex flex-col">
          { SONGS_DATA && SONGS_DATA.map((song, i) => (
            <SongBar 
            // passing index as key to avoid error due to duplicate song keys in external api
            key={`${i}-${artistId}`}
            song={song}
            i={i} 
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick} />
          ))}
        </div>
    
      </div>
    )
  };

export default RelatedSongs;
