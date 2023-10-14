import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    return (
    <div className="w-40 pr-4">
        <img src={IMG_CDN_URL + posterPath} alt="image" />
    </div>
    );
};
export default MovieCard;