import { Router } from "express";
const router = Router();
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from "../controllers/posts";

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
