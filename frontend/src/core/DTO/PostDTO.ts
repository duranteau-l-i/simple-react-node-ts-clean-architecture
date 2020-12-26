export default class PostDTO {
  constructor(
    private _id: number,
    private _title: string,
    private _author: string
  ) {}

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }
}
