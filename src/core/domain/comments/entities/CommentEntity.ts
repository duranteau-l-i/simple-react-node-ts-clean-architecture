class CommentEntity {
  constructor(
    private _id: number,
    private _body: string,
    private _postId: number,
    private _authorId: number
  ) {}

  // public get body(): string {
  //   return this._body;
  // }
  // public get id(): number {
  //   return this._id;
  // }
}
export default CommentEntity;
