import React, { Children, createContext, useState } from "react";
import {
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

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOutuser = () => {
      return signOut(auth)
         .then(() => {
            console.log("logout successful");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   fetch(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log(currentUser);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      googleLogin,
      createUser,
      loginUser,
      logOutuser,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
