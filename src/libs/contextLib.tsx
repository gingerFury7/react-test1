import { useContext, createContext, Dispatch, SetStateAction } from "react";

interface IContextProps {
    isAuthenticated: boolean;
    userHasAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as IContextProps);

export function useAppContext() {
    return useContext(AppContext);
}