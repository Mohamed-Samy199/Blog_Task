import axios from "axios";
import { hostUrl } from "../domain/host";

export class UserRepository {
    async getAllUses() {
        const { data } = await axios.get(`${hostUrl}/users`);
        return data;
    };

    async getUserId(id) {
        const { data } = await axios.get(`${hostUrl}/users/${id}`);
        return data;
    }
};

export const userRepository = new UserRepository();