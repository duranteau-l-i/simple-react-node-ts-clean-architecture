import Post from "../../../core/domain/posts/entities/Post";
import StubPostBuilder from "../../stubs/StubPostBuilder";
import apiPostsRepository from "../../../core/adapters/secondary/posts/REST/ApiPostsRepository";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Create post mock axios", () => {
  it("should be resolved the axios promise", () => {
    const data = new StubPostBuilder().id(4).title("test 4").build();

    const resp = { data };
    mockedAxios.post.mockResolvedValue(resp);

    // mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

    apiPostsRepository
      .createPost({ title: "test 4", author: "typicode" })
      .then(res => {
        expect(res).toEqual(new Post(4, "test 4", "typicode"));
      });
  });

  it("should be reject the axios promise", () => {
    mockedAxios.post.mockRejectedValue("rejected");

    // mockedAxios.get.mockImplementation(() => Promise.reject("rejected"));

    apiPostsRepository
      .createPost({ title: "", author: "typicode" })
      .catch(error => {
        expect(error).toEqual("rejected");
      });
  });
});
