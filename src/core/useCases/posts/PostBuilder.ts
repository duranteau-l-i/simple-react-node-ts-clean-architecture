import Post from "../../domain/posts/entities/Post";

export default class PostBuilder {
  protected _id = 1;
  protected _title = "";
  protected _author = "";

  withId(value: number): PostBuilder {
    this._id = value;
    return this;
  }

  withTitle(value: string): PostBuilder {
    this._title = value;
    return this;
  }

  withAuthor(value: string): PostBuilder {
    this._author = value;
    return this;
  }

  build(): Post {
    return new Post(this._id, this._title, this._author);
  }
}
