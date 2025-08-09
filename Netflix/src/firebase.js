import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAS2Qcl1F7Nq_k11f8HmbuYp4W2-C9WJNY",
  authDomain: "netflix-clone-a2d4c.firebaseapp.com",
  projectId: "netflix-clone-a2d4c",
  storageBucket: "netflix-clone-a2d4c.firebasestorage.app",
  messagingSenderId: "319033428411",
  appId: "1:319033428411:web:e35f56deebd8f7058a9c9e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authpProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async()=>{
    signOut(auth);
}

export {auth,db,login,signUp,signOut,logout}