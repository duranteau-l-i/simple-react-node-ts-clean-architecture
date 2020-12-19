import PostBuilder from "../../core/useCases/posts/PostBuilder";

export default class StubPostBuilder extends PostBuilder {
  protected _id = 1;
  protected _title = "test 1";
  protected _author = "typicode";
}
