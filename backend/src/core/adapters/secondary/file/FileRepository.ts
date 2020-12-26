import fs from "fs";
import Post from "../../../domain/posts/entities/Post";
import PostsRepository from "../../../domain/posts/repositories/PostsRepository";

export default class PostsFileRepository {
  constructor(private filePath: string) {}
}
