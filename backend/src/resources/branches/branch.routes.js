import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote,
} from "./branch.controllers.js";

const branchRouter = express.Router();

branchRouter.route("/").get(getAllNotes).post(createNote);
branchRouter.route("/:id").get(getSingleNote).patch(updateNote).delete(deleteNote);

export default branchRouter;