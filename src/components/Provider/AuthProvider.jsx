import React, { createContext, useEffect, useState } from "react";
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };
   const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOutuser = () => {
      signOut(auth)
         .then(() => {
            console.log("logout successful");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unSubscribe();
      };
   }, []);

   const authInfo = {
      loading,
      user,
      googleLogin,
      createUser,
      loginUser,
      logOutuser,
      githubLogin,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
