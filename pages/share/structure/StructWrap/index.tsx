import { FC, ReactNode } from 'react'
import { Footer } from '../Footer/Default'
import { Header } from '../Header/Default'

interface props {
    children: ReactNode
}

const StructWrap: FC<props> = ({ children }) => (
    <div>
        <Header />
        <div className="container">{children}</div>
        <Footer />
    </div>
)

export { StructWrap }
