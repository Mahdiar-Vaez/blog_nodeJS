import jwt from "jsonwebtoken";

export const isLogin = (req, res, next) => {
  try {
    const { id, role } = jwt.verify(
      req?.headers?.authorization.split(" ")[1],
      process.env.SECRET_KEY
    );

    req.id = id;
    req.role = role;
    return next();

  } catch (error) {
    return res.status(401).json({ 
        success:false,
        message: "Unauthorized, you must be login" });
  }
};
