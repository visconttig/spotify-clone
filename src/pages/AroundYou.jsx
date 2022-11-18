import React from 'react';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import  axios  from "axios";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";



const AroundYou = () => {
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_LAhm7P4kpboIf7jbuEPqU95MKdWgk`)
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [country]);

    if(isFetching && loading){
        return <Loader title="Loading songs around you..." />;
    }

    if(error && country){
        return <Error />;
    }

    let regionNames = new Intl.DisplayNames([`${country}`], {type: "region"});
    let countryFullName = regionNames.of(`${country}`);

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around You <span className="text-gray-400 opacity-10" >{countryFullName}</span> </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard 
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    i={i} />
                ))}
            </div>
        </div>
    );
}

export default AroundYou;
