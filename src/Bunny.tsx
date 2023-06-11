import { Sprite, useTick } from '@pixi/react'
import { useReducer, useRef } from 'react'
import bunny from './assets/bunny.png'

const reducer = (_: any, { data }: any) => data

export const Bunny = () => {
    const [motion, update] = useReducer(reducer, {})
    const iter = useRef(0)

    useTick((delta) => {
        const i = (iter.current += 0.05 * delta)

        update({
            type: 'update',
            data: {
                x: Math.sin(i) * 100,
                y: Math.sin(i / 1.5) * 100,
                rotation: Math.sin(i) * Math.PI,
                anchor: Math.sin(i / 2),
            },
        })
    })

    return <Sprite image={bunny} {...motion} />
}
