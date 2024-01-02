import { Sprite } from '@pixi/react'
import gold from '../assets/gold.png'
import clothes from '../assets/clothes.png'
import { User, addUser, userSelector } from '../store/slice/userSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect } from 'react'

export const Example = () => {
    const users = useAppSelector(userSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log(users)
    })

    const handleAddUser = () => {
        const newUser: User = {
            id: 'abc',
            name: 'John',
            email: 'john@email.com',
        }

        dispatch(addUser(newUser))
    }

    return (
        <Sprite
            image={users.length % 2 == 0 ? gold : clothes}
            eventMode="static"
            pointerdown={handleAddUser}
        />
    )
}
