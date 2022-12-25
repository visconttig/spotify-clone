import SongBar from "./SongBar.jsx";


const RelatedSongs = ({ data, isPlaying, activeSong, 
  handlePauseClick, handlePlayClick, artistId }) => {



    return (
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs</h1>
    
        <div className="mt-6 w-full flex flex-col">
          { data && data.map((song, i) => (
            <SongBar 
            // passing index as key to avoid error due to duplicate song keys in external api
            // key={`${i}-${artistId}`}
            key={`${song.key}-${artistId}`}
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
