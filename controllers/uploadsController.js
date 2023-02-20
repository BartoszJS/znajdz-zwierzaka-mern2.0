import { StatusCodes } from "http-status-codes";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadProductImage = async (req, res) => {
  const productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    "../client/public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

export { uploadProductImage };
