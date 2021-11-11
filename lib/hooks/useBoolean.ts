import { useState } from 'react';

export const useBoolean = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return [value, setTrue, setFalse] as const;
};