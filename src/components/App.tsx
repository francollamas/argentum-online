import { Container } from '@pixi/react'
import { Example } from './Example'
import { Stage } from './Stage'

const App = () => {
    return (
        <>
            <Stage
                width={800}
                height={600}
                options={{ backgroundColor: 0x000000 }}
            >
                <Container x={150} y={150}>
                    <Example />
                </Container>
            </Stage>
        </>
    )
}

export default App
