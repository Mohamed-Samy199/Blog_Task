import { useFormik } from "formik";
import { useState } from "react"
import * as yup from "yup"
import { useAddComment } from "../../../data/query/commentQuery";
import { useParams } from "react-router-dom";
import Heart from "../Heart/Heart";
import Bookmark from "../Bookmark/Bookmark";

export default function CommentPopup({ auther, post }) {
    const { postId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const mutation = useAddComment(postId);

    const closeModel = () => setIsOpen(false);
    const toggleModel = () => setIsOpen(!isOpen);

    const initialValues = {
        name: `${auther.name}`,
        email: `${auther.email}`,
        body: "",
        postId: Number(postId)
    };

    const validationSchema = yup.object({
        name: yup.string(),
        email: yup.string().email(),
        body: yup.string()
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            try {
                mutation.mutate(values);
                resetForm();
            } catch (err) {
                console.log(err);
            }
        }
    })

    return (
        <section>
            <div className="flex justify-between items-center border-t-2 border-white py-3">
                <div>
                    <Heart />
                    <Bookmark post={post} />
                </div>
                <i className="fa-regular fa-comment-dots text-purple-500 text-2xl cursor-pointer" onClick={toggleModel}></i>
            </div>
            {
                isOpen &&
                <div id="default-modal" tabindex="-1" className="overflow-y-auto mx-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <form onSubmit={formik.handleSubmit} className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Add Comment
                                </h3>
                                <button type="button" onClick={closeModel} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <div className="my-3">
                                    <input
                                        type="text"
                                        name="body"
                                        value={formik.values.body}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Write a comment..."
                                        className="bg-gray-500 border-gray-300 my-1 rounded-lg w-full p-3 border focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="default-modal" type="submit" className="main-btn">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </section>
    )
}
