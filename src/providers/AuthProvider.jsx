import React, { createContext } from 'react'

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

    const authInfo = {
        name: "Nodi Sagor Khal bill"
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
