import React from 'react'
import { Button } from 'rsuite'

interface props {
    user: any
}

const BtnClear: React.FC<props> = ({ user }) => {
    return user ? (
        <Button color="red" appearance="subtle" className="self-end">
            Clear List
        </Button>
    ) : null
}

export { BtnClear }
