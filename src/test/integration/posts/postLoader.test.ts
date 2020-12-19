import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "../../stubs/StubPostBuilder";
import apiPostsRepository from "../../../core/adapters/secondary/posts/REST/ApiPostsRepository";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Get post mock axios", () => {
  it("should be resolved the axios promise", () => {
    const data = new StubPostBuilder().id(1).build();

    const resp = { data };
    mockedAxios.get.mockResolvedValue(resp);

    // mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

    apiPostsRepository.fetchPostById(1).then(res => {
      expect(res).toEqual(new Post(1, "test 1", "typicode"));
    });
  });

  it("should be reject the axios promise", () => {
    mockedAxios.get.mockRejectedValue("rejected");

    // mockedAxios.get.mockImplementation(() => Promise.reject("rejected"));

    apiPostsRepository.fetchPostById(2).catch(error => {
      expect(error).toEqual("rejected");
    });
  });
});
