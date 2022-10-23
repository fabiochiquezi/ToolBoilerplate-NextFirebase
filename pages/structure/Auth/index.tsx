import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { publicRoutes } from '../../routes'
import { auth } from '../../firebase.config'
import { AuthContext, AuthUpdateContext, props } from './types'
import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    User
} from 'firebase/auth'

const AuthProvider: React.FC<props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const isPublic = publicRoutes.includes(router.pathname)

    async function signIn(): Promise<void> {
        console.log('sss')
        try {
            if (loading) return
            setLoading(true)
            const provider = new GoogleAuthProvider()
            const authUser = await signInWithPopup(auth, provider)
            setUser(authUser.user)
        } catch (e) {
            alert('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    async function signOut(): Promise<void> {
        try {
            await auth.signOut()
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const authState = (callBack: any): void => {
        onAuthStateChanged(auth, userGoogle => {
            callBack(userGoogle)
        })
    }
    authState(async (userFirebase: User) => {
        if (user == null && userFirebase) {
            setUser(userFirebase)
            return
        }
        if (!isPublic && user == null && !userFirebase) {
            await router.push('/')
        }
    })

    return (
        <AuthContext.Provider
            value={{ user, loading }}
            data-testid="auth-provider"
        >
            <AuthUpdateContext.Provider
                value={{ signIn, signOut, setUser, setLoading }}
            >
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export { AuthProvider }
