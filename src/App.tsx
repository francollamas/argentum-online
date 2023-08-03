import { Container, Stage } from '@pixi/react'
import { Bunny } from './Bunny'

const App = () => {
    return (
        <>
            <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
                <Container x={150} y={150}>
                    <Bunny />
                </Container>
            </Stage>
        </>
    )
}

export default App
