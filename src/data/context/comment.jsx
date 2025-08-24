import { createContext, useState } from "react";


export const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
    const [newComments, setNewComments] = useState([]);

    return <CommentContext.Provider value={{
        newComments,
        setNewComments
    }}>{children}</CommentContext.Provider>
}