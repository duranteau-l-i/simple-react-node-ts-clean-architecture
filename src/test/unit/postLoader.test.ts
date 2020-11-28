import InMemoryPostsRepository from "./InMemory/InMemoryPostsRepository";
import PostLoader from "../../core/useCases/PostLoader";
import Post from "../../core/domain/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";
import PostDTO from "../../core/DTO/PostDTO";
import PostLoaderResponse from "../../core/useCases/PostLoaderResponse";

const data = [
  new PostDTO(1, "test 1", "typicode"),
  new PostDTO(2, "test 2", "typicode"),
  new PostDTO(3, "test 3", "typicode")
];

describe("posts", () => {
  const inMemory = new InMemoryPostsRepository();
  const postLoader = new PostLoader(inMemory);

  beforeEach(done => {
    inMemory.setPosts(data);
    done();
  });

  it("should get an empty object", async () => {
    try {
      const postExpected = await postLoader.loadPostById(10);

      if (!postExpected) {
        throw new Error(postExpected);
      }
    } catch (e) {
      expect(e).toEqual(new PostLoaderResponse("failed", "pas bon", e.data));
    }
  });

  it("should get a post", async () => {
    const postExpected = await postLoader.loadPostById(1);

    expect(postExpected).toEqual(
      new PostLoaderResponse("success", "", new Post(1, "test 1", "typicode"))
    );
  });
});