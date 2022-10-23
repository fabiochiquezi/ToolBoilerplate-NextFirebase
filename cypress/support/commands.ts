import { firebaseConfig } from './../../pages/firebase.config'
/// <reference types="cypress" />

// ---------- Firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { attachCustomCommands } from 'cypress-firebase'

// firebase.initializeApp(firebaseConfig)
// attachCustomCommands({ Cypress, cy, firebase })
