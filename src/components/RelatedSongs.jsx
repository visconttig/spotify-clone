import SongBar from "./SongBar.jsx";


const RelatedSongs = ({ data, isPlaying, activeSong, 
  handlePauseClick, handlePlayClick, artistId, newApi }) => {


    let songsData = data;


    // let songsData;
    // switch(newApi){
    //   case true:
    //     songsData = data?.data[0]?.views?.['top-songs']?.data;
    //     break;
    //   case false:
    //     songsData = data;
    //     break;
    //   default:
    //     songsData = null;
    // }



    return (
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs</h1>
    
        <div className="mt-6 w-full flex flex-col">
          { songsData && songsData.map((song, i) => (
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
