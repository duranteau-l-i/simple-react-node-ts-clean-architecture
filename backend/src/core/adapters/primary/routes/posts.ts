import { Router } from "express";
const router = Router();

router.get("/", function (req, res, next) {
  console.log("posts route");
  res.json({ title: "test" });
});

export default router;
