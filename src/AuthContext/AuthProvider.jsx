/* eslint-disable react/prop-types */
// import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const handleUpdateProfile = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    console.log(res.data)
                    if(res.data){
                        localStorage.setItem('access-token', res.data)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
           
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic]) 



    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        handleUpdateProfile,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;