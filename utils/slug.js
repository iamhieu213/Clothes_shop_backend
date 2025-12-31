export const slugify = (value = "") => {
  if (!value) return "";

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export const buildSlugWithFallback = (value, fallback = "uncategorized") => {
  const base = slugify(value);
  return base || fallback;
};
