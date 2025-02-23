import jwt from "jsonwebtoken";

export const isAdmin = (req, res, next) => {
  try {
    const { id, role } = jwt.verify(
      req?.headers?.authorization.split(" ")[1],
      process.env.SECRET_KEY
    );

    req.id = id;

    req.role = role;
    if(role!='admin') {
        return res.status(403).json({ 
            success:false,
            message: "You are not an admin, you don't have a permission" });
    }
    return next();

  } catch (error) {
    return res.status(401).json({ 
        success:false,
        message: "Unauthorized, you must be login as admin" });
  }
};
