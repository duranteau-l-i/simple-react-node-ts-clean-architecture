// export default interface IPost {

//   id: number, title: string, author: string

// }


export default class Post {
  private _id: number;
  private _title: string;
  private _author: string;

  constructor(id: number, title: string, author: string) {
    this._id = id
    this._title = title
    this._author = author
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    if (title.length < 20) {
      this._title = title;
    }
  }

  get author() {
    return this._author;
  }

}
