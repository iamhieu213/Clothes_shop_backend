import { User } from "../../models/index.js"; // <--- Lùi 2 cấp
import { Op } from "sequelize";

export const getAllUsers = async (page = 1, limit = 10, search = "") => {
  const where = search ? {
    [Op.or]: [
      { email: { [Op.iLike]: `%${search}%` } },
      { name: { [Op.iLike]: `%${search}%` } }
    ]
  } : {};

  const { count, rows } = await User.findAndCountAll({
    where, limit: parseInt(limit), offset: (page - 1) * limit,
    order: [['created_at', 'DESC']],
    attributes: { exclude: ['password'] }
  });
  return { total: count, users: rows };
};

export const toggleUserLock = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");
  user.is_locked = !user.is_locked;
  return await user.save();
};

export const changeUserRole = async (id, role) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");
  user.role = role;
  return await user.save();
};

export const deleteUser = async (id) => User.destroy({ where: { id } });