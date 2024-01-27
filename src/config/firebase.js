import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCdZX1I9DX2mTux9GIETwQtbExmQFzxd0Q",
  authDomain: "olx-clone-3acfa.firebaseapp.com",
  projectId: "olx-clone-3acfa",
  storageBucket: "olx-clone-3acfa.appspot.com",
  messagingSenderId: "543494101541",
  appId: "1:543494101541:web:ac9500d4c2ad4c3a9b7dcc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function signup(userInfo) {
  const { email, password, fullName, age } = userInfo;
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    const docRef = await addDoc(collection(db, "users"), {
      fullName,
      age,
      email,
    });

    alert('Registered Successfully')



    return true;
  }
  catch (e) {
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

  const { email, password } = userInfo;
  await signInWithEmailAndPassword(auth, email, password)

 


}
async function logout() {
  await signOut(auth)


}

async function userAd(ad) {

  const { title, brand, price, images, description } = ad;

  try {

    const storageRef = ref(storage, `adDetails/${images.name}`);

    await uploadBytes(storageRef, images);
    const imgURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "adDetails"), {
      title,
      brand,
      price,
      description,
      imageURL: imgURL,

    });

    alert('AD Posted!')

    return true;



  }
  catch (e) {
    alert(e.message)
    throw e;
  }

}

async function getADs() {
  const querySnapshot = await getDocs(collection(db, "adDetails"));
  const adsData = []
  querySnapshot.forEach((doc) => {

    const ad = doc.data()
    ad.id = doc.id

    adsData.push(ad)
  });
  return adsData


}



async function uploadpfp(pfpimage) {
  const { pfpImg } = pfpimage

  try {

    const storageRef = ref(storage, `profilepictures/${pfpImg.name}`);
    await uploadBytes(storageRef, pfpImg)
    const pfpURl = await getDownloadURL(storageRef)

    const docRef = await addDoc(collection(db, "userpfps"), {
      pfpURl,

    });
  } catch (e) {
    alert(e.message)
  }


}

async function getpfps() {

  const querySnapshot = await getDocs(collection(db, "userpfps"));
  const pfpIMG = []
  querySnapshot.forEach((doc) => {


    pfpIMG.push(doc.data())
  });
  return pfpIMG


}
async function getSingleProduct(detailID) {

  const docRef = doc(db, "adDetails", detailID);
  const docSnap = await getDoc(docRef);
  const productData = docSnap.data()

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
  return productData





}


export {
  login,
  signup,
  userAd,
  getADs,
  logout,
  uploadpfp,
  getpfps,
  getSingleProduct
}
