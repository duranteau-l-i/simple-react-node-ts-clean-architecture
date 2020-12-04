import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostsLoader from "../../../core/useCases/posts/PostsLoader";
import StubPostBuilder from "./stubs/StubPostBuilder";
import Post from "../../../core/domain/posts/entities/Post";
import PostDTO from "../../../core/DTO/PostDTO";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";

const data = [
  new PostDTO(1, "test 1", "typicode"),
  new PostDTO(2, "test 2", "typicode"),
  new PostDTO(3, "test 3", "typicode")
];

describe("posts", () => {
  it("should get an empty array", async () => {
    // arrange
    const inMemory = new InMemoryPostsRepository([]);
    const postsLoader = new PostsLoader(inMemory);
    // act
    const postsExpected = await postsLoader.loadPosts();
    // assert
    expect(postsExpected).toEqual(new PostLoaderResponse("success", "", []));
  });

  it("should get a list of posts", async () => {
    // arrange
    const inMemory = new InMemoryPostsRepository(data);
    const postsLoader = new PostsLoader(inMemory);
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
});
