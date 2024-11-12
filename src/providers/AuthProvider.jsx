import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOutUser = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("current User", currentUser);
      setUser(currentUser);
    })
    return () => {
      unSubscribe();
    }
  }, [])



  const authInfo = {
    createUser,
    signInUser,
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
