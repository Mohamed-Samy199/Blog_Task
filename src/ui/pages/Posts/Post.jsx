// import profile from '../../../assets/profile.webp'
// import { usePosts } from '../../../data/query/postQuery';
// import Comments from "../../components/Comments/Comments";
// import { Link, useNavigate } from "react-router-dom";
// import Heart from '../../components/Heart/Heart';
// import Bookmark from '../../components/Bookmark/Bookmark';
// import { useState } from 'react';
// import NumPostsFilter from '../../components/NumPostsFilter/NumPostsFilter';
// import SearchItems from '../../components/SearchItems/SearchItems';
// import SelectAuther from '../../components/SelectAuther/SelectAuther';
// import { FixedSizeList as List } from "react-window"

// export default function Post() {
//     const { data: posts, isLoading, error } = usePosts();
//     const [itemsSearch, setItemsSearch] = useState('');
//     const [autherId, setAutherId] = useState(null);
//     const route = useNavigate();

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error fetching posts</p>;


//     //const filterPost = posts.filter((post) => post.title.toLowerCase().includes(itemsSearch.toLowerCase())) || [];
//     const filterPost = posts.filter((post) => {
//         const matchSearch = post.title.toLowerCase().includes(itemsSearch.toLowerCase());
//         const matchAuthor = autherId ? post.author.id === autherId : true;
//         return matchSearch && matchAuthor;
//     }) || [];


//     const PostRow = ({ index, style }) => {
//         const post = filterPost[index];
//         return (
//             <div
//                 key={post.id}
//                 style={style}
//                 className="max-w-sm mx-auto md:max-w-xl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//             >
//                 <div className="flex items-center gap-3">
//                     <img src={profile} alt="profile" className="w-[8%]" />
//                     <p className="text-sm text-gray-300 font-bold">
//                         by <span className="font-medium">{post.author?.name}</span>
//                     </p>
//                 </div>
//                 <Link to={`post/${post.id}`}>
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {post.title}
//                     </h5>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                         {post.body}
//                     </p>
//                 </Link>
//                 <div className="flex justify-between items-center border-t-2 border-white py-3">
//                     <div>
//                         <Heart />
//                         <Bookmark post={post} />
//                     </div>

//                     <i className="fa-regular fa-comment-dots text-purple-500 text-2xl cursor-pointer"></i>
//                 </div>
//                 <Comments postId={post.id} limit={2} />
//             </div>
//         )
//     };


//     return (
//         <main>
//             <h1 className="text-center text-purple-500 font-bold my-1 text-4xl">Post App</h1>

//             <div className='max-w-sm mx-auto  md:max-w-xl'>
//                 <SearchItems itemsSearch={itemsSearch} setItemsSearch={setItemsSearch} />
//                 <div className='mb-2 flex justify-between items-center gap-2'>
//                     <button className='main-btn' onClick={() => route("/reading-list")}>move to bookmark</button>
//                     <SelectAuther setAutherId={setAutherId} posts={posts} />
//                     <button className='main-btn' onClick={() => route("/profile")}>move to profile</button>
//                 </div>
//             </div>

//             <List
//                 height={600}
//                 itemCount={filterPost.length}
//                 itemSize={500}
//                 width={"100%"}>
//             {PostRow}
//             </List>

//             <NumPostsFilter filterPost={filterPost.length} />
//         </main>
//     )
// }




import profile from '../../../assets/profile.webp'
import { usePosts } from '../../../data/query/postQuery';
import Comments from "../../components/Comments/Comments";
import { Link, useNavigate } from "react-router-dom";
import Heart from '../../components/Heart/Heart';
import Bookmark from '../../components/Bookmark/Bookmark';
import { useState } from 'react';
import NumPostsFilter from '../../components/NumPostsFilter/NumPostsFilter';
import SearchItems from '../../components/SearchItems/SearchItems';
import SelectAuther from '../../components/SelectAuther/SelectAuther';
import ScrollUp from '../../components/ScrollUp/ScrollUp';

export default function Post() {
    const { data: posts, isLoading, error } = usePosts();
    const [itemsSearch, setItemsSearch] = useState('');
    const [autherId, setAutherId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
    const route = useNavigate();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching posts</p>;

    const filterPost = posts.filter((post) => {
        const matchSearch = post.title.toLowerCase().includes(itemsSearch.toLowerCase());
        const matchAuthor = autherId ? post.author.id === autherId : true;
        return matchSearch && matchAuthor;
    }) || [];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(filterPost.length / postsPerPage);

    return (
        <main>
            <h1 className="text-center text-purple-500 font-bold my-1 text-4xl">Post App</h1>

            <div className='max-w-sm mx-auto md:max-w-xl'>
                <SearchItems itemsSearch={itemsSearch} setItemsSearch={setItemsSearch} />
                <div className='mb-2 flex justify-between items-center gap-2'>
                    <button className='main-btn' onClick={() => route("/reading-list")}>Bookmark</button>
                    <SelectAuther setAutherId={setAutherId} posts={posts} />
                    <button className='main-btn' onClick={() => route("/profile")}>Profile</button>
                </div>
            </div>

            {currentPosts?.map((post) => (
                <div
                    key={post.id}
                    className="max-w-sm mx-auto md:max-w-xl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="flex items-center gap-3">
                        <img src={profile} alt="profile" className="w-[8%]" />
                        <p className="text-sm text-gray-300 font-bold">
                            by <span className="font-medium">{post.author?.name}</span>
                        </p>
                    </div>
                    <Link to={`post/${post.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {post.title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {post.body}
                        </p>
                    </Link>
                    <div className="flex justify-between items-center border-t-2 border-white py-3">
                        <div>
                            <Heart />
                            <Bookmark post={post} />
                        </div>
                        <i className="fa-regular fa-comment-dots text-purple-500 text-2xl cursor-pointer"></i>
                    </div>
                    <Comments postId={post.id} limit={2} />
                </div>
            ))}

            {/* Number of posts */}
            <NumPostsFilter filterPost={filterPost.length} />

            {/* scroll up */}
            <ScrollUp />

            {/* Pagination Btn */}
            {totalPages > 1 && (
                <div className="flex justify-center flex-wrap gap-2 my-4">
                    <button
                        className="main-btn"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-purple-500 text-white " : "bg-gray-200 text-black"}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="main-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </main>
    );
}
