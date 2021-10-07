import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG4p0DbPxzwlZ2N6iDnIc8rluD6maVO0g",
  authDomain: "fake-id-4ffcb.firebaseapp.com",
  projectId: "fake-id-4ffcb",
  storageBucket: "fake-id-4ffcb.appspot.com",
  messagingSenderId: "932010719951",
  appId: "1:932010719951:web:40472818ed8495992cd5ba",
  measurementId: "G-1CJF5B61SR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
