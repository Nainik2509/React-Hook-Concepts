import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useCounter from '../customhook/useCounter'
import { Button, ButtonGroup, Badge } from "reactstrap";

const ComponentA = () => {
    const [count, increment, decrement, reset] = useCounter(10);

    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    ComponentA Counter <Badge color="secondary">{count}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={increment}>
                    increment
        </Button>
                <Button color="dark" onClick={decrement}>
                    decrement
        </Button>
                <Button color="danger" onClick={reset}>
                    reset
        </Button>
            </ButtonGroup>

        </div>
    )
}

export default ComponentA
