import Post from "../domain/entities/Post";

export default class PostBuilder {
  protected _id: number = 1;
  protected _title: string = "";
  protected _author: string = "";

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
