import repository from "../../../configuration/postDI";
import PostsLoader from "../../../useCases/posts/PostsLoader";
import PostLoader from "../../../useCases/posts/PostLoader";
import PostCreator from "../../../useCases/posts/PostCreator";
import PostUpdater from "../../../useCases/posts/PostUpdater";
import PostDeletor from "../../../useCases/posts/PostDeletor";

export const getPosts = async (req: any, res: any) => {
  try {
    const postsLoader = new PostsLoader(repository);

    const posts = await postsLoader.loadPosts();

    return res.status(200).send({ posts });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

export const getPostById = async (req: any, res: any) => {
  try {
    const postLoader = new PostLoader(repository);

    const post = await postLoader.loadPostById(req.params.id);

    return res.status(200).send({ post });
  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
};

export const createPost = async (req: any, res: any) => {
  try {
    const postCreator = new PostCreator(repository);

    const post = await postCreator.createPost(req.body);

    return res.status(201).send({ post });
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

export const updatePost = async (req: any, res: any) => {
  try {
    const postUpdater = new PostUpdater(repository);

    const post = await postUpdater.updatePostById(req.params.id, req.body);

    return res.status(200).send({ post });
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const deletePost = async (req: any, res: any) => {
  try {
    const postDeletor = new PostDeletor(repository);

    const post = await postDeletor.deletePostById(req.params.id);

    return res.status(200).send({ post });
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};
