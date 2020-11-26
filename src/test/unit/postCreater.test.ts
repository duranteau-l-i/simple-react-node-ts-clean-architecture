import InMemoryPostsRepository from "./InMemory/InMemoryPostsRepository";
import PostCreater from "../../core/useCases/PostCreater";
import Post from "../../core/domain/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";

const data = [
  new StubPostBuilder().withId(1).withTitle("test 1").build(),
  new StubPostBuilder().withId(2).withTitle("test 2").build(),
  new StubPostBuilder().withId(3).withTitle("test 3").build()
];

describe("posts", () => {
  const inMemory = new InMemoryPostsRepository();
  const postCreater = new PostCreater(inMemory);

  beforeEach(done => {
    inMemory.setPosts(data);
    done();
  });

  it("should not create a new post", async () => {
    try {
      const post = new StubPostBuilder().withId(4).withTitle("").build();

      const postExpected = await postCreater.createPost(post);

      if (!postExpected) {
        throw new Error(postExpected);
      }
    } catch (e) {
      expect(e).toEqual({
        status: "failed",
        message: "a value is missing",
        data: {}
      });
    }
  });

  it("should not create a post", async () => {
    try {
      const post = new StubPostBuilder().withId(4).withTitle("test 4").build();

      const postExpected = await postCreater.createPost(post);

      expect(postExpected.data).toEqual(new Post(4, "test 4", "typicode"));
    } catch (e) {
      console.log(e);
    }
  });
});
