import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO , SUPPORTED_LANGUAGES} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // navigate("/");
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // When User signed in or sign up, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
        //unsubscribe when component unmounts
        return () => unsubscribe();  //from firebase documentation when header component unloads unsubscribe to event
      }, []);
    
      const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
      }

      const handleLanguageChange = (event) =>{
             dispatch(changeLanguage(event.target.value));
      }
  return (
    <>
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
          <img
              className="w-44 mx-auto md:mx-0"
              src={LOGO}
              alt="logo" />
              
    
    {user && (<div className="flex p-2 justify-between">
       {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>  }

              <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>
                {showGptSearch ? "Homepage" : "GPT Search"}</button>
              <img className="hidden md:block w-12 h-12"  src={user?.photoURL}
                  alt="rightLogo" />
              <button onClick={handleSignOut}   className="font-bold text-white">(sign out)</button>
    </div> )}
    </div>
    </>
  );
};

export default Header;
