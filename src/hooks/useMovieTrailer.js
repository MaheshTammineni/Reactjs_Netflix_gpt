import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    // const [trailerId, setTrailerId] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const res = await data.json(); //convert to json data
    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : res.results[0];
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer