import express from 'express';
const router = express.Router();

import {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  updateAnimal,
  getAnimal,
} from '../controllers/animalsController.js';
import uploadAnimalImage from '../controllers/uploadController.js';
import authenticateUser from '../middleware/auth.js';

router.route('/').post(authenticateUser, createAnimal);
router.route('/uploads').post(uploadAnimalImage);
router.route('/').get(getAllAnimals);

router.route('/:id').get(getAnimal);
router.route('/:id').delete(authenticateUser, deleteAnimal);
router.route('/:id').patch(authenticateUser, updateAnimal);

export default router;
