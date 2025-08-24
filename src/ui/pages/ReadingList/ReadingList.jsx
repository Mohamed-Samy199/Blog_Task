import { Link } from "react-router-dom";
import { useReadingList } from "../../../data/context/readingList";
import Heart from "../../components/Heart/Heart";


export default function ReadingList() {
    const { readingList } = useReadingList();

    if (readingList.length === 0) return <p className="text-center my-10">Not thaier any favorite list yet.</p>

    return (
        <section>
            <h2 className="text-center text-purple-500 font-bold my-5 text-4xl">Favorite List</h2>
            {readingList?.map((post) => {
                return (
                    <div
                        key={post.id}
                        className="max-w-sm mx-auto md:max-w-xl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    >
                        <Link to={`/post/${post.id}`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {post.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {post.body}
                            </p>
                            <div className="flex justify-between items-center border-t-2 border-white py-3">
                                <div>
                                    <Heart />
                                </div>
                                <i className="fa-regular fa-comment-dots text-purple-500 text-2xl cursor-pointer"></i>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}
