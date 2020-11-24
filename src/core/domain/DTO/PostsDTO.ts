import Post from "../entities/Post";

export default class PostsDTO {
  constructor(
    private readonly status: string,
    private readonly message: string,
    private readonly data: Post[]
  ) {}
}
