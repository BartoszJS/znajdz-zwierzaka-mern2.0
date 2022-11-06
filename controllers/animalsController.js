import { StatusCodes } from 'http-status-codes';
import Animal from '../models/Animal.js';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const createAnimal = async (req, res) => {
  const { name, rase } = req.body;
  if (!name || !rase) {
    throw new BadRequestError('Wprowadź wszystkie dane(a-c)');
  }
  req.body.createdBy = req.user.userId;
  const animal = await Animal.create(req.body);
  res.status(StatusCodes.CREATED).json({ animal });
};
const getAllAnimals = async (req, res) => {
  const animals = await Animal.find({});

  res
    .status(StatusCodes.OK)
    .json({ animals, totalAnimals: animals.length, numOfPages: 1 });
};
const getAllUserAnimals = async (req, res) => {
  const animals = await Animal.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ animals, totalAnimals: animals.length, numOfPages: 1 });
};
const getAnimal = async (req, res) => {
  res.send('get animal');
};
const updateAnimal = async (req, res) => {
  res.send('update animal');
};
const deleteAnimal = async (req, res) => {
  res.send('delete animal');
};

export {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  getAllUserAnimals,
  updateAnimal,
  getAnimal,
};
