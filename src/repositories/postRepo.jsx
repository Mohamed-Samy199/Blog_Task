import axios from "axios";
import { hostUrl } from "../domain/host";

class PostRepository {
    async getAllPost() {
        const { data } = await axios.get(`${hostUrl}/posts`);
        return data;
    }

    async getPostById(id) {
        const { data } = await axios.get(`${hostUrl}/posts/${id}`);
        return data;
    }
}
export const postRepository = new PostRepository();