import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostLoader from "../../../core/useCases/posts/PostLoader";
import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";
import PostDTO from "../../../core/DTO/PostDTO";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";

const data = [
  new PostDTO(1, "test 1", "typicode"),
  new PostDTO(2, "test 2", "typicode"),
  new PostDTO(3, "test 3", "typicode")
];

describe("posts", () => {
  let postLoader: PostLoader;
  beforeEach(done => {
    const inMemory = new InMemoryPostsRepository(data);
    postLoader = new PostLoader(inMemory);
    done();
  });

  it("should get an empty object", async () => {
    expect.assertions(1);

    expect(postLoader.loadPostById(10)).rejects.toEqual(
      new PostLoaderResponse("failed", "get post failed", {})
    );
  });

  it("should get a post", async () => {
    expect.assertions(1);

    expect(postLoader.loadPostById(1)).resolves.toEqual(
      new PostLoaderResponse("success", "", new Post(1, "test 1", "typicode"))
    );
  });
});
