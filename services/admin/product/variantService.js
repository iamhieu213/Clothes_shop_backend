import {
  createVariantRecord,
  upsertVariantRecord,
  deleteVariantRecord as deleteVariantRecordRepo,
} from "../../../repositories/productVariantRepository.js";
import { uploadVariantImages } from "./imageService.js";

export const createVariantsWithImages = async (
  productId,
  variants,
  files,
  transaction
) => {
  const imageUrls = await uploadVariantImages(files);
  const created = [];

  for (let i = 0; i < variants.length; i++) {
    const variant = {
      ...variants[i],
      image_url: variants[i].image_url || imageUrls[i] || null,
    };

    const record = await createVariantRecord(productId, variant, transaction);
    created.push(record);
  }

  return created;
};

export const upsertVariants = async (
  productId,
  variants = [],
  files = [],
  transaction
) => {
  const imageUrls = await uploadVariantImages(files);

  for (let i = 0; i < variants.length; i++) {
    const variantPayload = {
      ...variants[i],
      image_url: variants[i].image_url || imageUrls[i] || null,
    };

    await upsertVariantRecord(productId, variantPayload, transaction);
  }
};

export const deleteVariantRecord = async (productId, variantId, transaction) => {
  return deleteVariantRecordRepo(productId, variantId, transaction);
};
