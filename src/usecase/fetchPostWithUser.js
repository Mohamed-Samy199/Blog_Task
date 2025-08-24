import { postRepository } from "../repositories/postRepo"
import { userRepository } from "../repositories/userRepo"


export const getPostWithAutherYsecase = async () => {
  const [posts, users] = await Promise.all([
    postRepository.getAllPost(),
    userRepository.getAllUses(),
  ]);

  return posts.map((post) => {
    const author = users.find((user) => user.id === post.userId);
    return { ...post, author };
  });
};

export const getPostByIdWithAutherusecase = async (postId) => {
  const [post, users] = await Promise.all([
    postRepository.getPostById(postId),
    userRepository.getAllUses(),
  ]);

  const auther = users.find((user) => user.id === post.userId);
  return { post, auther };
};