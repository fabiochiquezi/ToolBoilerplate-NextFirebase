import React from 'react'
import PlusIcon from '@rsuite/icons/Plus'
import { Input, IconButton } from 'rsuite'

interface props {
    user: any
}

const Form: React.FC<props> = ({ user }) => {
    return user ? (
        <div className="flex justify-center gap-2 mb-8">
            <Input
                placeholder="Make a To Do"
                size="lg"
                className="max-w-[220px]"
            />
            <IconButton icon={<PlusIcon />}>ADD</IconButton>
        </div>
    ) : null
}

export { Form }
