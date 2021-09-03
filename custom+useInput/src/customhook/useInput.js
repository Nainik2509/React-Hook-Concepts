import { useState } from 'react'

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const clearText = () => {
        setValue(initialValue)
    }
    const bindForm = {
        value: 'sample value',
        onChange: e => {
            setValue(e.target.value)
        },
        type: 'password'
    }
    return [value, bindForm, clearText]
}

export default useInput
