import React, {createContext} from 'react';
import App from './App';
import {createRoot} from "react-dom/client";

export const Context = createContext(null)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Context.Provider value={{

    }}>
        <App />
    </Context.Provider>
);
