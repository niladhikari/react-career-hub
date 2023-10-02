import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth,provider)
  };

  // sign up user
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  //user sign in
  const signInUser = (email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
  }

  // user sign out
  const singOutUser = ()=>{
    return signOut(auth)
  }


// using observer
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
     })
     return ()=>{
       unSubscribe()
     }
   },[])

  const authInfo = {
    googleSignIn,
    createUser,
    signInUser,
    user,
    singOutUser,
  };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
