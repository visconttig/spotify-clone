import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

 import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";




const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
const divRef = useRef(null);

const topPlays = data?.slice(0, 5);

useEffect(() => {
  divRef.current.scrollIntoView({ behavior: "smooth"});
});

const handlePlayClick = () => {
  dispatch(setActiveSong({ song, data, i }));
  dispatch(playPause(true));
};

const handlePauseClick = () => {
  dispatch(playPause(false));
};


return (
  <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex felx-col">
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-xl">Top Charts</h2>
        <Link to="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>

      </div>
      
    </div>

  </div>
)



}

export default TopPlay;