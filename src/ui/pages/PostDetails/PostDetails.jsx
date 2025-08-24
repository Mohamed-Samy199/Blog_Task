import { useParams } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import profile from '../../../assets/profile.webp'
import AutherInfo from "../../components/AutherInfo/AutherInfo";
import CommentPopup from "../../components/CommentPopup/CommentPopup";
import { usePostId } from "../../../data/query/postQuery";

export default function PostDetails() {
    const { postId } = useParams();
    const { data: post, isLoading, error } = usePostId(Number(postId));

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching posts</p>;

    return (
        <div
            className="max-w-sm relative mx-auto my-12 md:max-w-xl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >


            <div className="flex items-center gap-3 cursor-pointer peer" data-popover-target="popover-default">
                <img src={profile} alt="profile" className="w-[8%]" />
                <p className="text-sm text-gray-300 font-bold">
                    by <span className="font-medium">{post.auther.name}</span>
                </p>
            </div>

            {/*auther info*/}
            <AutherInfo post={post} />
            {/*post content*/}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.post.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.post.body}
            </p>
            {/*add comment*/}
            <CommentPopup auther={post.auther} post={post.post} />
            {/*all commets*/}
            <Comments postId={post.post.id} />
        </div>
    )
}
