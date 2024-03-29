import User from "../models/UsersModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please Login with Your Account." });
  }
  const user = await User.findOne({
    where: {
      uuid: req?.session?.userId,
    },
  });
  if (!user) return res.status(404).json({ message: "User not Found." });
  req.userId = user?.id;
  req.role = user?.role;
  next();
};
export const isAdmin = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req?.session?.userId,
    },
  });
  if (!user) return res.status(404).json({ message: "User not Found." });
  if (user?.role !== "admin")
    return res.status(403).json({ message: "Access Denied !" });
  next();
};
