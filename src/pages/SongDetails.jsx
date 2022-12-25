import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
    const { songid } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid); 
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery(songid);


    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };
    
      const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    

    if(isFetchingSongDetails || isFetchingRelatedSongs) {
        return (
            <Loader title="Searching song details." />
        );
    }

    if(error) {
        return <Error />;
    }


    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={""} songData={songData} />

            <div className="mb-10">
                <h2 className="text-3xl text-white font-bold">Lyrics: </h2>

                <div className="mt-5">
                    {songData?.sections[1].type === "LYRICS" ? 
                    songData?.sections[1].text.map((line, i) => (
                        <p key={i} className="text-blue-600 text-lg font-semibold  leading-loose">{line}</p>
                    )) : (
                        <p className="text-blue-600 text-lg font-semibold leading-loose">Sorry, no lyrics found!</p>
                    )}
                </div>
            </div>


                <RelatedSongs
                    data={data}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick} />
                
        </div>
    );
}

export default SongDetails;
