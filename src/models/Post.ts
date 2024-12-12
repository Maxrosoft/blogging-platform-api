import { Schema, model } from "mongoose";

interface IPost {
    title: string;
    content: string;
    category: string;
    tags?: string[];
}

const blogSchema: Schema = new Schema<IPost>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        category: { type: String, required: true },
        tags: [String],
    },
    {
        timestamps: true,
    }
);

export const Post = model<IPost>("Post", blogSchema);

export type { IPost };
