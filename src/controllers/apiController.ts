import { error } from "console";
import { Post, IPost } from "../models/Post.ts";
import { Request, Response } from "express";
import mongoose from "mongoose";

class APIController {
    async createBlogPost(req: Request, res: Response): Promise<void> {
        try {
            const newPost: IPost = req.body;
            const createdPost = await Post.create(newPost);
            res.status(201).json(createdPost);
        } catch (error) {
            console.error("Error creating blog post:", error);
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).json({ error: "Validation error" });
            }
            res.status(500).json({ error: "Failed to create blog post" });
        }
    }

    async updateBlogPost(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            const newPost: IPost = req.body;

            const updatablePost: IPost | null = await Post.findByIdAndUpdate(
                id,
                newPost
            );

            if (!updatablePost) {
                throw new mongoose.Error.DocumentNotFoundError(
                    "Post not found"
                );
            }

            const updatedPost: IPost | null = await Post.findById(id);
            res.status(200).json(updatedPost);
        } catch (error) {
            console.error("Error updating blog post:", error);
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).json({ error: "Validation error" });
            } else if (error instanceof mongoose.Error.DocumentNotFoundError) {
                res.status(404).json({ error: "Post not found" });
            }
            res.status(500).json({ error: "Failed to update blog post" });
        }
    }

    async deleteBlogPost(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;

            const deletablePost: IPost | null = await Post.findByIdAndDelete(
                id
            );

            if (!deletablePost) {
                throw new mongoose.Error.DocumentNotFoundError(
                    "Post not found"
                );
            }

            res.status(204).end();
        } catch (error) {
            console.error("Error deleting blog post:", error);
            if (error instanceof mongoose.Error.DocumentNotFoundError) {
                res.status(404).json({ error: "Post not found" });
            }
            res.status(500).json({ error: "Failed to delete blog post" });
        }
    }

    async getBlogPost(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;

            const post: IPost | null = await Post.findById(id);

            if (!post) {
                throw new mongoose.Error.DocumentNotFoundError(
                    "Post not found"
                );
            }

            res.status(200).json(post);
        } catch (error) {
            console.error("Error getting blog post:", error);
            if (error instanceof mongoose.Error.DocumentNotFoundError) {
                res.status(404).json({ error: "Post not found" });
            }
            res.status(500).json({ error: "Failed to get blog post" });
        }
    }

    async getAllBlogPosts(req: Request, res: Response): Promise<void> {
        try {
            let posts: IPost[];
            const term: any = req.query.term;

            if (typeof term === "string") {
                const containsTermRegExp: RegExp = new RegExp(`${term}`);

                posts = await Post.find({
                    $or: [
                        { title: containsTermRegExp },
                        { content: containsTermRegExp },
                        { category: containsTermRegExp },
                        { tags: term },
                    ],
                });
                res.status(200).json(posts);
            } else {
                throw new mongoose.Error.ValidationError();
            }
        } catch (error) {
            console.error("Error getting all blog posts:", error);
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).json({ error: "Validation error" });
            }
            res.status(500).json({ error: "Failed to get all blog posts" });
        }
    }
}

export default APIController;
