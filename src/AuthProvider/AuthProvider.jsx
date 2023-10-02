import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

  // google sign in
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth,provider)
  };

  // sign up user
  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  //user sign in
  const signInUser = (email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
  }

  // user sign out
  const singOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  const handleUpdateProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}
// using observer
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
       setLoading(false)
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
    loading,
    handleUpdateProfile
  };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
