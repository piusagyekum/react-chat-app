// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { collection, getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const usersColRef = collection(db, "users")
