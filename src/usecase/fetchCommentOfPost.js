import { commentRepository } from "../repositories/commentRepo"

export const getCommentsByPostIdUseCase  = (postId) => {
    return commentRepository.getCommentByPostId(postId);
};