import Post from "../../domain/posts/entities/Post";

export default class PostBuilder {
  protected _id = 1;
  protected _title = "text 1";
  protected _author = "typicode";

  id(value: number): PostBuilder {
    this._id = value;
    return this;
  }

  title(value: string): PostBuilder {
    this._title = value;
    return this;
  }

  author(value: string): PostBuilder {
    this._author = value;
    return this;
  }

  build(): Post {
    return new Post(this._id, this._title, this._author);
  }
}
