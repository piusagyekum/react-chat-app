// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {} from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()

