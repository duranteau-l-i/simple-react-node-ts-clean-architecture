import Post from "../../../core/domain/posts/entities/Post";
import apiPostsRepository from "../../../core/adapters/secondary/posts/REST/ApiPostsRepository";

describe("posts", () => {
  it("should be called", async () => {
    // arrange
    const data = [
      new Post(1, "test 1", "typicode"),
      new Post(2, "test 2", "typicode"),
      new Post(3, "test 3", "typicode")
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
        new Post(1, "test 1", "typicode"),
        new Post(2, "test 2", "typicode"),
        new Post(3, "test 3", "typicode")
      ]);
    });
  });
});
