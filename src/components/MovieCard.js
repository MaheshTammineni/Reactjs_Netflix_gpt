import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    if(!posterPath) return null;
    return (
    <div className="w-36 md:w-40 pr-4">
        <img src={IMG_CDN_URL + posterPath} alt="image" />
    </div>
    );
};
export default MovieCard;