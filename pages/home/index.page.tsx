import * as yup from 'yup'
import Head from 'next/head'
import { Button } from 'rsuite'
import type { NextPage } from 'next'
import { db } from '../firebase.config'
import PlusIcon from '@rsuite/icons/Plus'
import { Input, IconButton } from 'rsuite'
import { Struct } from '../structure/Struct'
import { useAuth } from '../structure/Auth/types'
import React, { useEffect, useState } from 'react'
import {
    collection,
    doc,
    DocumentData,
    getDoc,
    setDoc
} from 'firebase/firestore'

type toDoT = { value: string }

const Home: NextPage = () => {
    const { user } = useAuth()
    const [toDoList, setToDoList] = useState<toDoT[]>([])
    const [toDo, setToDo] = useState('')
    const [loading, setLoading] = useState(false)

    const validation = yup.object().shape({
        value: yup.string().required('Required')
    })

    useEffect(() => {
        list()
    }, [])

    async function add() {
        try {
            const newToDo: toDoT = { value: toDo }
            const newList = { list: [...toDoList, newToDo] }
            const isValid = await validation.isValid(newToDo)
            if (!isValid) return
            setLoading(true)
            setToDoList([...toDoList, newToDo])
            const todoRef = collection(db, 'todo')
            await setDoc(doc(todoRef, 'list'), newList)
        } catch (e) {
            alert('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    async function list() {
        const docRef = doc(db, 'todo', 'list')
        const docSnap = await getDoc(docRef)
        const data = docSnap.data() as DocumentData
        const list = data.list as toDoT[]
        setToDoList(list)
    }

    async function remove() {
        try {
            setLoading(true)
            setToDoList([])
            const newList = { list: [] }
            const todoRef = collection(db, 'todo')
            await setDoc(doc(todoRef, 'list'), newList)
        } catch (e) {
            alert('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <Head>
                <title>Boilerplate - NextJS / Firebase</title>
                <meta
                    name="description"
                    content="My NextJS / Firebase boilerplate"
                />
            </Head>
            <Struct>
                <div className="container">
                    <h1 className="text-5xl text-black font-bold text-center mb-12">
                        SimpleToDo
                    </h1>
                    {!user && (
                        <p className="text-center text-lg">
                            Sign In to build ToDo's
                        </p>
                    )}
                    {user && (
                        <div className="flex justify-center gap-2 mb-8">
                            <Input
                                placeholder="Make a To Do"
                                size="lg"
                                className="max-w-[220px]"
                                onChange={e => setToDo(e)}
                                value={toDo}
                            />
                            <IconButton
                                onClick={add}
                                icon={<PlusIcon />}
                                loading={loading ? true : false}
                                disabled={loading ? true : false}
                            >
                                ADD
                            </IconButton>
                        </div>
                    )}
                    <div className="max-w-[375px] mx-auto flex flex-col">
                        {user && toDoList.length !== 0 && (
                            <Button
                                color="red"
                                appearance="subtle"
                                className="self-end"
                                onClick={remove}
                            >
                                Clear List
                            </Button>
                        )}
                        {user && toDoList.length === 0 && (
                            <p className="text-center text-lg">
                                Add ToDo's to your list!
                            </p>
                        )}
                        <ul className="mt-2">
                            {toDoList.map((el: any, index: number) => (
                                <li
                                    key={index}
                                    className="flex justify-between bg-gray-100 px-4 py-4 rounded-md mb-4"
                                >
                                    <span className="w-[180px] pt-[2px]">
                                        {el.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Struct>
        </div>
    )
}

export default Home
