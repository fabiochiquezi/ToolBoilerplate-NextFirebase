import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

export const firebaseConfig = {
    apiKey: 'AIzaSyAcBH5M_wC8qI05UvJHDEKRyw2kA0fjlSI',
    authDomain: 'toolboilerplate-nextfirebase.firebaseapp.com',
    projectId: 'toolboilerplate-nextfirebase',
    storageBucket: 'toolboilerplate-nextfirebase.appspot.com',
    messagingSenderId: '925846064743',
    appId: '1:925846064743:web:e33839e88e40c615654ec2',
    measurementId: 'G-8WY4S9QEJR'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

const hasWindow = typeof window !== 'undefined'
const isDevelopment = process.env.NODE_ENV === 'development'
const isDevMode = hasWindow && isDevelopment
if (isDevMode) {
    connectFirestoreEmulator(db, 'localhost', 8080)
    connectAuthEmulator(auth, 'http://localhost:9099')
}
