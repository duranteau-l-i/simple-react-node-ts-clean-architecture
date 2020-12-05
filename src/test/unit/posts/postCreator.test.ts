import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostCreator from "../../../core/useCases/posts/PostCreator";
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
  let postCreator: PostCreator;
  beforeEach(done => {
    const inMemory = new InMemoryPostsRepository(data);
    postCreator = new PostCreator(inMemory);
    done();
  });

  it("should create a new post and add it to the data", async () => {
    expect(data.length).toEqual(3);

    expect(
      postCreator.createPost({ title: "test 4", author: "typicode" })
    ).resolves.toEqual(
      new PostLoaderResponse("success", "", new Post(4, "test 4", "typicode"))
    );

    expect(data.length).toEqual(4);
  });
});
