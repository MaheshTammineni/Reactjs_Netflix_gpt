import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { data } from "autoprefixer";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // search movie in TMDB
    const  searchMovieTMDB = async(movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="  + movie + "&include_adult=false&language=en-US&page=1",
        API_OPTIONS);
    
    const json = await data.json()
    return json.results;
    };
  
    const handleGptSearchClick = async() => {
        console.log(searchText.current.value);
        //Make API call to GPT API and get movie results
        // const gptQuery = "Act as a Movie Recommendataiton system and suggest some movies for the query:" +  searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery  }],
        //     model: 'gpt-3.5-turbo',
        //   });
        
        //   if(!gptResults.choices){
        //     // write error handling
         
        //   }
        // console.log(gptResults.choices?.[0]?.message?.content);
        // //Andaz Apna, Hera Phari,Chupke Chupke, Jaane Bhi Do Yaaro, Padosan   this is string data
        // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        // //["Andaz Apna", "Hera Phari","Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"] this is array of data
        // //For each movie i will search TMDB API
        const gptMovies = ["Andaz Apna", "Hera Phari", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"];
        const data = gptMovies.map(movie => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(data); //read array of promises
        console.log(tmdbResults);
        
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    };

    return (
    <div className="pt-[30%]  md:pt-[10%] flex justify-center">
     <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()} >
          {/* avoid form submit and refresh */}
        <input type="text" ref={searchText}  className="p-4 m-4 col-span-9" placeholder={lang[languageKey].gptSearchPlaceholder} />
        <button className="py-2 px-3 col-span-3 m-4  bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[languageKey].search}</button>
     </form>
    </div>
    );
};

export default GptSearchBar;