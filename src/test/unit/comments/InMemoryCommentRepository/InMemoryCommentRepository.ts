import CommentRepository from "../../../../core/domain/comments/repositories/CommentRepository";
import { ICreateComment } from "../../../../core/useCases/comments/CommentCreator";
import CommentEntity from "../../../../core/domain/comments/entities/CommentEntity";

class InMemoryCommentRepository implements CommentRepository {
  private comments: object[] = [];

  getComments() {
    return this.comments;
  }

  cleanComments() {
    this.comments = [];
  }

  create(data: ICreateComment): Promise<any> {
    this.comments.push(
      new CommentEntity(1, data.body, data.postId, data.authorId)
    );
    return Promise.resolve("ok");
  }
}

export default InMemoryCommentRepository;
