import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios";
import { hostUrl } from "../../domain/host"
import { getCommentsByPostIdUseCase } from "../../usecase/fetchCommentOfPost";
import { useContext } from "react";
import { CommentContext } from "../context/comment";


export const useComments = (postId) => {
    return useQuery({
        queryKey: ["Comments", postId],
        queryFn: () => getCommentsByPostIdUseCase(postId),
        enabled: !!postId
    });
};

export function useAddComment(postId) {
    const { setNewComments } = useContext(CommentContext);
    const queryClient = useQueryClient();


    return useMutation({
        mutationFn: async (newComment) => {
            const { data } = await axios.post(
                `${hostUrl}/posts/${Number(postId)}/comments`,
                { ...newComment, postId: Number(postId) }
            );

            return { ...data, postId: Number(data.postId) };
        },
        onMutate: async (newComment) => {
            await queryClient.cancelQueries(["comments", postId]);

            const previousComments = queryClient.getQueryData(["comments", postId]);

            queryClient.setQueryData(["comments", postId], (old) => [
                ...(old || []),
                { ...newComment, id: Date.now(), postId: Number(postId) },
            ]);

            return { previousComments };
        },
        onError: (err, newComment, context) => {
            queryClient.setQueryData(["comments", postId], context.previousComments);
        },
        onSuccess: (data) => {
            setNewComments((prev) => [...prev, data]);
        },
    });
};