import type { NextPage } from 'next'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: gray;
`

const Home: NextPage = () => {
    return (
        <div>
            <p className="text-2xl text-blue-600">Test</p>
            <Title>My page</Title>
        </div>
    )
}

export default Home
