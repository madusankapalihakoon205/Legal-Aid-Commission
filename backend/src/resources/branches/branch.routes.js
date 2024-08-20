import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote,
} from "./branch.controllers.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getSingleNote).patch(updateNote).delete(deleteNote);

export default router;