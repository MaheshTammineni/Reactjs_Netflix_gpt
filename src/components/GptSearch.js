import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () =>{
    return (
    <div>
    <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
     <GptSearchBar />
     <GptMovieSuggestions />
    </div>
    );
};

export default GptSearch;