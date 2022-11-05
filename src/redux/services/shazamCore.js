//import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key\n': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
    });