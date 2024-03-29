import PostsLoader from "../../../core/useCases/posts/PostsLoader";
import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "../../stubs/StubPostBuilder";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";
import apiPostsRepository, {
  ApiPostsRepository
} from "../../../core/adapters/secondary/posts/REST/ApiPostsRepository";

describe.skip("posts", () => {
  it("should be called", async () => {
    // arrange
    const data = [
      new StubPostBuilder().id(1).build(),
      new StubPostBuilder().id(2).title("test 2").build(),
      new StubPostBuilder().id(3).title("test 3").build()
    ];

    const REST: ApiPostsRepository = {
      fetchPosts: () => Promise.resolve(data),
      fetchPostById: () => Promise.resolve(data[0]),
      createPost: () => Promise.resolve(data[1])
    };
    const postsLoader = new PostsLoader(REST);

    // act
    const postsExpected = await postsLoader.loadPosts();

    // assert
    expect(postsExpected).toEqual(
      new PostLoaderResponse("success", "", [
        new Post(1, "test 1", "typicode"),
        new Post(2, "test 2", "typicode"),
        new Post(3, "test 3", "typicode")
      ])
    );
  });

  it("should be called", async () => {
    // arrange
    const postsLoader = new PostsLoader(apiPostsRepository);

    // act
    const postsExpected = await postsLoader.loadPosts();

    // assert
    expect(postsExpected).toEqual(
      new PostLoaderResponse("success", "", [
        new Post(1, "json-server", "typicode"),
        new Post(2, "test", "typicode")
      ])
    );
  });
});
