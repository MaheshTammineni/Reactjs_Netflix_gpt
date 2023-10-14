import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const user = useSelector(store => store.user);
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
    
  return (
    <>
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
          <img
              className="w-44"
              src={LOGO}
              alt="logo" />
    
    {user && (<div className="flex p-2">
              <img className="w-12 h-12"  src={user?.photoURL}
                  alt="rightLogo" />
              <button onClick={handleSignOut}   className="font-bold text-white">(sign out)</button>
    </div> )}
    </div>
    </>
  );
};

export default Header;
