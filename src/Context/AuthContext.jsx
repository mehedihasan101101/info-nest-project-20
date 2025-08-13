import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.init";
const AutContext = createContext(null)

const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, SetUser] = useState(null)

    // sign up
    function singUp(email, password) {
        setLoading(true)
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
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout
    function logOut() {
        setLoading(true)
        return signOut(auth)
    }

    // password Recovery
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }
    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            if (currentUser.emailVerified) {
                SetUser(currentUser)
            }

            return () => {
                unsubscribe();
            }
        })
    }, [])
    const value = {
        user,
        SetUser,
        singUp,
        updateUser,
        LogIn,
        logOut,
        resetPassword,
        loading,
        setLoading
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