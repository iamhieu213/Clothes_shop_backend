import cloudinary from "../config/cloundinary.config.js";

export const uploadImages = async (files = [], folder = "uploads") => {
  if (!files || files.length === 0) return [];

  const uploads = files.map((file) =>
    cloudinary.uploader.upload(file.path, { folder })
  );

  const results = await Promise.all(uploads);
  return results.map((result) => result.secure_url);
};

export const uploadSingleImage = async (file, folder = "uploads") => {
  if (!file) return null;
  const [url] = await uploadImages([file], folder);
  return url || null;
};
