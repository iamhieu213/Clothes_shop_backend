export const setUpdatedAtHook = (model) => {
  model.beforeUpdate((instance) => {
    instance.updated_at = new Date();
  });
};