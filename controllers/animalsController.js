import { StatusCodes } from "http-status-codes";
import Animal from "../models/Animal.js";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

const createAnimal = async (req, res) => {
  const { name, rase } = req.body;
  if (!name || !rase) {
    throw new BadRequestError("Wprowadź wszystkie dane(a-c)");
  }
  req.body.createdBy = req.user.userId;
  const animal = await Animal.create(req.body);
  res.status(StatusCodes.CREATED).json({ animal });
};
const getAllAnimals = async (req, res) => {
  const { city, sort, province } = req.query;

  const queryObject = {};
  if (province && province !== "Wszystkie") {
    queryObject.province = province;
  }

  if (city) {
    queryObject.city = { $regex: city, $options: "i" };
  }

  let result = Animal.find(queryObject);

  if (sort === "Najnowsze") {
    result = result.sort("-createdAt");
  }
  if (sort === "Najstarsze") {
    result = result.sort("createdAt");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const animals = await result;

  const totalAnimals = await Animal.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalAnimals / limit);

  res.status(StatusCodes.OK).json({ animals, totalAnimals, numOfPages });
};

const getAnimalsLanding = async (req, res) => {
  const queryObject = {};
  let result = Animal.find(queryObject);

  result = result.sort("-createdAt");
  //animals = animals.sort('-createdAt');

  result = result.limit(6);

  const animals = await result;

  res.status(StatusCodes.OK).json({ animals, totalAnimals: 6, numOfPages: 1 });
};

const getAllUserAnimals = async (req, res) => {
  const animals = await Animal.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ animals, totalAnimals: animals.length, numOfPages: 1 });
};
const getAnimal = async (req, res) => {
  const { id: animalId } = req.params;
  const animal = await Animal.find({ _id: animalId });

  if (!animal) {
    throw new NotFoundError(`Brak zwierzęcia o takim id`);
  }

  res.status(StatusCodes.OK).json({ animal });
};
const updateAnimal = async (req, res) => {
  const { id: animalId } = req.params;

  const { name, rase } = req.body;
  if (!name || !rase) {
    throw new BadRequestError("Wprowadź wszystkie dane(a-c)");
  }
  const animal = await Animal.findOne({ _id: animalId });

  if (!animal) {
    throw new NotFoundError(`Brak zwierzęcia o takim id`);
  }

  checkPermissions(req.user, animal.createdBy);

  const updatedAnimal = await Animal.findOneAndUpdate(
    { _id: animalId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ updatedAnimal });
};
const deleteAnimal = async (req, res) => {
  const { id: animalId } = req.params;

  const animal = await Animal.findOne({ _id: animalId });

  if (!animal) {
    throw new NotFoundError(`Brak zwierzęcia o takim id`);
  }

  checkPermissions(req.user, animal.createdBy);

  await animal.remove();
  res.status(StatusCodes.OK).json({ msg: "Zwierze usunięte" });
};

export {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  getAllUserAnimals,
  updateAnimal,
  getAnimal,
  getAnimalsLanding,
};
