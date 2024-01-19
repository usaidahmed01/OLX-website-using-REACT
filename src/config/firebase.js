import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword ,  signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore ,  collection , addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdZX1I9DX2mTux9GIETwQtbExmQFzxd0Q",
  authDomain: "olx-clone-3acfa.firebaseapp.com",
  projectId: "olx-clone-3acfa",
  storageBucket: "olx-clone-3acfa.appspot.com",
  messagingSenderId: "543494101541",
  appId: "1:543494101541:web:ac9500d4c2ad4c3a9b7dcc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


async function signup(userInfo) {
  const { email , password , fullName , age } = userInfo;
  try{
   await createUserWithEmailAndPassword(auth, email, password)
   const docRef = await addDoc(collection(db, "users"), {
    fullName,
    age,
    email,
  });
   
   alert('Registered Successfully')

   
   
   return true;
  }
  catch(e){
    alert(e.message)
    throw e;
    
  }

  // .then((userCredential) => {
    // const user = userCredential.user;

    
  // })

  // .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;

  // });
  
  
}

async function login(userInfo) {
  
  try{
    const { email , password } = userInfo ;
     await signInWithEmailAndPassword(auth, email, password)
    
    alert('Loggedin Successfully ')

    return true;
  }

  catch (e){
    alert(e.message)
    throw e;
  }

  // .then((userCredential) => {
    // const user = userCredential.user;
  // })
  // .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // alert(errorMessage)
  // });

  
}

async function userAd(userInfo) {

  try{
    const { title , brand , price } = userInfo ;
     await addDoc(collection(db, "adDetails"), {
      title ,
      brand ,
      price ,

  });
   
   alert('AD Posted!')

   return true;

   

  }
  catch(e){
    alert(e.message)
    throw e;
  }
  
}


export {
  login , 
  signup ,
  userAd ,
}
