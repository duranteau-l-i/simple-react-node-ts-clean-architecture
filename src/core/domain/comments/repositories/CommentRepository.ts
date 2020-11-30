interface CommentRepository {
  create(data: object): Promise<void>;
}

export default CommentRepository;
