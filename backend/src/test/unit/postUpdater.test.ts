import InMemoryPostsRepository from "../../core/adapters/secondary/InMemory/InMemoryPostsRepository";
import PostUpdater from "../../core/useCases/posts/PostUpdater";
import PostsLoader from "../../core/useCases/posts/PostsLoader";
import StubPostBuilder from "../stubs/StubPostBuilder";
import Post from "../../core/domain/posts/entities/Post";

describe("Update post", () => {
  let postUpdater: PostUpdater;
  let postsLoader: PostsLoader;

  beforeEach(() => {
    const data = [
      new StubPostBuilder().id("1").build(),
      new StubPostBuilder().id("2").title("test 2").build(),
      new StubPostBuilder().id("3").title("test 3").build()
    ];

    const inMemoryPostsRepository = new InMemoryPostsRepository(data);
    postUpdater = new PostUpdater(inMemoryPostsRepository);
    postsLoader = new PostsLoader(inMemoryPostsRepository);
  });

  it("should update the post by id", () => {
    expect(
      postUpdater.updatePostById("1", { title: "test 11" })
    ).resolves.toEqual(new Post("1", "test 11", "typicode"));

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post("1", "test 11", "typicode"),
      new Post("2", "test 2", "typicode"),
      new Post("3", "test 3", "typicode")
    ]);
  });

  it("should not update the post by id", () => {
    expect(
      postUpdater.updatePostById("5", { title: "test 55" })
    ).rejects.toEqual(Error("Invalid id"));

    expect(postsLoader.loadPosts()).resolves.toEqual([
      new Post("1", "test 1", "typicode"),
      new Post("2", "test 2", "typicode"),
      new Post("3", "test 3", "typicode")
    ]);
  });

  it("should not update title when title is empty", () => {
    const postWithTitleEmpty = { title: "" };

    expect(postUpdater.updatePostById("1", postWithTitleEmpty)).rejects.toEqual(
      Error("Title should not be empty")
    );
  });

  it("should not update title when title is more than 50", () => {
    const title = newTitle(51);
    const postWithTitleTooLong = { title: title };

    expect(
      postUpdater.updatePostById("1", postWithTitleTooLong)
    ).rejects.toEqual(Error("Title should not contains more than 50"));
  });
});

const newTitle = (number: number) => {
  let title = "";

  for (let i = 0; i < number; i++) {
    title += "a";
  }

  return title;
};
