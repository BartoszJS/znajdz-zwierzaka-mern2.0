import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const uploadAnimalImage = async (req, res) => {
  const animalImage = req.files.image;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const imagePath = path.join(
    __dirname,
    '../client/public/uploads/' + `${animalImage.name}`
  );
  await animalImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${animalImage.name}` } });
};

export default uploadAnimalImage;
