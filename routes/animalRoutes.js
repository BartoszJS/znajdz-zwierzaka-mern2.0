import express from "express";
const router = express.Router();

import {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  getAnimalsLanding,
  getAllUserAnimals,
  updateAnimal,
  getAnimal,
} from "../controllers/animalsController.js";
import { uploadProductImage } from "../controllers/uploadsController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/").post(authenticateUser, createAnimal);
router.route("/uploads").post(uploadProductImage);
router.route("/").get(getAnimalsLanding);
router.route("/wszystkie-zwierzaki").get(getAllAnimals);
router.route("/profile").get(authenticateUser, getAllUserAnimals);

router.route("/:id").get(getAnimal);
router.route("/:id").delete(authenticateUser, deleteAnimal);
router.route("/:id").patch(authenticateUser, updateAnimal);

export default router;
