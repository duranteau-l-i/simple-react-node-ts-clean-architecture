import InMemoryPostsRepository from "../../core/adapters/secondary/InMemory/InMemoryPostsRepository";
import PostDeletor from "../../core/useCases/posts/PostDeletor";
import PostsLoader from "../../core/useCases/posts/PostsLoader";
import StubPostBuilder from "../stubs/StubPostBuilder";
import Post from "../../core/domain/posts/entities/Post";

describe("Update post", () => {
  let postDeletor: PostDeletor;
  let postsLoader: PostsLoader;

  beforeEach(() => {
    const data = [
      new StubPostBuilder().id(1).build(),
      new StubPostBuilder().id(2).title("test 2").build(),
      new StubPostBuilder().id(3).title("test 3").build()
    ];

    const inMemoryPostsRepository = new InMemoryPostsRepository(data);
    postDeletor = new PostDeletor(inMemoryPostsRepository);
    postsLoader = new PostsLoader(inMemoryPostsRepository);
  });

  it("should delete the post by id", () => {
    expect(postDeletor.deletePostById(3)).resolves.toEqual("Post deleted");

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post(1, "test 1", "typicode"),
      new Post(2, "test 2", "typicode")
    ]);
  });

  it("should not delete the post by id", () => {
    expect(postDeletor.deletePostById(5)).rejects.toEqual("Invalid id");

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post(1, "test 1", "typicode"),
      new Post(2, "test 2", "typicode"),
      new Post(3, "test 3", "typicode")
    ]);
  });
});
