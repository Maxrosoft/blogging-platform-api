import express, { Router } from "express";
import APIController from "../controllers/apiController.ts";

const router: Router = express.Router();
const controller: APIController = new APIController();

router.post("/posts", controller.createBlogPost);
router.put("/posts/:id", controller.updateBlogPost);
router.delete("/posts/:id", controller.deleteBlogPost);
router.get("/posts/:id", controller.getBlogPost);
router.get("/posts", controller.getAllBlogPosts);

export default router;
