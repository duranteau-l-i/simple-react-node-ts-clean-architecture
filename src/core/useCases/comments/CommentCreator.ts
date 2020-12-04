import CommentRepository from "../../domain/comments/repositories/CommentRepository";

export interface ICreateComment {
  body: string;
  postId: number;
  authorId: number;
}

class CommentCreator {
  constructor(private repository: CommentRepository) {}

  async createComment(data: ICreateComment) {
    try {
      if (data.body === "") {
        return Promise.reject("Body should not be empty");
      }

      if (data.body.length > 200) {
        return Promise.reject("Body should not contains more than 200");
      }

      this.repository.create(data);
    } catch (e) {
      Promise.reject(e);
    }
  }
}

export default CommentCreator;
