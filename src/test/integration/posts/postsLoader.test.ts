import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "../../stubs/StubPostBuilder";
import apiPostsRepository from "../../../core/adapters/secondary/posts/REST/ApiPostsRepository";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

// mock axios version
describe("Get posts mock axios", () => {
  it("should be resolved the axios promise", () => {
    const data = [
      new StubPostBuilder().id(1).build(),
      new StubPostBuilder().id(2).title("test 2").build(),
      new StubPostBuilder().id(3).title("test 3").build()
    ];

    const resp = { data };
    mockedAxios.get.mockResolvedValue(resp);

    // mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

    apiPostsRepository.fetchPosts().then(res => {
      expect(res).toEqual([
        new Post(1, "test 1", "typicode"),
        new Post(2, "test 2", "typicode"),
        new Post(3, "test 3", "typicode")
      ]);
    });
  });

  it("should be reject the axios promise", () => {
    mockedAxios.get.mockRejectedValue("rejected");

    // mockedAxios.get.mockImplementation(() => Promise.reject("rejected"));

    apiPostsRepository.fetchPosts().catch(error => {
      expect(error).toEqual("rejected");
    });
  });
});

// spy api version
// describe("Get posts", () => {
//   it("should be called", async () => {
//     // arrange
//     const data = [
//       new Post(1, "test 1", "typicode"),
//       new Post(2, "test 2", "typicode"),
//       new Post(3, "test 3", "typicode")
//     ];

//     const spy = jest.spyOn(apiPostsRepository, "fetchPosts");
//     spy.mockImplementation(() => Promise.resolve(data));

//     // act
//     apiPostsRepository.fetchPosts();
//     apiPostsRepository.fetchPosts();

//     // assert
//     expect(spy).toHaveBeenCalled();
//     expect(spy).toHaveBeenCalledTimes(2);

//     apiPostsRepository.fetchPosts().then(res => {
//       expect(res).toEqual([
//         new Post(1, "test 1", "typicode"),
//         new Post(2, "test 2", "typicode"),
//         new Post(3, "test 3", "typicode")
//       ]);
//     });
//   });
// });
