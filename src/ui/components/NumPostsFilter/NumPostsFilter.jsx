
export default function NumPostsFilter({filterPost}) {
    return (
        <div title="number of posts" className="bg-purple-700 text-white p-3 text-sm  md:p-7 w-4 h-4 flex justify-center items-center rounded-full border-2 border-purple-300 fixed bottom-3 left-1 md:left-1/4 z-30">
            {filterPost}
        </div>
    )
}
