import { useState } from 'react'

function useInput() {
    const [value, setValue] = useState('');
    const onChange = (event) => setValue(event.target.value);
    const reset = () => {
        setValue('');
    };

    return [value, onChange, reset];
}

export default useInput;