import InMemoryPostsRepository from "./InMemory/InMemoryPostsRepository";
import PostsLoader from "../../core/useCases/PostsLoader";
import StubPostBuilder from "./stubs/StubPostBuilder";
import Post from "../../core/domain/entities/Post";
import PostDTO from "../../core/DTO/PostDTO";
import PostLoaderResponse from "../../core/useCases/PostLoaderResponse";

const data = [
  new PostDTO(1, "test 1", "typicode"),
  new PostDTO(2, "test 2", "typicode"),
  new PostDTO(3, "test 3", "typicode")
];

describe("posts", () => {
  const inMemory = new InMemoryPostsRepository();
  const postsLoader = new PostsLoader(inMemory);

  it("should get an empty array", async () => {
    // arrange
    inMemory.setPosts([]);
    // act
    const postsExpected = await postsLoader.loadPosts();
    // assert
    expect(postsExpected).toEqual(new PostLoaderResponse("success", "", []));
  });

  it("should get a list of posts", async () => {
    // arrange
    inMemory.setPosts(data);
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
