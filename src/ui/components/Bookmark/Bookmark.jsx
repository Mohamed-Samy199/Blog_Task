import { useReadingList } from '../../../data/context/readingList';

export default function Bookmark({ post }) {
    const { readingList, addReadingList, removeReadingList } = useReadingList();
    const isBookmarked = readingList?.some((item) => item.id === post.id);

    return (
        <>
            {
                isBookmarked ?
                    <i className="fa-solid  fa-bookmark text-purple-500 text-2xl cursor-pointer" onClick={() => removeReadingList(post.id)}></i>
                    :
                    <i className="fa-regular fa-bookmark text-purple-500 text-2xl cursor-pointer" onClick={() => addReadingList(post)}></i>
            }
        </>
    )
}
