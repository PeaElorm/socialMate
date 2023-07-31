import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
// Grab user feed on home page
router.get("/", verifyToken, getFeedPosts);
// Grab only user's post
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
// Liking and unliking post.
router.patch("/:id/like", verifyToken, likePost);

export default router;
