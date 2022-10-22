import { useRouter } from 'next/router'
import { FC, ReactElement } from 'react'
import { publicRoutes } from '../../config/routes'

interface props {
    children: ReactElement
}

const PrivateRoute: FC<props> = ({ children }) => {
    const { pathname } = useRouter()
    const isPublic = publicRoutes.includes(pathname)
    const Private = () => <PrivateRoute>{children}</PrivateRoute>
    const Page = isPublic ? children : <Private />

    return Page
}

export { PrivateRoute }
