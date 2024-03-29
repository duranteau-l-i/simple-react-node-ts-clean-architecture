import InMemoryPostsRepository from "../../../core/adapters/secondary/posts/InMemory/InMemoryPostsRepository";
import PostCreator from "../../../core/useCases/posts/PostCreator";
import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "../../stubs/StubPostBuilder";
import PostLoaderResponse from "../../../core/useCases/posts/PostLoaderResponse";

const data = [
  new StubPostBuilder().id(1).build(),
  new StubPostBuilder().id(2).title("test 2").build(),
  new StubPostBuilder().id(3).title("test 3").build()
];

describe("Create post", () => {
  let postCreator: PostCreator;
  let inMemory: InMemoryPostsRepository;
  beforeEach(done => {
    inMemory = new InMemoryPostsRepository(data);
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

  it("should create post when title has minimum size", () => {
    const title = createTitle(1);
    const postWithTitleMinimumSize = { title: title, author: "typicode" };

    expect(postCreator.createPost(postWithTitleMinimumSize)).resolves.toEqual(
      new PostLoaderResponse("success", "", new Post(5, "a", "typicode"))
    );
  });

  it("should create title when title has maximum size", () => {
    const title = createTitle(50);
    const postWithTitleMaximumSize = { title: title, author: "typicode" };

    expect(postCreator.createPost(postWithTitleMaximumSize)).resolves.toEqual(
      new PostLoaderResponse(
        "success",
        "",
        new Post(
          6,
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          "typicode"
        )
      )
    );
  });

  it("should not create post when title is empty", () => {
    const postWithTitleEmpty = { title: "", author: "typicode" };

    expect(postCreator.createPost(postWithTitleEmpty)).rejects.toEqual(
      new PostLoaderResponse("failed", "Title should not be empty", null)
    );
  });

  it("should not create post when title is more than 50", () => {
    const title = createTitle(51);
    const postWithTitleTooLong = { title: title, author: "typicode" };

    expect(postCreator.createPost(postWithTitleTooLong)).rejects.toEqual(
      new PostLoaderResponse(
        "failed",
        "Title should not contains more than 50",
        null
      )
    );
  });
});

const createTitle = (number: number) => {
  let title = "";

  for (let i = 0; i < number; i++) {
    title += "a";
  }

  return title;
};
