import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostLoader from "../../../core/useCases/posts/PostLoader";
import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";

const data = [
  new StubPostBuilder().id(1).title("test 1").author("typicode").build(),
  new StubPostBuilder().id(2).title("test 2").author("typicode").build(),
  new StubPostBuilder().id(3).title("test 3").author("typicode").build()
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
      new PostLoaderResponse("failed", "get post failed", null)
    );
  });

  it("should get a post", async () => {
    expect.assertions(1);

    expect(postLoader.loadPostById(1)).resolves.toEqual(
      new PostLoaderResponse("success", "", new Post(1, "test 1", "typicode"))
    );
  });
});
