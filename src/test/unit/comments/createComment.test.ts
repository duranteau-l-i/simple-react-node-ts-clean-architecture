import CommentCreator from "../../../core/useCases/comments/CommentCreator";
import InMemoryCommentRepository from "./InMemoryCommentRepository/InMemoryCommentRepository";
import CommentEntity from "../../../core/domain/comments/entities/CommentEntity";

describe("Comments", () => {
  const inMemoryCommentRepository = new InMemoryCommentRepository();
  const commentCreator = new CommentCreator(inMemoryCommentRepository);

  beforeEach(() => {
    inMemoryCommentRepository.cleanComments();
  });

  it("should create a comment", () => {
    // act
    commentCreator.createComment({ body: "body", postId: 1, authorId: 1 });
    // assert
    expect(inMemoryCommentRepository.getComments()).toEqual([
      new CommentEntity(1, "body", 1, 1)
    ]);
  });

  it("should create comment when body has minimum size", () => {
    const body = createBody(1);
    const commentWithBodyTooLong = { body: body, postId: 1, authorId: 1 };

    commentCreator.createComment(commentWithBodyTooLong);

    expect(inMemoryCommentRepository.getComments()).toEqual([
      new CommentEntity(1, body, 1, 1)
    ]);
  });

  it("should create comment when body has maximum size", () => {
    const body = createBody(200);
    const commentWithBodyTooLong = { body: body, postId: 1, authorId: 1 };

    commentCreator.createComment(commentWithBodyTooLong);

    expect(inMemoryCommentRepository.getComments()).toEqual([
      new CommentEntity(1, body, 1, 1)
    ]);
  });

  it("should not create comment when body is empty", () => {
    const commentWithoutBody = { body: "", postId: 1, authorId: 1 };

    commentCreator.createComment(commentWithoutBody);

    expect(inMemoryCommentRepository.getComments()).not.toEqual([
      new CommentEntity(1, "", 1, 1)
    ]);
  });

  it("should not create comment when body is empty and throw new Error", async () => {
    const commentWithoutBody = { body: "", postId: 1, authorId: 1 };

    await expect(
      commentCreator.createComment(commentWithoutBody)
    ).rejects.toThrowError("Body should not be empty");
  });

  it("should not create comment when body has more than 200", async () => {
    const body = createBody(201);

    const commentWithoutBody = { body: body, postId: 1, authorId: 1 };

    await expect(
      commentCreator.createComment(commentWithoutBody)
    ).rejects.toThrowError("Body should not contains more than 200");
  });
});

const createBody = (number: number) => {
  let body = "";

  for (let i = 0; i < number; i++) {
    body += "a";
  }

  return body;
};
