import CommentRepository from "../../domain/comments/repositories/CommentRepository";

export interface ICreateComment {
  body: string;
  postId: number;
  authorId: number;
}

class CommentCreator {
  constructor(private repository: CommentRepository) {}

  async createComment(data: ICreateComment): Promise<void> {
    try {
      if (data.body === "") {
        throw new Error("Body should not be empty");
      }

      if (data.body.length > 200) {
        throw new Error("Body should not contains more than 200");
      }

      this.repository.create(data);
    } catch (e) {
      return Promise.reject(e.message);
    }
  }
}

export default CommentCreator;
