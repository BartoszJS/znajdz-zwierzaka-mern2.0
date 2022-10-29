import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register = async (req, res, next) => {
  try {
    const { name, surname, phoneNumber, email, password } = req.body;
    if (!name || !surname || !email || !password || !phoneNumber) {
      throw new BadRequestError('Wprowadź wszystkie dane(authController)');
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      throw new BadRequestError('Email jest zajęty(authController)');
    }
    const user = await User.create({
      name,
      surname,
      phoneNumber,
      email,
      password,
    });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      user: {
        name: user.name,
        surname: user.surname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new BadRequestError('Wprowadź wszystkie dane(a-c)');
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new UnAuthenticatedError('Nieprawidłowe dane(a-c)');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError('Nieprawidłowe dane(a-c)');
    }
    const token = user.createJWT();

    user.password = undefined;

    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { email, name, surname, phoneNumber } = req.body;
    if (!email || !name || !surname || !phoneNumber) {
      throw new BadRequestError('Wprowadź wszystkie dane(a-c)');
    }
    const user = await User.findOne({ _id: req.user.userId });

    user.email = email;
    user.name = name;
    user.surname = surname;
    user.phoneNumber = phoneNumber;

    await user.save();

    const token = user.createJWT();

    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    next(error);
  }
};

export { register, login, updateUser };
