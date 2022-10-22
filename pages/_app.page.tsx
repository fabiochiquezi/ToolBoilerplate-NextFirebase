import './style.css'
import Head from 'next/head'
import 'rsuite/dist/rsuite.min.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { AuthProvider } from './share/structure/Auth'
import { PrivateRoute } from './share/structure/PrivateRoute'

function MyApp({ Component, pageProps }: AppProps) {
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null

    return (
        <div>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image"
                    href="https://img.icons8.com/cute-clipart/64/000000/c.png"
                />
            </Head>
            <AuthProvider>
                <PrivateRoute>
                    <Component {...pageProps} />
                </PrivateRoute>
            </AuthProvider>
        </div>
    )
}

export default MyApp
