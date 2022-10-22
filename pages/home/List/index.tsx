import React from 'react'

interface props {
    user: any
}

const List: React.FC<props> = ({ user }) => {
    return (
        <ul className="mt-2">
            <li className="flex justify-between bg-gray-100 px-4 py-4 rounded-md mb-4">
                <span className="w-[180px] pt-[2px]">ToDo 01</span>

                {user ? (
                    <div className="flex h-[26px] pt-[2px] gap-2">
                        <button className="transition duration-150 ease-out font-bold text-blue-400 hover:text-blue-500 active:opacity-50">
                            Update
                        </button>
                        <span className="font-bold">|</span>
                        <button className="transition duration-150 ease-out font-bold text-red-400 hover:text-red-500 active:opacity-50">
                            Remove
                        </button>
                    </div>
                ) : null}
            </li>
            <li className="flex justify-between bg-gray-100 px-4 py-4 rounded-md mb-4">
                <span className="w-[180px] pt-[2px]">ToDo 02</span>

                {user ? (
                    <div className="flex h-[26px] pt-[2px] gap-2">
                        <button className="transition duration-150 ease-out font-bold text-blue-400 hover:text-blue-500 active:opacity-50">
                            Update
                        </button>
                        <span className="font-bold">|</span>
                        <button className="transition duration-150 ease-out font-bold text-red-400 hover:text-red-500 active:opacity-50">
                            Remove
                        </button>
                    </div>
                ) : null}
            </li>
            <li className="flex justify-between bg-gray-100 px-4 py-4 rounded-md">
                <span className="w-[180px] pt-[2px]">ToDo 03</span>

                {user ? (
                    <div className="flex h-[26px] pt-[2px] gap-2">
                        <button className="transition duration-150 ease-out font-bold text-blue-400 hover:text-blue-500 active:opacity-50">
                            Update
                        </button>
                        <span className="font-bold">|</span>
                        <button className="transition duration-150 ease-out font-bold text-red-400 hover:text-red-500 active:opacity-50">
                            Remove
                        </button>
                    </div>
                ) : null}
            </li>
        </ul>
    )
}

export { List }
