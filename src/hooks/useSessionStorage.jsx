import { useState } from "react";

export const useSessionStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const storageState = sessionStorage.getItem(key);
        if (storageState) {
            const persistedState = JSON.parse(storageState);
            return persistedState;
        };

        return initialValue;
    });

    const setSessionStorageState = (value) => {
        setState(value);
        sessionStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setSessionStorageState
    ];
};