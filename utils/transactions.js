import { sequelize } from "../models/index.js";

export const withTransaction = async (handler, options = {}) => {
  const run = async (transaction) => handler(transaction);

  if (options && Object.keys(options).length > 0) {
    return sequelize.transaction(options, run);
  }

  return sequelize.transaction(run);
};

