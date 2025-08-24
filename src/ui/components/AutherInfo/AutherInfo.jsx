
export default function AutherInfo({ post }) {
    return (
        <div data-popover id="popover-default" role="tooltip" className="absolute left-1/4 md:left-1/2 top-1 mt-2 w-64 text-sm text-gray-500 transition-all duration-300 bg-white border border-purple-500 rounded-lg shadow opacity-0 invisible peer-hover:opacity-100 peer-hover:visible dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
            <div className="px-3 py-2 bg-gray-100 border-b border-purple-800 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">{post.auther.name}</h3>
            </div>
            <div className="px-3 py-2 text-purple-500">
                <p>Email: {post.auther.email}</p>
                <p className="py-3">Company: {post.auther.company?.name}</p>
                <p>Website: {post.auther.website}</p>
            </div>
            <div data-popper-arrow></div>
        </div>
    )
}
