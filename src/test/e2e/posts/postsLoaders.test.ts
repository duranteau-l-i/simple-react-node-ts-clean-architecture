import PostsLoader from "../../../core/useCases/posts/PostsLoader";
import Post from "../../../core/domain/posts/entities/Post";
import PostDTO from "../../../core/DTO/PostDTO";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";
import BlogApiPostsRepository from "../../../core/adapters/secondary/posts/REST/BlogApiPostsRepository";

describe("posts", () => {
  it("should be called", async () => {
    // arrange
    const data = [
      new PostDTO(1, "test 1", "typicode"),
      new PostDTO(2, "test 2", "typicode"),
      new PostDTO(3, "test 3", "typicode")
    ];

    let REST: BlogApiPostsRepository = {
      fetchPosts: () => Promise.resolve(data),
      fetchPostById: () => Promise.resolve(data[0]),
      createPost: () => Promise.resolve()
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
    const blogApiPostsRepository = new BlogApiPostsRepository();
    const postsLoader = new PostsLoader(blogApiPostsRepository);

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
