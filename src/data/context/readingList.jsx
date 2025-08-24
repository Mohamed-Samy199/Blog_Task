import { createContext, useContext, useEffect, useState } from "react";

const ReadingListContext = createContext();

export const ReadingListContextProvider = ({ children }) => {
    const [readingList, setReadingList] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("reading-list")) || [];        
        setReadingList(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("reading-list", JSON.stringify(readingList));
    }, [readingList]);

    const addReadingList = (post) => {
        if (!readingList.find((item) => item.id === post.id)) {
            setReadingList([...readingList, post]);
        }
    };

    const removeReadingList = (postId) => {
        setReadingList(readingList.filter((post) => post.id !== postId));
    };

    return (
        <ReadingListContext.Provider value={{ readingList, addReadingList, removeReadingList }}>
            {children}
        </ReadingListContext.Provider>
    );
};

export const useReadingList = () => useContext(ReadingListContext);
