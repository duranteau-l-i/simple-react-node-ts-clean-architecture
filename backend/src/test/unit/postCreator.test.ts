import InMemoryPostsRepository from "../../core/adapters/secondary/InMemory/InMemoryPostsRepository";
import PostCreator from "../../core/useCases/posts/PostCreator";
import PostsLoader from "../../core/useCases/posts/PostsLoader";
import StubPostBuilder from "../stubs/StubPostBuilder";
import Post from "../../core/domain/posts/entities/Post";

describe("Update post", () => {
  let postCreator: PostCreator;
  let postsLoader: PostsLoader;

  beforeEach(() => {
    const data = [
      new StubPostBuilder().id(1).build(),
      new StubPostBuilder().id(2).title("test 2").build(),
      new StubPostBuilder().id(3).title("test 3").build()
    ];

    const inMemoryPostsRepository = new InMemoryPostsRepository(data);
    postCreator = new PostCreator(inMemoryPostsRepository);
    postsLoader = new PostsLoader(inMemoryPostsRepository);
  });

  it("should create a post", () => {
    expect(
      postCreator.createPost({ title: "test 4", author: "typicode" })
    ).resolves.toEqual(new Post(4, "test 4", "typicode"));

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post(1, "test 1", "typicode"),
      new Post(2, "test 2", "typicode"),
      new Post(3, "test 3", "typicode"),
      new Post(4, "test 4", "typicode")
    ]);
  });

  it("should create post when title has minimum size", () => {
    const title = createTitle(1);
    const postWithTitleMinimumSize = { title: title, author: "typicode" };

    expect(postCreator.createPost(postWithTitleMinimumSize)).resolves.toEqual(
      new Post(4, "a", "typicode")
    );

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post(1, "test 1", "typicode"),
      new Post(2, "test 2", "typicode"),
      new Post(3, "test 3", "typicode"),
      new Post(4, "a", "typicode")
    ]);
  });

  it("should not create post when title is empty", () => {
    expect(
      postCreator.createPost({ title: "", author: "typicode" })
    ).rejects.toEqual(Error("Title should not be empty"));
  });

  it("should not create post when title is more than 50", () => {
    const title = createTitle(51);

    expect(
      postCreator.createPost({ title, author: "typicode" })
    ).rejects.toEqual(Error("Title should not contains more than 50"));
  });

  it("should not create post when author is missing", () => {
    const title = createTitle(10);

    expect(postCreator.createPost({ title, author: "" })).rejects.toEqual(
      Error("The post must have an author")
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
