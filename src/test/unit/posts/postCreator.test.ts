import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
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
  let postCreator: PostCreator;
  beforeEach(done => {
    const inMemory = new InMemoryPostsRepository(data);
    postCreator = new PostCreator(inMemory);
    done();
  });

  it("should not create a post", async () => {
    expect(data.length).toEqual(3);

    const post = new StubPostBuilder().withId(4).withTitle("test 4").build();

    postCreator.createPost(post);

    expect(data.length).toEqual(4);
    // expect(data).toEqual(
    //   expect.arrayContaining([
    //     expect.objectContaining(new PostDTO(4, "test 4", "typicode"))
    //   ])
    // );
  });
});
