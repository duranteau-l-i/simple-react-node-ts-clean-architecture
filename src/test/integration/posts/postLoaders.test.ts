import PostDTO from "../../../core/DTO/PostDTO";
import apiPostsRepository from "../../../core/adapters/secondary/posts/REST/ApiPostsRepository";

describe("posts", () => {
  it("should be called", async () => {
    // arrange
    const data = [
      new PostDTO(1, "test 1", "typicode"),
      new PostDTO(2, "test 2", "typicode"),
      new PostDTO(3, "test 3", "typicode")
    ];

    const spy = jest.spyOn(apiPostsRepository, "fetchPosts");
    spy.mockImplementation(() => Promise.resolve(data));

    // act
    apiPostsRepository.fetchPosts();
    apiPostsRepository.fetchPosts();

    // assert
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);

    apiPostsRepository.fetchPosts().then(res => {
      expect(res).toEqual([
        new PostDTO(1, "test 1", "typicode"),
        new PostDTO(2, "test 2", "typicode"),
        new PostDTO(3, "test 3", "typicode")
      ]);
    });
  });
});
