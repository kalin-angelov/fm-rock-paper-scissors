import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const storageState = localStorage.getItem(key);
        if (storageState) {
            const persistedState = JSON.parse(storageState);
            return persistedState;
        };

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState
    ];
};