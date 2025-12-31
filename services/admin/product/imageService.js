import { uploadImages } from "../../../utils/uploader.js";

export const uploadProductImages = (files = []) =>
  uploadImages(files, "products");

export const uploadVariantImages = (files = []) =>
  uploadImages(files, "product-variants");

export const mergeProductImages = (existing = [], incoming = []) => {
  const current = Array.isArray(existing) ? existing : [];
  return [...current, ...incoming];
};
