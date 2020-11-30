import PostBuilder from "../../../../core/useCases/posts/PostBuilder";

export default class StubPostBuilder extends PostBuilder {
  protected _id: number = 1;
  protected _title: string = "title test";
  protected _author: string = "typicode";
}
