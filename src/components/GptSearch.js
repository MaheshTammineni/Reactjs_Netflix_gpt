import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () =>{
    return (
        <>
         <div className="fixed -z-10">
        <img className="h-screen object-cover"
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
    <div className="pt-[30%] md:pt-0">
     <GptSearchBar />
     <GptMovieSuggestions />
    </div></>
    );
};

export default GptSearch;