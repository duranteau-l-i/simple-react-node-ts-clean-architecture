import PostDTO from "../../../core/DTO/PostDTO";
import BlogApiPostsRepository from "../../../core/adapters/secondary/posts/REST/BlogApiPostsRepository";

describe("posts", () => {
  it("should be called", async () => {
    // arrange
    const data = [
      new PostDTO(1, "test 1", "typicode"),
      new PostDTO(2, "test 2", "typicode"),
      new PostDTO(3, "test 3", "typicode")
    ];

    const blogApiPostsRepository = new BlogApiPostsRepository();
    const spy = jest.spyOn(blogApiPostsRepository, "fetchPosts");
    spy.mockImplementation(() => Promise.resolve(data));

    // act
    blogApiPostsRepository.fetchPosts();
    blogApiPostsRepository.fetchPosts();

    // assert
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);

    blogApiPostsRepository.fetchPosts().then(res => {
      expect(res).toEqual([
        new PostDTO(1, "test 1", "typicode"),
        new PostDTO(2, "test 2", "typicode"),
        new PostDTO(3, "test 3", "typicode")
      ]);
    });
  });
});
