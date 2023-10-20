import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVTAR } from "../utils/constants";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); //hook used to access variables
  const [errorMessage, seterrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick =() =>{
    //validate form data
      const message = checkValidData(email.current.value, password.current.value);
      seterrorMessage(message);
      //sign / sign up
      if(message) return;  //i dont want program to go ahead of this
      //sign in sign up logic
      if(!isSignInForm){
          // sign up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name.current.value, photoURL: USER_AVTAR
              }).then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                // navigate("/browse");
              }).catch((error) => {
                // An error occurred
                seterrorMessage(error.message);
              });

            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode +"-"+ errorMessage);
          });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        //   navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode +"-"+ errorMessage);
        });
      }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover"
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute text-white p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 px-4 my-2 w-full bg-gray-700"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 px-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 px-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button className="p-2 my-4 bg-red-500 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
