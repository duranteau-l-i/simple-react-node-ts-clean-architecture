import InMemoryPostsRepository from "../adapters/secondary/InMemory/InMemoryPostsRepository";
import PostBuilder from "../useCases/posts/Post.builder";

const data = [
  new PostBuilder().id("1").build(),
  new PostBuilder().id("2").title("test 2").build(),
  new PostBuilder().id("3").title("test 3").build()
];
const inMemoryPostsRepository = new InMemoryPostsRepository(data);

const repository = inMemoryPostsRepository;

export default repository;
