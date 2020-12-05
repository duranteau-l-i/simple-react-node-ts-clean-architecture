import Post from "../../domain/posts/entities/Post";

export default class PostLoaderResponse<T extends Post | {} | Post[] | []> {
  constructor(
    private _status: string,
    private _message: string,
    private _data: T
  ) {}

  public get status(): string {
    return this._status;
  }

  public get message(): string {
    return this._message;
  }

  public get data(): T {
    return this._data;
  }
}
