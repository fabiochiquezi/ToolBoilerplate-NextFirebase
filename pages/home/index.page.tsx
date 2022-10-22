import Head from 'next/head'
import { Form } from './Form'
import { List } from './List'
import type { NextPage } from 'next'
import { BtnClear } from './BtnClear'

import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from '../share/structure/Auth/types'
import { StructWrap } from '../share/structure/StructWrap'

const Home: NextPage = () => {
    const { user } = useAuth()

    // async function addToDo() {
    //     const ref = doc(db, 'todo', id)
    //     await setDoc(ref, { list: data }, { merge: true })
    // }

    // async function removeToDo() {
    //     const ref = doc(db, 'todo', id)
    //     await setDoc(ref, { list: data }, { merge: true })
    // }

    // async function updateToDo() {
    //     const ref = doc(db, 'todo', id)
    //     await setDoc(ref, { list: data }, { merge: true })
    // }

    // async function clearAll() {
    //     const ref = doc(db, 'todo', id)
    //     await setDoc(ref, { list: data }, { merge: true })
    // }

    return (
        <div>
            <Head>
                <title>Boilerplate - NextJS / Firebase</title>
                <meta
                    name="description"
                    content="My NextJS / Firebase boilerplate"
                />
            </Head>
            <StructWrap>
                <div className="container">
                    <h1 className="text-5xl text-black font-bold text-center mb-12">
                        SimpleToDo
                    </h1>

                    <Form user={user} />

                    <div className="max-w-[375px] mx-auto flex flex-col">
                        <BtnClear user={user} />
                        <List user={user} />
                    </div>
                </div>
            </StructWrap>
        </div>
    )
}

export default Home
