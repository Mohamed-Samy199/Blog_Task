import { useQuery } from "@tanstack/react-query"
import { getPostByIdWithAutherusecase, getPostWithAutherYsecase } from "../../usecase/fetchPostWithUser"


export const usePosts = () => {
    return useQuery({
        queryKey: ['Posts'],
        queryFn: getPostWithAutherYsecase
    })
};

export const usePostId = (postId) => {    
    return useQuery({
        queryKey: ['PostId'],
        queryFn: ()=> getPostByIdWithAutherusecase(postId),
        enabled: !!postId
    })
};