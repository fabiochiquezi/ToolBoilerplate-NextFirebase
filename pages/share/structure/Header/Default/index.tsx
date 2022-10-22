import React from 'react'
import { Button } from 'rsuite'
import { useAuth, useSetAuth } from '../../Auth/types'
import { Logo } from '../../Logo/Default'

const Header: React.FC = () => {
    const { user, loading } = useAuth()
    const { signIn, signOut } = useSetAuth()

    return (
        <div className="container">
            <header className="flex justify-between items-center py-4 mb-16 max-w-[375px] mx-auto">
                <Logo />
                {user ? (
                    <Button
                        color="violet"
                        appearance="ghost"
                        size="lg"
                        className="transition duration-150 ease-out hover:opacity-70 active:opacity-40"
                        onClick={signOut}
                        disabled={loading === true ? true : false}
                    >
                        Sign Out
                    </Button>
                ) : (
                    <Button
                        color="violet"
                        appearance="ghost"
                        size="lg"
                        className="transition duration-150 ease-out hover:opacity-70 active:opacity-40"
                        onClick={signIn}
                        disabled={loading === true ? true : false}
                    >
                        Sign In w/ Google
                    </Button>
                )}
            </header>
        </div>
    )
}

export { Header }
