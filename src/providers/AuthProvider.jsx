import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("current User", currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])



  const authInfo = {
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    user
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}


/*
1. create context will null as default
2. create provider
3. set a default value with something (authInfo)
4. attention please[!!!!]
5. use the authProvider in the main.jsx
6. access the children inside the authProvider in the main.jsx
*/
