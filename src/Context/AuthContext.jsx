import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
const AutContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, SetUser] = useState(null)
    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser.emailVerified) {
                SetUser(currentUser)
            }
            else {
                SetUser(null)
            }

            return () => {
                unsubscribe();
            }
        })
    }, [])
    // sign up
    function singUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user
    function updateUser(displayName, photoURL) {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }

    // login

    function LogIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout
    function logOut() {
        return signOut(auth)
    }
    const value = {
        user,
        SetUser,
        singUp,
        updateUser,
        LogIn,
        logOut
    }


    return (
        <>
            <AutContext.Provider value={value}>
                {children}
            </AutContext.Provider>
        </>
    );
};

export { AuthContext, AutContext };