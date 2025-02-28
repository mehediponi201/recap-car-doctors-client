import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }  

    //Login user
    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //Sign Out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //onAuthStateChanged 
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser =>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);  
        })) 
        return ()=>{
            unsubscribe();
        }
    },[])

    const info = {
        user,
        loading,
        createUser,
        loginUser,
        logOut
    };

    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;