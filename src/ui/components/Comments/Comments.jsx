import { useContext } from 'react';
import profile from '../../../assets/profile.webp'
import { useComments } from '../../../data/query/commentQuery'
import { CommentContext } from '../../../data/context/comment';

export default function Comments({ postId, limit }) {
    const { data: comments, isLoading, error } = useComments(postId);
    const { newComments } = useContext(CommentContext);

    if (isLoading) return <p className="text-sm text-gray-400">Loading comments...</p>;
    if (error) return <p className="text-sm text-red-500">Error loading comments</p>;


    const displayComments = limit ? comments?.slice(0, limit) : comments;

    return (
        <ul className="mt-2 space-y-2">
            {newComments && newComments?.map((comment) => (
                <li key={comment.id} className="p-3 border rounded-md bg-gray-50 dark:bg-gray-700">
                    <div className="flex items-center gap-3">
                        <img src={profile} alt="profile" className="w-[7%] border-2 border-purple-300 rounded-full p-1" />
                        <p className="text-sm font-semibold">{comment.name} ({comment.email})</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{comment.body}</p>
                </li>
            ))}

            {displayComments?.map((comment) => (
                <li key={comment.id} className="p-3 border rounded-md bg-gray-50 dark:bg-gray-700">
                    <div className="flex items-center gap-3">
                        <img src={profile} alt="profile" className="w-[7%] border-2 border-purple-300 rounded-full p-1" />
                        <p className="text-sm font-semibold">{comment.name} ({comment.email})</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
