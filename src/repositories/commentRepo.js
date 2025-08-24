import axios from "axios";
import { hostUrl } from "../domain/host";

class CommentRepository {
    async getCommentByPostId(postId) {
        const { data } = await axios.get(`${hostUrl}/comments?postId=${postId}`);
        return data;
    }
};

export const commentRepository = new CommentRepository();