import InMemoryPostsRepository from "./InMemory/InMemoryPostsRepository";
import PostLoader from "../../core/useCases/PostLoader";
import Post from "../../core/domain/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";

const data = [
  new StubPostBuilder().withId(1).withTitle("test 1").build(),
  new StubPostBuilder().withId(2).withTitle("test 2").build(),
  new StubPostBuilder().withId(3).withTitle("test 3").build()
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
      expect(e.data).toEqual({});
    }
  });

  it("should get a post", async () => {
    const postExpected = await postLoader.loadPostById(1);

    expect(postExpected.data).toEqual(new Post(1, "test 1", "typicode"));
  });
});
