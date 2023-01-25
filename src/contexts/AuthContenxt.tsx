import React, { createContext, useContext, useEffect, useState } from "react";
import {
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut
} from "firebase/auth";
import { auth } from "../lib/firebase";

interface AuthProviderProps {
   children: React.ReactNode
}

interface userProps {
   uid: string;
   email: string;
   password: string;
}
interface AuthContentxProps {
   user: userProps,
   login: (email: string, password: string) => Promise<any>;
   signup: (email: string, password: string) => Promise<any>;
   logout: () => void;
}

const AuthContenxt = createContext({} as AuthContentxProps);

export const useAuth = () => useContext(AuthContenxt);

export const AuthProvider = ({ children }: AuthProviderProps) => {
   const [user, setUser] = useState<any>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscript = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser({
               uid: user.uid,
               email: user.email,
               displayname: user.displayName,
            })

         } else {
            setUser(null);
         }
      })
      setLoading(false)
      return () => unsubscript()
   }, []);

   const signup = async (email: string, password: string) => {
      const response = await createUserWithEmailAndPassword(auth, email, password)

      return response
   }

   const login = (email: string, password: string) => {
      const response = signInWithEmailAndPassword(auth, email, password)
      return response
   }

   const logout = async () => {
      await signOut(auth).then(() => {
         setUser(null)
      })
   }

   return (
      <AuthContenxt.Provider value={{
         user,
         login,
         logout,
         signup
      }}>
         {loading ? null : children}
      </AuthContenxt.Provider>
   )

}

export const AuthConsumer = AuthContenxt.Consumer;

export default AuthContenxt;
