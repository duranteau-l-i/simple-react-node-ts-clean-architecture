import InMemoryPostsRepository from "./InMemory/InMemoryPostsRepository";
import PostCreator from "../../../core/useCases/posts/PostCreator";
import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "./stubs/StubPostBuilder";
import PostDTO from "../../../core/DTO/PostDTO";

const data = [
  new PostDTO(1, "test 1", "typicode"),
  new PostDTO(2, "test 2", "typicode"),
  new PostDTO(3, "test 3", "typicode")
];

describe("posts", () => {
  const inMemory = new InMemoryPostsRepository();
  const postCreater = new PostCreator(inMemory);

  beforeEach(done => {
    inMemory.setPosts(data);
    done();
  });

  // it("should not create a new post", async () => {
  //   try {
  //     const post = new StubPostBuilder().withId(4).withTitle("").build();

  //     const postExpected = await postCreater.createPost(post);

  //     if (!postExpected) {
  //       throw new Error(postExpected);
  //     }
  //   } catch (e) {
  //     expect(e).toEqual({
  //       status: "failed",
  //       message: "a value is missing",
  //       data: {}
  //     });
  //   }
  // });

  it("should not create a post", async () => {
    const post = new StubPostBuilder().withId(4).withTitle("test 4").build();

    postCreater.createPost(post);

    expect(data).toContainEqual(new PostDTO(4, "test 4", "typicode"));
  });
});
