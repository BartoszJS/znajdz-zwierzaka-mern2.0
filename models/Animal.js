import mongoose from "mongoose";

const AnimalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Wprowadź imię"],
      maxlenght: 20,
      trim: true,
    },
    rase: {
      type: String,
      required: [true, 'Wprowadź rase, jeżeli kundel wpisz "kundel"'],
      maxlenght: 30,
      trim: true,
    },
    description: {
      type: String,
      required: [
        true,
        "Wprowadź opis, może to byc kolor, znaki szczególne zwierzaka",
      ],
      maxlenght: 500,
    },
    province: {
      type: String,
      required: [true, "Wybierz województwo"],
      maxlenght: 30,
      enum: [
        "dolnośląskie",
        "kujawsko-pomorskie",
        "lubelskie",
        "lubuskie",
        "łódzkie",
        "małopolskie",
        "mazowieckie",
        "opolskie",
        "podkarpackie",
        "podlaskie",
        "pomorskie",
        "śląskie",
        "świętokrzyskie",
        "warmińsko-mazurskie",
        "wielkopolskie",
        "zachodniopomorskie",
      ],
      default: "mazowieckie",
    },
    city: {
      type: String,
      required: [true, "Wprowadź miasto"],
      maxlenght: 50,
      trim: true,
    },
    dateOfLoss: {
      type: Date,
      required: [true, "Wprowadź date zaginięcia"],
      maxlenght: 50,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Dodaj zdjęcie zwierzaka"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Wprowadź użytkownika"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Animal", AnimalSchema);
