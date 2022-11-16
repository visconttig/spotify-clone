import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key\n': '1675b6b70fmsh563d9a4c1ca9588p1a31aajsnc19873a40ca8',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({ 
            baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "1675b6b70fmsh563d9a4c1ca9588p1a31aajsnc19873a40ca8" );

            return headers;
        }, 
    }),

        endpoints: (builder) => ({
            getTopCharts: builder.query({    // world
                query: () => `/charts/world`,
            }),
            getSongDetails: builder.query({
                query: (songid) => `/tracks/details?track_id=${songid}`
            }),
        }),
    });
    
    export const { 
        useGetTopChartsQuery,
        useGetSongDetailsQuery } = shazamCoreApi; 